import { VFC } from 'react'
import { RecoilRoot } from 'recoil'

import { Header } from './components/templetes/Header'
import { Main } from './components/templetes/Main'
import './reset.css'

const App: VFC = () => (
  <RecoilRoot>
    <Header />
    <Main />
  </RecoilRoot>
)

export default App
