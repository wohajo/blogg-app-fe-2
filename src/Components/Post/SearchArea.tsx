import { Button, createStyles, Grid, makeStyles, Paper, TextField, Theme, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PostsAPI } from '../../API/PostsAPI';
import { RootState } from '../../Interfaces/Interfaces';
import { postsLoaded, postsNotLoaded, resetPosts, setPosts } from '../../Redux/actions';
import theme from "../../theme";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Post from './Post';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        textAlign: 'center'
      },
    },
    button: {
        textAlign: 'center' 
    },
    searchBox: {
        width: 400
    }
  }),
);

const SearchArea = () => {
    const classes = useStyles();
    const password = useSelector((state: RootState) => state.password);
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
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
        dispatch(postsLoaded())
      }
    }, [password])

    const handleSearch = () => {
      dispatch(postsNotLoaded())
      PostsAPI
      .fetchPostsByWords(searchValue, sessionUser.username, password)
      .then(async (data) => {
        await dispatch(setPosts(data))
        dispatch(postsLoaded())
      })
      .catch((error) => {
        alert(error.response.data.message)
        dispatch(postsLoaded())
      })
    }

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

    return (
      <Paper variant="outlined">
        <Grid container justify = "center">
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                <TextField
                  helperText="Search by words"
                  label="Search by words"
                  variant="outlined"
                  color="secondary"
                  className={classes.searchBox}
                  value={searchValue}
                  onChange={(e) => {
                      setSearchValue(e.target.value)
                  }} 
                  />
                </div>
                <div className={classes.button}>
                    <Button variant="contained" className={classes.button} color="secondary" onClick={handleSearch}>
                        Search
                    </Button>
                </div>
            </form>
        </Grid>
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

export default SearchArea