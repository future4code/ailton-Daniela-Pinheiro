import styled from 'styled-components'
import background from '../../assets/img/background-image.png'

export const ContainerHome = styled.div`
width: 100%;
height: 100%;
background-image: url(${background});
object-fit: cover;
display: flex;
align-items: flex-end;
justify-content: center;
`
export const ButtonHome = styled.button`
background-color: #00006688;
width: 240px;
height: 64px;
margin: 80px 12px;
border: 1px solid white;
border-radius: 8px;
font-size: 20px;
color: white;
:hover {
    cursor: pointer;
    background-color: #000066CC;
    transition: 0.5s;
}
:active {
    cursor: pointer;
    background-color: #00006655;
    mix-blend-mode: overlay;
}
`