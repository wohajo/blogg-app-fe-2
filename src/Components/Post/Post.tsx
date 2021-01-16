import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { PostResponseInterface } from '../../Interfaces/Interfaces'

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

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.pos}>
            {props.contents}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default Post