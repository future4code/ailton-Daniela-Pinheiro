import styled from 'styled-components'

export const ContainerPrincipal = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: 60px 1fr 32px;
height: 100vh;
width: 100vw;
background-color: #20203c;
`
export const Cabecalho = styled.header`
grid-area: 1 / 1 / 2 / 3;
padding: 16px;
background-color: #f03000;
color: white;
display: flex;
align-items: center;
`
export const Icone = styled.img`
width: 20px;
height: 22px;
margin-right: 16px;
`
export const MenuLateral = styled.nav`
grid-area: 2 / 1 / 3 / 2;
background-color: #111122;
padding: 20px;
color: #f1efe9aa;
h3{
    margin-bottom: 16px;
}
h3:hover {
    cursor: pointer;
    color: #f1efe9;
}
`
export const Principal = styled.main`
grid-area: 2 / 2 / 3 / 3;
padding: 20px;
color: #f1efe9;
`
export const Rodape = styled.footer`
grid-area: 3 / 1 / 4 / 3;
padding: 8px 20px;
color: #f1efe9;
background-color: #111122;
`
