import styled from "styled-components"

export const Button = styled.button`
width: 92px;
height: 32px;
margin: 8px 12px;
background-color: #00009988;
border-radius: 6px;
border: none;
color: white;
:hover {
    cursor: pointer;
    border: 1px solid white;
    background-color: #00009955;
    width: 120px;
    transition: 1s;
}
:active {
    background-color: #000099AA;
}
`