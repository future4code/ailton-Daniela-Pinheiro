import styled from 'styled-components'

export const ContainerMatches = styled.div`
width: 400px;
height: 100%;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
`
export const Match = styled.div`
width: 100%;
margin-top: 4px;
margin-left: 12px;
display: flex;
align-items: center;
justify-content: flex-start;
list-style-type: none;
img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 20px;
    margin-right: 4px;
    filter: grayscale(50%);
}
`