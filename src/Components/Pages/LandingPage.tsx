import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import LoginForm from '../User/LoginForm';

const ErrorPage = () => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container justify = "center">
            <LoginForm />
        </Grid>
    </ThemeProvider>
    )
}

export default ErrorPage