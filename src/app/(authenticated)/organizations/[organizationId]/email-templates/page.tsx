'use client'

import { useState } from 'react'
import { Typography, Button, Table, Space, Modal, Form, Input } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function EmailTemplatesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: emailTemplates,
    isLoading,
    refetch,
  } = Api.emailTemplate.findMany.useQuery({ where: { userId: user?.id } })

  const { mutateAsync: createTemplate } = Api.emailTemplate.create.useMutation()
  const { mutateAsync: updateTemplate } = Api.emailTemplate.update.useMutation()
  const { mutateAsync: deleteTemplate } = Api.emailTemplate.delete.useMutation()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState(null)

  const [form] = Form.useForm()

  const showModal = (template = null) => {
    setEditingTemplate(template)
    form.setFieldsValue(template || { name: '', subject: '', body: '' })
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setEditingTemplate(null)
  }

  const handleSave = async values => {
    try {
      if (editingTemplate) {
        await updateTemplate({
          where: { id: editingTemplate.id },
          data: values,
        })
        enqueueSnackbar('Template updated successfully', { variant: 'success' })
      } else {
        await createTemplate({ data: { ...values, userId: user?.id } })
        enqueueSnackbar('Template created successfully', { variant: 'success' })
      }
      refetch()
      handleCancel()
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' })
    }
  }

  const handleDelete = async id => {
    try {
      await deleteTemplate({ where: { id } })
      enqueueSnackbar('Template deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => showModal(record)}>
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Email Templates</Title>
      <Text>Manage your email templates for your campaigns.</Text>
      <Space style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal()}
        >
          Create New Template
        </Button>
      </Space>
      <Table
        dataSource={emailTemplates}
        columns={columns}
        rowKey="id"
        loading={isLoading}
      />
      <Modal
        title={editingTemplate ? 'Edit Template' : 'Create Template'}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleSave} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: 'Please input the template name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="subject"
            label="Subject"
            rules={[
              { required: true, message: 'Please input the template subject!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="body"
            label="Body"
            rules={[
              { required: true, message: 'Please input the template body!' },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
