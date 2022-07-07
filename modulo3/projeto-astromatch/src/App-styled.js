import styled from 'styled-components'

export const Container = styled.div`
font-family: 'Quicksand', sans-serif;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`
export const ContainerMenor = styled.div`
width: 400px;
height: 580px;
padding: 8px;
display: grid;
grid-template-rows: 40px 1fr 24px;
grid-template-columns: 1fr;
align-items: center;
background-color: darkgray;
border-radius: 12px;
`
export const Cabecalho = styled.header`
grid-area: 1 / 1 / 2 / 2;
display: flex;
align-items: center;
justify-content: space-evenly;
font-family: 'Fredoka One', cursive;
img {
    height: 36px;
    width: auto;
}
`
export const Rodape = styled.footer`
grid-area: 3 / 1 / 4 / 2;
padding-top: 4px;
display: flex;
justify-content: center;
`
