import { VFC } from 'react'
import styled from 'styled-components'

type Props = {
  children: string
}

export const PrimaryTitle: VFC<Props> = (props) => {
  const { children } = props
  return (
    <div>
      <Title>{children}</Title>
      <Div>
        <BorderLine />
      </Div>
    </div>
  )
}

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
  color: #1a202c;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
`

const BorderLine = styled.span`
  display: inline-block;
  content: '';
  width: 4rem;
  height: 0.25rem;
  background-color: #667eea;
  border-radius: 9999px;
`
