import { makeStyles, Theme, createStyles, TextField, Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { UserAPI } from '../../API/UserAPI';
import RegisterForm from './RegisterForm';
import { Link as MaterialLink } from '@material-ui/core';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Interfaces/Interfaces';
import { setPassword, setUser } from '../../Redux/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 300,
      },
      marginTop: 200
    },
    button: {
      margin: 3
    },
    title: {
      textAlign: 'center'
    }
  }),
);

const LoginForm = () => {
  const classes = useStyles();
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();
  const sessionUser = useSelector((state: RootState) => state.sessionUser);
  const history = useHistory();

  const login = () => {
    UserAPI
    .login(loginValue, passwordValue)
    .then(async (res) => {
      await dispatch(setUser(res.data))
      history.push({
        pathname:  "/Posts"
      });
      dispatch(setPassword(passwordValue))
    })
    .catch((error) => {
      if (error.response.status === 400) {
        alert("Invalid data.")
      } else if (error.response.status === 401) {
        alert("Wrong email or password.")
      }
    })
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          helperText="Login"
          label="Login"
          variant="outlined"
          value={loginValue}
          onChange={(e) => {
            setLoginValue(e.target.value)
          }}
        />
      </div>
      <div>
        <TextField
          helperText="Password"
          label="Password"
          type="password"
          variant="outlined"
          value={passwordValue}
          onChange={(e) => {
            setPasswordValue(e.target.value)
        }} 
        />
      </div>
      <Grid container justify = "center">
        <Button variant="contained" className={classes.button} color="secondary" onClick={login}>
            Login
          </Button>
          <RegisterForm/>
          {sessionUser ? <Redirect to="/Posts"></Redirect> : <div></div>}
      </Grid>
      <div className={classes.title}>
        <Typography color="secondary" variant="caption">
          <MaterialLink to={'/Posts'} color="secondary" underline="none" component={Link}>Browse posts</MaterialLink>
        </Typography>
      </div>
    </form>
  );
};

export default LoginForm