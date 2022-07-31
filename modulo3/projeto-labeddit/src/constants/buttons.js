import styled from "styled-components"
import { highligthColor, secondaryColor } from "./colors"

export const LargeButton = styled.button`
width: 90%;
height: 48px;
margin-top: 8px;
margin-bottom: 8px;
font-size: larger;
font-weight: bold;
color: white;
border-radius: 3em;
border: none;
background-image: linear-gradient(to right, ${highligthColor} , ${secondaryColor});
`
export const LargeSignUpButton = styled.button`
width: 90%;
height: 48px;
margin-top: 8px;
margin-bottom: 8px;
font-size: large;
font-weight: bold;
color: ${secondaryColor};
border-radius: 3em;
border: 1px solid ${secondaryColor};
background-color: transparent;
`
export const LargePostButton = styled.button`
width: 90%;
height: 48px;
margin-top: 8px;
margin-bottom: 8px;
font-size: larger;
font-weight: bold;
color: white;
border-radius: 1em;
border: none;
background-image: linear-gradient(to right, ${highligthColor} , ${secondaryColor});
`
