import styled from "styled-components"

export const Button = styled.button`
width: 120px;
height: 40px;
margin: 8px 12px;
background-color: #00009988;
border-radius: 6px;
border: none;
color: white;
font-size: 16px;
:hover {
    cursor: pointer;
    border: 1px solid white;
    background-color: #00009955;
    width: 140px;
    transition: 1s;
}
:active {
    background-color: #000099AA;
}
`