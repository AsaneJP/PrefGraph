import styled from 'styled-components'

export const Header = () => (
  <HeaderContent>
    <h1>人口推移グラフ</h1>
  </HeaderContent>
)

const HeaderContent = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #333333;
  h1 {
    color: #f5faff;
    font-size: 1.5rem;
    font-weight: bold;
  }
`
