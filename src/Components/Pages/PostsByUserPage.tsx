import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { RouteComponentProps } from 'react-router-dom';

interface RouteInfo {
    userId: string;
}

const PostsByUserPage = ({ match } : RouteComponentProps<RouteInfo>) => {

    const { params } = match;
    const userId = +params.userId;

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
    </ThemeProvider>
    )
}

export default PostsByUserPage