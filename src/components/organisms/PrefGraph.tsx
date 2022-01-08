import { VFC } from 'react'

import { useRecoilValue } from 'recoil'
import { PrefCheckState } from '../../globalState/atoms/PrefCheckState'
import { PrimaryTitle } from '../atoms/PrimaryTitle'

export const PrefGraph: VFC = () => {
  const prefCheck = useRecoilValue(PrefCheckState)
  console.log(prefCheck);

  return <PrimaryTitle>人口推移グラフ</PrimaryTitle>
}
