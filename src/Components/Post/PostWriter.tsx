import { makeStyles, Theme, createStyles, Grid, TextField, Button } from '@material-ui/core';
import React from 'react'

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

const PostWriter = () => {
    const classes = useStyles();

    const handleSend = () => {

    }

    return (
        <Grid container justify = "center" className={classes.writer}>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                 <TextField
                  helperText="Write Your post"
                  variant="outlined"
                  color="secondary"
                  multiline
                  rows={6}
                  className={classes.searchBox} 
                  />
                </div>
                <div className={classes.button}>
                    <Button variant="contained" className={classes.button} color="secondary" onClick={handleSend}>
                        Post
                    </Button>
                </div>
            </form>
        </Grid>
    )
}

export default PostWriter