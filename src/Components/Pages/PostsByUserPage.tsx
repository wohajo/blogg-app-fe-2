import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { RouteComponentProps } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import PostAreaByUser from '../Post/PostAreaByUser';

interface RouteInfo {
    userId: string;
}

const PostsByUserPage = ({ match } : RouteComponentProps<RouteInfo>) => {

    const { params } = match;
    const userIdFromURL = +params.userId;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <PostAreaByUser userId={userIdFromURL}/>
        </ThemeProvider>
    )
}

export default PostsByUserPage