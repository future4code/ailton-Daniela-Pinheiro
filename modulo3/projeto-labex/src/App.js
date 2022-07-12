import React from "react"
import { Container, Header, Content } from "./App-styled"
import { Router } from './routes/Router'

function App() {
  return <Container>

    <Header>
      <h1>LabeX</h1>
      <p>Toda a galáxia ao seu alcance!</p>
    </Header>

    <Content>
      <Router />
    </Content> 

  </Container>
}

export default App;
