import styled from 'styled-components'

export const ContainerPerfil = styled.div`
width: 100%;
height: 100%;
background-color: white;
`
export const CardPerfil = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 300px 1fr 80px;
justify-items: center;
align-items: center;
`
export const FotoFundo = styled.img`
grid-area: 1 / 1 / 2 / 2;
width: 400px;
height: 296px;
opacity: 0.4;
filter: blur(4px);
`

export const Foto = styled.img`
grid-area: 1 / 1 / 2 / 2;
max-width: 90%;
height: 300px;
object-fit: cover;
position: relative;
`

export const Texto = styled.div`
grid-area: 2 / 1 / 3 / 2;
width: 90%;
padding: 4px;
`

export const Botoes = styled.div`
grid-area: 3 / 1 / 4 / 2;
width: 60%;
display: flex;
align-items: center;
justify-content: space-between;
img{
    width: 54px;
    height: 54px;
    opacity: 0.6;
    :hover{
        cursor: pointer;
        opacity: 1;
        width: 60px;
        height: 60px;
    }
    :active {
        width: 48px;
        height: 48px;
        transition: width 1s, height 1s;
    }
}
`
