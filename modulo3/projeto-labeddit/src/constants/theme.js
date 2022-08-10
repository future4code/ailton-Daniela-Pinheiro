import { createTheme } from "@mui/material/styles"
import { primaryColor, secondaryColor } from "./colors"

export const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
  })

