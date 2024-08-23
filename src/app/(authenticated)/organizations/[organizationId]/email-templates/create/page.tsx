'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Input, Button, Form, Space } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CreateEditEmailTemplatePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [template, setTemplate] = useState<
    Prisma.EmailTemplateGetPayload<{ include: { user: true } }>
  >({
    id: '',
    name: '',
    subject: '',
    body: '',
    userId: user?.id,
    user: user,
    dateCreated: '',
    dateDeleted: '',
    dateUpdated: '',
  })

  const { mutateAsync: createTemplate } = Api.emailTemplate.create.useMutation()
  const { mutateAsync: updateTemplate } = Api.emailTemplate.update.useMutation()

  const handleSave = async (values: any) => {
    try {
      if (template.id) {
        await updateTemplate({ where: { id: template.id }, data: values })
        enqueueSnackbar('Template updated successfully', { variant: 'success' })
      } else {
        await createTemplate({ data: values })
        enqueueSnackbar('Template created successfully', { variant: 'success' })
      }
      router.push(`/organizations/${params.organizationId}/email-templates`)
    } catch (error) {
      enqueueSnackbar('Failed to save template', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title level={2}>Create or Edit Email Template</Title>
        <Paragraph>
          Use the form below to create or edit your email template. You can save
          it for future email campaigns.
        </Paragraph>
        <Form
          layout="vertical"
          initialValues={template}
          onFinish={handleSave}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <Form.Item
            label="Template Name"
            name="name"
            rules={[
              { required: true, message: 'Please input the template name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email Subject"
            name="subject"
            rules={[
              { required: true, message: 'Please input the email subject!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email Body"
            name="body"
            rules={[
              { required: true, message: 'Please input the email body!' },
            ]}
          >
            <Input.TextArea rows={10} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
              Save Template
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </PageLayout>
  )
}
