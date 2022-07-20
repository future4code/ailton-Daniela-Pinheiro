import styled from "styled-components"

export const ContainerAdminHome = styled.div`
width: 100%;
height: 100%;
padding-top: 4px;
padding-bottom: 8px;
background-color: aliceblue;
display: flex;
flex-direction: column;
align-items: center;
h2 {
    margin-bottom: 32px;
}
`
export const CardAdminHome = styled.div`
border-radius: 8px;
width: 50%;
min-height: 140px;
margin: 4px 0;
padding: 8px 20px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-evenly;
h3 {
    color: #3333AA;
    margin-bottom: 8px;
}
:hover{
    width: 54%;
    transition: 1s;
}
`
export const ContainerCardButtons = styled.div`
margin-top: 16px;
display: flex;
justify-content: space-between;
`

export const CardText = styled.div`
width: 50%;
background-color: white;
padding: 12px;
text-align: center;
`
export const ContainerLogout = styled.div`
width: 100%;
padding-right: 20px;
display: flex;
justify-content: flex-end;
`
export const ContainerButtons = styled.div`
width: 40%;
display: flex;
justify-content: space-between;
`
export const ButtonAdminHome = styled.button`
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
