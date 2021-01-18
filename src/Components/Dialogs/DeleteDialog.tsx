import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DeleteProps, RootState } from '../../Interfaces/Interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { PostsAPI } from '../../API/PostsAPI';
import { postsNotLoaded, resetPosts, setPosts, postsLoaded } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';

const DeleteDialog = (props: DeleteProps) => {
  const [open, setOpen] = React.useState(false);
  const password = useSelector((state: RootState) => state.password);
  const sessionUser = useSelector((state: RootState) => state.sessionUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await PostsAPI
    .deletePost(props.id, sessionUser.username, password)
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
        Delete
      </Button>
      <Dialog
        maxWidth='xl'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete this post?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteDialog;