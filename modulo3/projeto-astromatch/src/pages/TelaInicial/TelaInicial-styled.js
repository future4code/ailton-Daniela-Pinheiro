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
grid-template-rows: 320px 1fr 60px;
justify-items: center;
align-items: center;
`
export const FotoFundo = styled.img`
grid-area: 1 / 1 / 2 / 2;
width: 400px;
height: 312px;
opacity: 0.4;
filter: blur(4px);
`

export const Foto = styled.img`
grid-area: 1 / 1 / 2 / 2;
max-width: 90%;
max-height: 312px;
position: relative;
`

export const Texto = styled.div`
grid-area: 2 / 1 / 3 / 2;
width: 90%;
padding: 4px;
`

export const Botoes = styled.div`
grid-area: 3 / 1 / 4 / 2;
button{
    margin: 4px 40px;
}
`
