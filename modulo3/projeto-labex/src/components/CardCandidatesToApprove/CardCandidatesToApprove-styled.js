import styled from "styled-components"

export const CardCandidates = styled.div`
border-radius: 8px;
width: 50%;
margin: 4px;
padding: 12px 20px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
export const ContainerButtons = styled.div`
align-self: center;
margin-top: 16px;
display: flex;
justify-content: space-between;
`
export const ButtonCandidates = styled.button`
background-color: #00006688;
margin: 8px 12px;
padding: 8px 12px;
border: 1px solid white;
border-radius: 8px;
color: white;
:hover {
    cursor: pointer;
    background-color: #000066CC;
    transition: 0.5s;
}
:active {
    cursor: pointer;
    background-color: #00006688;
}
`