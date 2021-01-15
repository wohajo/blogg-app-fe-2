import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

interface ErrorPageProps {
    message: string
}

const ErrorPage = (props: ErrorPageProps) => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
    </ThemeProvider>
    )
}

export default ErrorPage