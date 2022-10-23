import { createGlobalStyle } from 'styled-components'
import { TEXT_COLOR } from './colors'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${TEXT_COLOR};
    }
`