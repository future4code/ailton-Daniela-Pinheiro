import styled from "styled-components"

export const ContainerLista = styled.div`
display: flex;
justify-content:flex-start;
flex-wrap: wrap;
margin-top: 12px;
`
export const CardPlaylist = styled.div`
width: 200px;
height: 160px;
margin: 4px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border: 1px solid #f1efe9bb;
border-radius: 6px;
padding: 12px;
h4:hover{
    cursor: pointer;
    color: #f1efe9bb;
}
`
export const IconePlaylist = styled.img`
width: 64px;
height: 64px;
`