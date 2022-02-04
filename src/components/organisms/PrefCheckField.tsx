import axios from 'axios'
import { useEffect, VFC } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { PrefListState } from '../../globalState/atoms/PrefListState'

import { Prefectures } from '../../types/api/Prefectures'
import { CheckBox } from '../atoms/CheckBox'
import { PrimaryTitle } from '../atoms/PrimaryTitle'

export const PrefCheckField: VFC = () => {
  const [prefList, setPrefList] = useRecoilState(PrefListState)

  useEffect(() => {
    axios
      .get<Prefectures>('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': 'YFP5CPpHX4YZJPHhaWtUbVtNoL8heMOWtewZ5or5' },
      })
      .then((res) => {
        setPrefList(res.data.result)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [setPrefList])

  return (
    <>
      <PrimaryTitle>都道府県</PrimaryTitle>
      <Container>
        {prefList.map((pref) => (
          <CheckBox prefCode={pref.prefCode} prefName={pref.prefName} key={pref.prefCode} />
        ))}
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
