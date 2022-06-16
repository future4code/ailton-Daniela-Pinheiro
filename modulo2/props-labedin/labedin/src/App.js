import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './img/photo.png';
import seta from './img/icone-seta.png';
import labenu from './img/icone-labenu.png';
import styled from 'styled-components';

// Estilização
const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const ContainerSecao = styled.div `
  width: 40vw;
  margin: 10px 0;
`
const TituloMaior = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <Container>
      <ContainerSecao>
        <TituloMaior>Dados pessoais</TituloMaior>
        <CardGrande 
          imagem={foto}
          nome="Daniela Klem" 
          descricao="Oi, eu me chamo Daniela! Sou aspirante a Web Developer, atualmente aluna na Labenu. Adoro estilizar páginas, testando diversos layouts e cores. Talvez por isso acabo demorando muito para terminar algumas atividades..."
        />
        
        <ImagemButton 
          imagem={seta} 
          texto="Ver mais"
        />
      </ContainerSecao>

      <ContainerSecao>
        <CardPequeno
          titulo="Email"
          conteudo="danie_klem@hotmail.com"
        />
      </ContainerSecao>

      <ContainerSecao>
        <CardPequeno
          titulo="Endereço"
          conteudo="São Paulo - SP"
        />
      </ContainerSecao>

      <ContainerSecao>
        <TituloMaior>Escolaridade</TituloMaior>
        <CardGrande 
          imagem={labenu} 
          nome="Labenu" 
          descricao="Estudante do curso Web Full Stack Integral" 
        />
        
      </ContainerSecao>

      <ContainerSecao>
        <TituloMaior>Minhas redes sociais</TituloMaior>
        <ImagemButton 
          link="https://pt-br.facebook.com/"
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          link="https://twitter.com/"
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </ContainerSecao>
    </Container>
  );
}

export default App;
