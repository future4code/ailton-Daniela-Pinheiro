import { createGlobalStyle } from "styled-components"
import { neutralColor } from "../../constants/colors"
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto';
}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    min-height: 100vh;
    color: ${neutralColor};
}
`