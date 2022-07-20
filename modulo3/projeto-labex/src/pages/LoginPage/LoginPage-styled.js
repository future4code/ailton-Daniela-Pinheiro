import styled from 'styled-components'
import background from '../../assets/img/background-image.png'

export const ContainerLogin = styled.div`
width: 100%;
height: 100%;
background-image: url(${background});
object-fit: cover;
display: flex;
align-items: center;
justify-content: center;
`
export const CardLogin = styled.div`
width: 320px;
height: 200px;
background-color: #FFFFFFBB;
border: 1px solid white;
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
        margin: 4px;
        padding: 4px;
        border: 1px solid #000066;
        border-radius: 4px;
    }
}
`
export const ButtonLogin = styled.button`
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