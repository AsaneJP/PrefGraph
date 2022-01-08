import { atom } from 'recoil'
import { PrefList } from '../../types/PrefList'

export const PrefCheckState = atom<Array<PrefList>>({
  key: 'PrefCheckState',
  default: [],
})
