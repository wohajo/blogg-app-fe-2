import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { PostResponseInterface, RootState } from '../../Interfaces/Interfaces'
import { Link as MaterialLink } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeleteDialog from '../Dialogs/DeleteDialog';

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Post = (props: PostResponseInterface) => {
    const classes = useStyles();
    const password = useSelector((state: RootState) => state.password);
    const sessionUser = useSelector((state: RootState) => state.sessionUser);

    const showButtons = () => {
      if (password === null) {
        return (<div></div>)
      } else if (sessionUser.isAdmin || sessionUser.id === props.userId) {
        return (
          <CardActions>
          <Button size="small" color="primary">
            Edit
          </Button>
          <DeleteDialog id={props.id}/>
        </CardActions>
        )
      } else {
        return (<div></div>)
      }
    }

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography >
                <MaterialLink to={'/Posts/User/' + props.userId} variant="h5" underline="none" component={Link}>{props.name}</MaterialLink>
            </Typography>
          <Typography className={classes.pos}>
            {props.contents}
          </Typography>
        </CardContent>
        {showButtons()}
      </Card>
    );
}

export default Post