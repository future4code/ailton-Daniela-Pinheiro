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
background-color: lightcyan;
border: 2px solid cadetblue;
border-radius: 12px;
`
export const Cabecalho = styled.header`
grid-area: 1 / 1 / 2 / 2;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 4px 8px 4px;
font-family: 'Fredoka One', cursive;
color: cadetblue;
img {
    height: 36px;
    width: auto;
    :hover{
        cursor: pointer;
    }
}
`
export const Rodape = styled.footer`
grid-area: 3 / 1 / 4 / 2;
padding-top: 4px;
display: flex;
justify-content: center;
button {
    background-color: cadetblue;
    color: lightcyan;
    padding: 2px 4px;
    border: none;
    border-radius: 2px;
    :hover {
        cursor: pointer;
        background-color: #436e70;
    }
    :active {
        background-color: cadetblue;
        color: #436e70;
    }
}
`
