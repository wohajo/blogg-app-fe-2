import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StatsAPI } from '../../API/StatsAPI';
import { BestUserInterface, RootState } from '../../Interfaces/Interfaces';
import { postsNotLoaded, resetPosts, postsLoaded, setPosts, setBestUsers } from '../../Redux/actions';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
    }),
);

const StatsArea = () => {

    const classes = useStyles();
    const password = useSelector((state: RootState) => state.password);
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state: RootState) => state.sessionUser);
    const posts = useSelector((state: RootState) => state.posts);
    const isSpinnerVisible = useSelector((state: RootState) => state.postsSpinner);

    useEffect(() => {
        if (password === null) {
            history.push({
                pathname:  "/"
            });
        } else {
            dispatch(postsNotLoaded())
            dispatch(resetPosts())
            StatsAPI
            .fetchLongestPosts(sessionUser.username, password)
            .then(async (data) => {
                await dispatch(setPosts(data))
            })
            .catch((error) => alert(error.response.data.message))
            StatsAPI
            .fetchBestUsers(sessionUser.username, password)
            .then(async (data) => { 
                await dispatch(setBestUsers(data))
                dispatch(postsLoaded())
            })
            .catch((error) => alert(error.response.data.message))
        }
    }, [password])

    return (
        <div>
            {isSpinnerVisible
            ? <LoadingSpinner/>
            : <div>done</div>}
        </div>

    )
}

export default StatsArea