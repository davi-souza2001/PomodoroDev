import React, { useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'

const theme = createTheme({
	palette: {
		mode: 'dark'
	}
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
)
