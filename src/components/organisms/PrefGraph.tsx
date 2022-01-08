import { VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { PrefCheckState } from '../../globalState/atoms/PrefCheckState'
import { PrimaryTitle } from '../atoms/PrimaryTitle'

export const PrefGraph: VFC = () => {
  const list = useRecoilValue(PrefCheckState)
  console.log(list)
  return <PrimaryTitle>人口推移グラフ</PrimaryTitle>
}
