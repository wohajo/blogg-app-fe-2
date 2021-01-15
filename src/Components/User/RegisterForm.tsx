import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { UserAPI } from '../../API/UserAPI';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: 3
    }
  }),
);

const RegisterForm = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confPasswordValue, setConfPasswordValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = () => {
    if (passwordValue !== confPasswordValue) {
        console.log("Passwords not the same");
    } else {
        UserAPI
        .register(
            firstNameValue, 
            lastNameValue, 
            usernameValue,
            emailValue,
            confPasswordValue)
    }
  };

  return (
    <div>
      <Button variant="contained" className={classes.button} color="primary" onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="first-name"
            label="First name"
            value={firstNameValue}
            onChange={(e) => {
                setFirstNameValue(e.target.value)
              }}
            fullWidth
          />
            <TextField
            margin="dense"
            id="last-name"
            label="Last name"
            value={lastNameValue}
            onChange={(e) => {
                setLastNameValue(e.target.value)
              }}
            fullWidth
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            value={usernameValue}
            onChange={(e) => {
                setUsernameValue(e.target.value)
              }}
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            value={emailValue}
            onChange={(e) => {
                setEmailValue(e.target.value)
              }}
            fullWidth
          />
        <TextField
          helperText="Password"
          label="Password"
          type="password"
          value={passwordValue}
          onChange={(e) => {
            setPasswordValue(e.target.value)
          }}
          fullWidth
          />
        <TextField
          helperText="Password confirmation"
          label="Password confirmation"
          type="password"
          value={confPasswordValue}
          onChange={(e) => {
            setConfPasswordValue(e.target.value)
          }}
          fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRegister} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RegisterForm