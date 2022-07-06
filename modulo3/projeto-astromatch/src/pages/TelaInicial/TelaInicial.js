import React, { useState, useEffect } from 'react'

export default function TelaInicial(props) {
    
    return <div>
        <p>Tela Inicial</p>
        <button onClick={props.mudaTelaMatches}>Matches</button>
    </div>
}