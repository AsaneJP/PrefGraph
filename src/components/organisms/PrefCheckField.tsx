import axios from 'axios'
import { useState, useEffect, VFC } from 'react'
import styled from 'styled-components'

import { Prefectures } from '../../types/api/Prefectures'
import { PrefList } from '../../types/PrefList'
import { CheckBox } from '../atoms/CheckBox'

export const PrefCheckField: VFC = () => {
  const [prefList, setPrefList] = useState<Array<PrefList>>([])

  useEffect(() => {
    axios
      .get<Prefectures>('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': 'dZrxYBK2oivqxTL7IwNKkDyIuvVMhFFP6usuRl4H' },
      })
      .then((res) => {
        setPrefList(res.data.result)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Div>
      {prefList.map((pref) => (
        <CheckBox prefCode={pref.prefCode} prefName={pref.prefName} />
      ))}
    </Div>
  )
}

const Div = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
