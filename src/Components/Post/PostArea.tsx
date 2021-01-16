import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PostsAPI } from '../../API/PostsAPI'
import { RootState } from '../../Interfaces/Interfaces'
import { postsLoaded, postsNotLoaded, resetPosts, setPosts } from '../../Redux/actions';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import Post from './Post';
import PostWriter from './PostWriter';

const PostArea = () => {

    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.posts);
    const password = useSelector((state: RootState) => state.password);
    const isSpinnerVisible = useSelector((state: RootState) => state.isSpinnerInPosts);

    useEffect(() => {
        dispatch(postsNotLoaded())
        dispatch(resetPosts())
        PostsAPI
        .fetchPosts()
        .then(async (data) => {
            await dispatch(setPosts(data))
            dispatch(postsLoaded())
        })
    }, [dispatch])

    const useStyles = makeStyles((theme: Theme) =>
          createStyles({
            root: {
              flexGrow: 1,
            },
            paper: {
              height: 140,
              width: 100,
            },
            control: {
              padding: theme.spacing(2),
            },
          }),
        );

    const showPosts = () => {

        if (posts === null) {
            return <Typography>No posts to show.</Typography>
        } else {
            return posts.map(post =>
                <Grid key={post.id} item>
                    <Post
                    key={'post' + post.id} 
                    id={post.id} 
                    userId={post.userId} 
                    contents={post.contents}
                    name={post.name}
                    />
                </Grid>
            )
        }
    } 

    const showWriteOrNot = () => {
        if (password === null) {
            return (<div></div>)
        } else {
            return (<PostWriter/>)
        }
    }

    const classes = useStyles();

    return (
        <Paper variant="outlined">
            {isSpinnerVisible
            ? <div></div>
            : showWriteOrNot()}
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {isSpinnerVisible
                        ? <LoadingSpinner/>
                        : showPosts()}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PostArea