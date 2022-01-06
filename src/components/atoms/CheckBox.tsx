import { VFC } from 'react'
import styled from 'styled-components'
import { PrefList } from '../../types/PrefList'

export const CheckBox: VFC<PrefList> = (props) => {
  const { prefCode, prefName } = props

  return (
    <Div>
      <Input type="checkbox" id={`pref-${prefCode}`} />
      <Label htmlFor={`pref-${prefCode}`}>{prefName}</Label>
    </Div>
  )
}

const Div = styled.div`
  width: 100px;
`

const Input = styled.input`
  cursor: pointer;
`

const Label = styled.label`
  cursor: pointer;
  margin-left: 8px;
`
