import { atom } from 'recoil'
import { PrefData } from '../../types/PrefData'

export const PrefCheckState = atom<Array<PrefData>>({
  key: 'PrefCheckState',
  default: [],
})
