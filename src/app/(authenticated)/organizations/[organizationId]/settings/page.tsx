'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Form, Input, Button, Row, Col, Spin } from 'antd'
import { SaveOutlined, EditOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function UserSettingsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const userId = user?.id

  const {
    data: userSettings,
    isLoading,
    refetch,
  } = Api.userSetting.findMany.useQuery({
    where: { userId: userId },
  })

  const { mutateAsync: updateUserSetting } =
    Api.userSetting.update.useMutation()
  const { mutateAsync: createUserSetting } =
    Api.userSetting.create.useMutation()

  const [form] = Form.useForm()

  useEffect(() => {
    if (userSettings) {
      const settings = userSettings.reduce((acc, setting) => {
        acc[setting.settingKey] = setting.settingValue
        return acc
      }, {})
      form.setFieldsValue(settings)
    }
  }, [userSettings, form])

  const handleSave = async values => {
    try {
      const promises = Object.keys(values).map(async key => {
        const existingSetting = userSettings?.find(
          setting => setting.settingKey === key,
        )
        if (existingSetting) {
          await updateUserSetting({
            where: { id: existingSetting.id },
            data: { settingValue: values[key] },
          })
        } else {
          await createUserSetting({
            data: {
              settingKey: key,
              settingValue: values[key],
              userId: userId,
            },
          })
        }
      })
      await Promise.all(promises)
      enqueueSnackbar('Settings saved successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to save settings', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          <Title level={2}>User Settings</Title>
          <Text>Manage your default settings for email campaigns.</Text>
          <Form form={form} layout="vertical" onFinish={handleSave}>
            <Form.Item label="Default Sender Name" name="defaultSenderName">
              <Input placeholder="Enter your default sender name" />
            </Form.Item>
            <Form.Item label="Default Sender Email" name="defaultSenderEmail">
              <Input placeholder="Enter your default sender email" />
            </Form.Item>
            <Form.Item label="Default Email Subject" name="defaultEmailSubject">
              <Input placeholder="Enter your default email subject" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                Save Settings
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
