import { makeStyles, Theme, createStyles, TextField, Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { UserAPI } from '../../API/UserAPI';
import RegisterForm from './RegisterForm';
import { Link as MaterialLink } from '@material-ui/core';
import { Link } from 'react-router-dom';

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

  const login = () => {
    UserAPI.login(loginValue, passwordValue)
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