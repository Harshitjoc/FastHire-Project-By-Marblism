'use client'

import { Typography, Row, Col, Card, Spin } from 'antd'
import { MailOutlined, FileTextOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: emailCampaigns, isLoading: isLoadingCampaigns } =
    Api.email.findMany.useQuery({
      where: { senderId: user?.id },
      include: { template: true, emailRecipients: true },
    })

  const { data: emailTemplates, isLoading: isLoadingTemplates } =
    Api.emailTemplate.findMany.useQuery({
      where: { userId: user?.id },
    })

  const handleNavigate = (path: string) => {
    router.push(path)
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Overview of Email Campaigns and Templates</Title>
      <Text>
        Quickly access your recent activities and manage your email campaigns
        and templates.
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        <Col span={24}>
          <Title level={4}>Email Campaigns</Title>
          {isLoadingCampaigns ? (
            <Spin />
          ) : (
            <Row gutter={[16, 16]}>
              {emailCampaigns?.map(campaign => (
                <Col key={campaign.id} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    title={campaign.subject}
                    bordered={false}
                    onClick={() =>
                      handleNavigate(
                        `/organizations/${params.organizationId}/email-campaigns/${campaign.id}`,
                      )
                    }
                    hoverable
                  >
                    <MailOutlined style={{ fontSize: '24px', color: '#08c' }} />
                    <Text>{campaign.body}</Text>
                    <br />
                    <Text type="secondary">
                      {dayjs(campaign.dateCreated).format('MMMM D, YYYY')}
                    </Text>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>

        <Col span={24}>
          <Title level={4}>Email Templates</Title>
          {isLoadingTemplates ? (
            <Spin />
          ) : (
            <Row gutter={[16, 16]}>
              {emailTemplates?.map(template => (
                <Col key={template.id} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    title={template.name}
                    bordered={false}
                    onClick={() =>
                      handleNavigate(
                        `/organizations/${params.organizationId}/email-templates/${template.id}`,
                      )
                    }
                    hoverable
                  >
                    <FileTextOutlined
                      style={{ fontSize: '24px', color: '#08c' }}
                    />
                    <Text>{template.subject}</Text>
                    <br />
                    <Text type="secondary">
                      {dayjs(template.dateCreated).format('MMMM D, YYYY')}
                    </Text>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
