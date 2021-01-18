import { makeStyles, Theme, createStyles, Grid, TextField, Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostsAPI } from '../../API/PostsAPI';
import { RootState } from '../../Interfaces/Interfaces';
import { postsLoaded, postsNotLoaded, resetPosts, setPosts } from '../../Redux/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        textAlign: 'center'
      },
    },
    button: {
        width: 200
    },
    searchBox: {
        width: 400
    },
    writer: {
        marginBottom: 10
    }
  }),
);

const PostWriter = () => {
    const classes = useStyles();
    const password = useSelector((state: RootState) => state.password);
    const sessionUser = useSelector((state: RootState) => state.sessionUser);
    const [postValue, setPostValue] = useState('');
    const dispatch = useDispatch();


    const handleSend = async () => {
        if (password !== null) {
            await PostsAPI
            .postPost(postValue, sessionUser.username, password)
            .catch((err) => {
                alert(err.response.data.message)
            })

            dispatch(postsNotLoaded())
            dispatch(resetPosts())
            PostsAPI
            .fetchPosts()
            .then(async (data) => {
                await dispatch(setPosts(data))
                dispatch(postsLoaded())
            })
        }
    }

    return (
        <Grid container justify = "center" className={classes.writer}>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                 <TextField
                  label="Write Your post"
                  variant="outlined"
                  color="secondary"
                  multiline
                  rows={6}
                  className={classes.searchBox}
                  value={postValue}
                    onChange={(e) => {
                        setPostValue(e.target.value)
                    }} 
                  />
                </div>
                <div className={classes.button}>
                    <Button variant="contained" className={classes.button} color="secondary" onClick={handleSend}>
                        Post
                    </Button>
                </div>
            </form>
        </Grid>
    )
}

export default PostWriter