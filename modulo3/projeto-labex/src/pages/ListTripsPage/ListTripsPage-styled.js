import styled from 'styled-components'

export const ContainerTrips = styled.div`
width: 100%;
height: 100%;
padding-top: 20px;
/* mudar cor */
background-color: aliceblue;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
button {
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
}
`