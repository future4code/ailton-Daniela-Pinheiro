import React from 'react'
import styled from 'styled-components'

const CompartilharContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`

const CompartilharContainerMenor = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
`
const InputMensagem = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoCompartilhar extends React.Component {

    state = {
        compartilhadoInstagram: false,
        compartilhadoFacebook: false,
        compartilhadoTwitter: false,
        mensagem: ''
    }

    onChangeMensagem = (event) => {
		this.setState({mensagem: event.target.value})
	}

    onClickInstagram = () => {
        // this.setState({
        //     compartilhadoInstagram: !this.state.compartilhadoInstagram   
        // })
        console.log(`Post compartilhado no Instagram com a mensagem: "${this.state.mensagem}"`)
    }

    onClickFacebook = () => {
        // this.setState({
        //     compartilhadoFacebook: !this.state.compartilhadoFacebook   
        // })
        console.log(`Post compartilhado no Facebook com a mensagem: "${this.state.mensagem}"`)
    }

    onClickTwitter = () => {
        // this.setState({
        //     compartilhadoTwitter: !this.state.compartilhadoTwitter   
        // })
        console.log(`Post compartilhado no Twitter com a mensagem: "${this.state.mensagem}"`)
    }

	render() {
		return <CompartilharContainer>
            <CompartilharContainerMenor>
                <InputMensagem 
                    placeholder={'Mensagem'}
                    value={this.state.mensagem}
                    onChange={this.onChangeMensagem}
                />
            </CompartilharContainerMenor>
            <CompartilharContainerMenor>
                <button onClick={this.onClickInstagram}>Instagram</button>
                <button onClick={this.onClickFacebook}>Facebook</button>
                <button onClick={this.onClickTwitter}>Twitter</button>
            </CompartilharContainerMenor>
        </CompartilharContainer>
	}
}
