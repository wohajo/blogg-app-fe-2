import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from '../Navbar/Navbar';
import PostArea from '../Post/PostArea';

const ErrorPage = () => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <PostArea/> 
    </ThemeProvider>
    )
}

export default ErrorPage