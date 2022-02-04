import axios from 'axios'
import { VFC } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { PrefCheckState } from '../../globalState/atoms/PrefCheckState'
import { Population } from '../../types/api/Population'
import { PrefList } from '../../types/PrefList'

export const CheckBox: VFC<PrefList> = (props) => {
  const { prefCode, prefName } = props
  const [prefCheck, setPrefCheck] = useRecoilState(PrefCheckState)

  const onChangePref = () => {
    const check = prefCheck.filter((text) => text.prefName.includes(prefName))
    if (check.length === 0) {
      axios
        .get<Population>(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
          {
            headers: { 'X-API-KEY': 'YFP5CPpHX4YZJPHhaWtUbVtNoL8heMOWtewZ5or5' },
          }
        )
        .then((res) => {
          setPrefCheck([
            ...prefCheck,
            {
              prefName,
              data: res.data.result.data[0].data,
            },
          ])
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      const result = prefCheck.filter((text) => !text.prefName.includes(prefName))
      setPrefCheck(result)
    }
  }

  return (
    <Container>
      <Input type="checkbox" id={`${prefCode}`} onChange={onChangePref} />
      <Label htmlFor={`${prefCode}`}>{prefName}</Label>
    </Container>
  )
}

const Container = styled.div`
  width: 100px;
  padding: 5px;
`

const Input = styled.input`
  cursor: pointer;
`

const Label = styled.label`
  cursor: pointer;
  margin-left: 8px;
`
