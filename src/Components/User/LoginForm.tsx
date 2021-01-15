import { makeStyles, Theme, createStyles, TextField, Button, Grid } from '@material-ui/core';
import React from 'react'
import RegisterForm from './RegisterForm';

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
    }
  }),
);

const LoginForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          helperText="Login"
          label="Login"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          helperText="Password"
          label="Password"
          type="password"
          variant="outlined"
        />
      </div>
      <Grid container justify = "center">
        <Button variant="contained" className={classes.button} color="secondary">
            Login
          </Button>
          <RegisterForm/>
      </Grid>
    </form>
  );
};

export default LoginForm