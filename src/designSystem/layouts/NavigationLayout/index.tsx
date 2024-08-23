import { useUserContext } from '@/core/context'
import { DollarOutlined } from '@ant-design/icons'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { useDesignSystem } from '../../provider'
import { Leftbar } from './components/Leftbar'
import { Topbar } from './components/Topbar'

import { OrganizationSelect } from './components/OrganizationSelect'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const { organization, authenticationStatus: isLoggedIn } = useUserContext()

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const itemsLeftbar = [
    {
      key: '/home',
      label: 'Home Page',
      onClick: () => goTo('/home'),
    },

    {
      key: '/organizations/:organizationId/email-campaigns',
      label: 'Email Campaigns Page',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/email-campaigns'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/email-campaigns/create',
      label: 'Create/Edit Email Campaign Page',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/email-campaigns/create'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/email-templates',
      label: 'Email Templates Page',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/email-templates'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/email-templates/create',
      label: 'Create/Edit Email Template Page',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/email-templates/create'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/settings',
      label: 'User Settings Page',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/settings'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/file-upload',
      label: 'File Upload Page',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/file-upload'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },
  ]

  const itemsTopbar = []

  const itemsLeftbarBottom = [
    {
      key: '/organizations/:organizationId/pricing',
      icon: <DollarOutlined />,
      label: 'Pricing',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/pricing'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },
  ]

  const itemsMobile = [
    {
      key: '/profile',
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
    ...itemsLeftbarBottom,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                header={<OrganizationSelect />}
                items={itemsLeftbar}
                itemsBottom={itemsLeftbarBottom}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              itemsMobile={itemsMobile}
              isLoggedIn={isLoggedIn === 'authenticated'}
              items={itemsTopbar}
              header={!isLeftbar && <OrganizationSelect />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
