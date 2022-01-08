import { atom } from 'recoil'
import { PrefList } from '../../types/PrefList'

export const PrefListState = atom<Array<PrefList>>({
  key: 'PrefListState',
  default: [],
})
