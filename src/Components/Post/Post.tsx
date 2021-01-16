import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { PostResponseInterface } from '../../Interfaces/Interfaces'
import { Link as MaterialLink } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
            <Typography >
                <MaterialLink to={'/Posts/User/' + props.userId} variant="h5" underline="none" component={Link}>{props.name}</MaterialLink>
            </Typography>
          <Typography className={classes.pos}>
            {props.contents}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default Post