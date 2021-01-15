import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from '../Navbar/Navbar';

const ErrorPage = () => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
    </ThemeProvider>
    )
}

//TODO if not logged in redirect

export default ErrorPage