import { createGlobalStyle } from "styled-components"
import { neutralColor } from "../../constants/colors"

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    min-height: 100vh;
    color: ${neutralColor};
}
`