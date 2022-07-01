import styled from "styled-components"

export const ContainerDetalhe = styled.div`
display: flex;
justify-content:flex-start;
flex-wrap: wrap;
margin-top: 12px;
`
export const CardDetalhePlaylist = styled.div`
width: 260px;
height: 124px;
margin: 4px 4px 20px 4px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border: 1px solid #f1efe9bb;
border-radius: 6px;
padding: 12px;
p{
    align-self: flex-start;
}
audio{
    transform: scale(0.75);
}
`