'use client'

import { useState } from 'react'
import { Upload, Button, Typography, Row, Col, Spin } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function FileUploadPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: loadFile } = Api.rag.loadFile.useMutation()

  const [loading, setLoading] = useState(false)

  const handleUpload = async ({ file }: { file: File }) => {
    setLoading(true)
    try {
      const { url } = await upload({ file })
      const { key } = await loadFile({ url })
      enqueueSnackbar('File uploaded and processed successfully!', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to upload and process file.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          <Title level={2}>Upload Your Files</Title>
          <Text>
            Upload files to use them in the context of AI RAG for generating
            content or analyzing data.
          </Text>
          <Upload customRequest={handleUpload} showUploadList={false}>
            <Button
              icon={<UploadOutlined />}
              type="primary"
              style={{ marginTop: 20 }}
            >
              Click to Upload
            </Button>
          </Upload>
          {loading && <Spin style={{ marginTop: 20 }} />}
        </Col>
      </Row>
    </PageLayout>
  )
}
