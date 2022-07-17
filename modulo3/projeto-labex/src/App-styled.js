import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 92px 1fr;
`
export const Header = styled.header`
grid-area: 1 / 1 / 2 / 2;
padding: 32px 16px;
font-size: larger;
background-color: white;
display: flex;
align-items: baseline;
h1 {
  color: #000066;
}
p {
  margin-left: 16px;
}
`
export const Content = styled.main`
grid-area: 2 / 1 / 3 / 2;
`