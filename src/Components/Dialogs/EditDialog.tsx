import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Theme, createStyles, Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { EditDialogProps, RootState } from '../../Interfaces/Interfaces';
import { PostsAPI } from '../../API/PostsAPI';
import { postsNotLoaded, resetPosts, setPosts, postsLoaded } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';

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

const EditDialog = (props: EditDialogProps) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const password = useSelector((state: RootState) => state.password);
    const sessionUser = useSelector((state: RootState) => state.sessionUser);
    const [postValue, setPostValue] = useState(props.contents);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleEdit = async () => {
        await PostsAPI
        .updatePost(props.id, postValue, sessionUser.username, password)
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
        history.push({
            pathname:  "/Posts"
        });
        setOpen(false);
      };

    return (
    <div>
      <Button size="small" color="secondary" onClick={handleClickOpen}>
        Edit post
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
        <Grid container justify = "center" className={classes.writer}>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                 <TextField
                  label="Edit Your post"
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
            </form>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEdit} color="primary" autoFocus>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditDialog