import React from "react"
import HomePage from "./pages/HomePage"
import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 92px 1fr;
`
const Header = styled.header`
grid-area: 1 / 1 / 2 / 2;
padding: 32px 16px;
font-size: larger;
background-color: white;
display: flex;
align-items: baseline;
p {
  margin-left: 16px;
  color: dimgray;
}
`
const Content = styled.main`
grid-area: 2 / 1 / 3 / 2;
`

function App() {
  return <Container>
    <Header>
      <h1>LabeX</h1>
      <p>Todas as galáxias ao seu alcance!</p>
    </Header>
    <Content>
      <HomePage />
    </Content> 
  </Container>
}

export default App;
