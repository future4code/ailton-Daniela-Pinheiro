import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/1/50/50'}
          fotoPost={'https://picsum.photos/id/40/200/150'}
        />

        <Post
          nomeUsuario={'fulano'}
          fotoUsuario={'https://picsum.photos/id/66/50/50'}
          fotoPost={'https://picsum.photos/id/3/200/150'}
        />

        <Post
          nomeUsuario={'sicr234'}
          fotoUsuario={'https://picsum.photos/id/10/50/50'}
          fotoPost={'https://picsum.photos/id/22/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
