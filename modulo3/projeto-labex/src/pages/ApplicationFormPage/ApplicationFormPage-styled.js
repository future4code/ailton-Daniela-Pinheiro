import styled from "styled-components"

export const ContainerApplication = styled.div`
width: 100%;
height: 100%;
padding-top: 20px;
padding-bottom: 20px;
background-color: aliceblue;
display: flex;
flex-direction: column;
align-items: center;
`
export const ContainerButtons = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
`
export const ApplicationForm = styled.form`
width: 40%;
height: 100%;
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
input, select {
    width: 90%;
    padding: 8px;
    margin: 8px;
    border: 1px solid #000066;
    border-radius: 6px;
}
`