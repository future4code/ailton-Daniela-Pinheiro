import styled from "styled-components"
import { BUTTON_COLOR, FORM_COLOR } from "../../constants/colors"

export const FormContainer = styled.form`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${FORM_COLOR};
`

export const Input = styled.input`
    padding: 12px;
    border: none;
    border-radius: 2px;
    margin: 8px;
`

export const Button = styled.button`
    background-color: ${FORM_COLOR};
    color: white;
    font-weight: bold;
    padding: 10px 32px;
    border: 2px solid white;
    border-radius: 2px;
    margin: 8px;
    :hover {
        cursor: pointer;
    }
    :active {
        background-color: ${BUTTON_COLOR};
        transition: 1s;
    }
`