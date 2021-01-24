import { makeStyles, Theme, createStyles, Typography, Grid, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StatsAPI } from '../../API/StatsAPI';
import { BestUserInterface, RootState } from '../../Interfaces/Interfaces';
import { postsNotLoaded, resetPosts, postsLoaded, setPosts, setBestUsers } from '../../Redux/actions';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Post from '../Post/Post';
import UserCard from '../User/UserCard';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        center: {
            textAlign: "center"
        },
    }),
);

const StatsArea = () => {

    const classes = useStyles();
    const password = useSelector((state: RootState) => state.password);
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state: RootState) => state.sessionUser);
    const [bestUsers, setBestUsers] = React.useState([{
        id: 0,
        name: "",
        count: 0
      }]);
      const [longestPosts, setLongestPosts] = React.useState([{
        id: 0,
        userId: 0,
        contents: "",
        name: ""
      }]);

    const showPosts = () => {
        return longestPosts.map(post =>
            <Grid key={post.id} item>
                <Post
                key={'post' + post.id} 
                id={post.id} 
                userId={post.userId} 
                contents={post.contents}
                name={post.name}
                />
                <div className={classes.center}>
                    <Typography>Text length: {post.contents.length}</Typography>
                </div>
            </Grid>
        )
    } 

    const showUsersStats = () => {
        return bestUsers.map(bestUser =>
            <UserCard
            key={"usr" + bestUser.id}
            id={bestUser.id}
            name={bestUser.name}
            postCount={bestUser.count}
            />
            )
    } 

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
                await setLongestPosts(data)
                dispatch(postsLoaded())
            })
            .catch((error) => alert(error.response.data.message))
            StatsAPI
            .fetchBestUsers(sessionUser.username, password)
            .then(async (data) => { 
                await setBestUsers(data)
            })
            .catch((error) => alert(error.response.data.message))
        }
    }, [password])

    return (
        <Paper>
            <Grid container justify="center">
                <Typography variant="h3">LONGEST POSTS</Typography>
            </Grid>
            <Grid container justify="center">
            {longestPosts.length < 3
            ? <Typography>Too few users has posted to show longest posts.</Typography>
            : showPosts()}
            </Grid>
            <Grid container justify="center">
                <Typography variant="h3">BEST USERS</Typography>
            </Grid>
            <Grid container justify="center">
                {bestUsers.length < 3
                ? <Typography>Too few users registered to show best users.</Typography>
                : showUsersStats()}
            </Grid>
        </Paper>

    )
}

export default StatsArea