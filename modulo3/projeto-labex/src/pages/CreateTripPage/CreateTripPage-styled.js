import styled from "styled-components"

export const ContainerCreate = styled.div`
width: 100%;
height: 100%;
padding-top: 20px;
background-color: aliceblue;
display: flex;
flex-direction: column;
align-items: center;
h2 {
    margin-bottom: 32px;
}
`
export const ContainerButtons = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
`
export const CreateTripForm = styled.form`
width: 40%;
height: 100%;
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