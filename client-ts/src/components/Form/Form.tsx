import React from 'react';
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material'

const Form: React.FC = () => {
    const theme = createTheme();
    
    return (
        <ThemeProvider theme={theme}>
            <div>Form </div>
        </ThemeProvider>
        
    )
}

export default Form