import React from 'react'
import ReactDOM from 'react-dom/client'
import { Preview } from "./pages/Preview"

import { ThemeProvider } from 'styled-components'
import GlobalStyle from "./styles/global"
import theme from "./styles/theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Preview />
    </ThemeProvider>
  </React.StrictMode>,
)
