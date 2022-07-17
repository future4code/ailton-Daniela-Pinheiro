import React from "react"
import { Router } from './routes/Router'
import { Container, Header, Content } from "./App-styled"

function App() {
  return <Container>
    <Header>
      <h1>LabeX</h1>
      <p>Encontre as melhores viagens espaciais!</p>
    </Header>

    <Content>
      <Router />
    </Content> 
  </Container>
}

export default App;
