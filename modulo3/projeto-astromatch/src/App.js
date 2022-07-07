import React, { useState } from 'react'
import { Container, ContainerMenor } from './App-styled'
import TelaInicial from './pages/TelaInicial/TelaInicial'
import TelaMatches from './pages/TelaMatches'

function App() {

  const [telaAtual, setTelaAtual] = useState("inicial")

  const mudaTelaInicial = () => {
    setTelaAtual("inicial")
  }
  const mudaTelaMatches = () => {
    setTelaAtual("matches")
  }

  const mudaTela = () => {
    switch(telaAtual) {
      case "inicial":
        return <TelaInicial mudaTelaMatches={mudaTelaMatches} />
      case "matches":
        return <TelaMatches mudaTelaInicial={mudaTelaInicial}/>
      default:
        return <TelaInicial mudaTelaMatches={mudaTelaMatches} />
    }
  }

  return <Container>
    <ContainerMenor>
      <header>Header</header>
      {mudaTela()}
    </ContainerMenor>  
  </Container>
}

export default App
