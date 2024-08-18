import React from 'react'
import '../style/styles.scss'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import Header from './Header/Header'
import Home from './home/Home'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1e1c22;'
        },
        secondary: {
            main: '#f4fff8'
        },
        background: {
            default: '#fff'
        },
        text: {
            primary: '#333'
        }
    }
})

function App() {
    return (
        
        <ThemeProvider theme={theme}>
        <Header />
        <Home />
        </ThemeProvider>
    )
}
export default App