'use client'

import { useState } from 'react'
import { Typography, Select, Input, Button, Form, Space, Row, Col } from 'antd'
import { PlusOutlined, SaveOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CreateEditEmailCampaignPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedTemplate, setSelectedTemplate] = useState<string | undefined>(
    undefined,
  )
  const [emailAddresses, setEmailAddresses] = useState<string[]>([])
  const [emailSubject, setEmailSubject] = useState<string>('')
  const [emailBody, setEmailBody] = useState<string>('')

  const { data: templates, isLoading: templatesLoading } =
    Api.emailTemplate.findMany.useQuery({})
  const { mutateAsync: createEmailCampaign } = Api.email.create.useMutation()

  const handleAddEmail = (email: string) => {
    if (email && !emailAddresses.includes(email)) {
      setEmailAddresses([...emailAddresses, email])
    }
  }

  const handleSaveCampaign = async () => {
    try {
      await createEmailCampaign({
        data: {
          subject: emailSubject,
          body: emailBody,
          senderId: user?.id,
          templateId: selectedTemplate,
          emailRecipients: {
            create: emailAddresses.map(email => ({
              recipientEmail: email,
              status: 'pending',
            })),
          },
        },
      })
      enqueueSnackbar('Email campaign saved successfully', {
        variant: 'success',
      })
      router.push(`/organizations/${params.organizationId}/email-campaigns`)
    } catch (error) {
      enqueueSnackbar('Failed to save email campaign', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={2}>Create/Edit Email Campaign</Title>
          <Text>
            Select an email template, add recipients, and save your campaign.
          </Text>
          <Form layout="vertical" style={{ marginTop: 20 }}>
            <Form.Item label="Email Template">
              <Select
                placeholder="Select a template"
                loading={templatesLoading}
                onChange={value => setSelectedTemplate(value)}
              >
                {templates?.map(template => (
                  <Option key={template.id} value={template.id}>
                    {template.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Email Addresses">
              <Input.Search
                placeholder="Enter email address"
                enterButton={<PlusOutlined />}
                onSearch={handleAddEmail}
              />
              <Space direction="vertical" style={{ marginTop: 10 }}>
                {emailAddresses.map(email => (
                  <Text key={email}>{email}</Text>
                ))}
              </Space>
            </Form.Item>
            <Form.Item label="Email Subject">
              <Input
                value={emailSubject}
                onChange={e => setEmailSubject(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Email Body">
              <Input.TextArea
                rows={4}
                value={emailBody}
                onChange={e => setEmailBody(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                icon={<SaveOutlined />}
                onClick={handleSaveCampaign}
              >
                Save Campaign
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
