import React, { useState } from 'react'
import './constants/fontes.css'
import { Container, ContainerMenor, Cabecalho, Rodape } from './App-styled'
import iconeInicial from './assets/img/icone-busca.png'
import iconeMatches from './assets/img/icone-matches.png'
import TelaInicial from './pages/TelaInicial/TelaInicial'
import TelaMatches from './pages/TelaMatches/TelaMatches'
import { clear } from './services/requisicoes'

function App() {

  // Estados
  const [telaAtual, setTelaAtual] = useState("inicial")

  // Funções de mudança de telas
  const mudaTelaInicial = () => {
    setTelaAtual("inicial")
  }
  const mudaTelaMatches = () => {
    setTelaAtual("matches")
  }

  // Funções de renderização condicional de telas
  const mudaTela = () => {
    switch(telaAtual) {
      case "inicial":
        return <TelaInicial/>
      case "matches":
        return <TelaMatches/>
      default:
        return <TelaInicial/>
    }
  }

  // Renderização condicional dos botões no Header
  const renderizaBotao = () => {
    if(telaAtual === "inicial") {
      return <img src={iconeMatches} alt="Matches" onClick={mudaTelaMatches}/>
    } else {
      return <img src={iconeInicial} alt="Início" onClick={mudaTelaInicial}/>
    }
  }

  return <Container>
    <ContainerMenor>
      <Cabecalho>
        <h1>astromatch</h1>
        {renderizaBotao()}
      </Cabecalho>
      {mudaTela()}
      <Rodape>
        <button onClick={clear}>Limpar matches</button>
      </Rodape>
      
    </ContainerMenor>  
  </Container>
}

export default App
