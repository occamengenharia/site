import React from 'react'

import Button from '../Button'

import { Container, TextContainer } from './styles'

interface PageHeaderProps {
  title: string
  subtitle?: string
  actionButton?: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  actionButton
}) => {
  return (
    <Container>
      <TextContainer>
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
      </TextContainer>
      {actionButton}
    </Container>
  )
}

export default PageHeader
