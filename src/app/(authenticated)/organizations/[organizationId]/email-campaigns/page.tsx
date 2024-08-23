'use client'

import { useState } from 'react'
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  Space,
  Typography,
  Popconfirm,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function EmailCampaignsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingCampaign, setEditingCampaign] = useState(null)
  const [form] = Form.useForm()

  const {
    data: campaigns,
    isLoading,
    refetch,
  } = Api.email.findMany.useQuery({
    where: { senderId: user?.id },
    include: { emailRecipients: true },
  })

  const { mutateAsync: createCampaign } = Api.email.create.useMutation()
  const { mutateAsync: updateCampaign } = Api.email.update.useMutation()
  const { mutateAsync: deleteCampaign } = Api.email.delete.useMutation()

  const handleCreate = async values => {
    try {
      await createCampaign({ data: { ...values, senderId: user?.id } })
      enqueueSnackbar('Campaign created successfully', { variant: 'success' })
      refetch()
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to create campaign', { variant: 'error' })
    }
  }

  const handleUpdate = async values => {
    try {
      await updateCampaign({ where: { id: editingCampaign.id }, data: values })
      enqueueSnackbar('Campaign updated successfully', { variant: 'success' })
      refetch()
      setIsModalVisible(false)
      setEditingCampaign(null)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to update campaign', { variant: 'error' })
    }
  }

  const handleDelete = async id => {
    try {
      await deleteCampaign({ where: { id } })
      enqueueSnackbar('Campaign deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete campaign', { variant: 'error' })
    }
  }

  const showModal = (campaign = null) => {
    setEditingCampaign(campaign)
    setIsModalVisible(true)
    if (campaign) {
      form.setFieldsValue(campaign)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setEditingCampaign(null)
    form.resetFields()
  }

  const columns = [
    { title: 'Subject', dataIndex: 'subject', key: 'subject' },
    { title: 'Body', dataIndex: 'body', key: 'body' },
    {
      title: 'Recipients',
      dataIndex: 'emailRecipients',
      key: 'emailRecipients',
      render: recipients => recipients?.length.toString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this campaign?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title>Email Campaigns</Title>
      <Text>Manage and track your email-sending activities.</Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
        style={{ margin: '20px 0' }}
      >
        Create New Campaign
      </Button>
      <Table
        dataSource={campaigns}
        columns={columns}
        rowKey="id"
        loading={isLoading}
      />

      <Modal
        title={editingCampaign ? 'Edit Campaign' : 'Create Campaign'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          onFinish={editingCampaign ? handleUpdate : handleCreate}
          layout="vertical"
        >
          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: 'Please input the subject!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="body"
            label="Body"
            rules={[{ required: true, message: 'Please input the body!' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingCampaign ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
