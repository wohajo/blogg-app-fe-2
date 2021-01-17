import React, { useEffect } from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { RouteComponentProps, useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import PostAreaByUser from '../Post/PostAreaByUser';
import { useSelector } from 'react-redux';
import { RootState } from '../../Interfaces/Interfaces';

interface RouteInfo {
    userId: string;
}

const PostsByUserPage = ({ match } : RouteComponentProps<RouteInfo>) => {

    const { params } = match;
    const userIdFromURL = +params.userId;

    const password = useSelector((state: RootState) => state.password);
    const history = useHistory();

    useEffect(() => {
        if (password === null) {
            history.push({
                pathname:  "/"
            });
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <PostAreaByUser userId={userIdFromURL}/>
        </ThemeProvider>
    )
}

//TODO if not logged in redirect

export default PostsByUserPage