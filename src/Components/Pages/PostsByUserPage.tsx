import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { RouteComponentProps } from 'react-router-dom';
import PostArea from '../Post/PostArea';

interface RouteInfo {
    userId: string;
}

const PostsByUserPage = ({ match } : RouteComponentProps<RouteInfo>) => {

    const { params } = match;
    const userIdFromURL = +params.userId;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <PostArea userId={userIdFromURL}/>
        </ThemeProvider>
    )
}

export default PostsByUserPage