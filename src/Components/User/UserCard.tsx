import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link as MaterialLink } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

interface UserCardProps {
    id: number,
    name: string,
    postCount: number
}

const UserCard = (props: UserCardProps) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                <MaterialLink to={'/Posts/User/' + props.id} underline="none" component={Link}>{props.name}</MaterialLink>
            </Typography>
            <Typography variant="body2" component="p">
                Number of posts: {props.postCount}
            </Typography>
          </CardContent>
        </Card>
      );
}

export default UserCard