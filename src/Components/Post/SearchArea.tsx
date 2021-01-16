import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../Interfaces/Interfaces';
import theme from "../../theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        textAlign: 'center'
      },
    },
    button: {
        textAlign: 'center' 
    },
    searchBox: {
        width: 400
    }
  }),
);

const SearchArea = () => {
    const classes = useStyles();
    const password = useSelector((state: RootState) => state.password);
    const history = useHistory();

    useEffect(() => {
        if (password === null) {
            history.push({
                pathname:  "/"
            });
        } 
    }, [password])

    const handleSearch = () => {

    }

    return (
        <Grid container justify = "center">
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                 <TextField
                  helperText="Search by words"
                  label="Search by words"
                  variant="outlined"
                  color="secondary"
                  className={classes.searchBox} 
                  />
                </div>
                <div>
                <TextField
                  helperText="Search by author"
                  label="Search by author"
                  variant="outlined"
                  color="secondary"
                  className={classes.searchBox}
                />
                </div>
                <div className={classes.button}>
                    <Button variant="contained" className={classes.button} color="secondary" onClick={handleSearch}>
                        Search
                    </Button>
                </div>
            </form>
            
        </Grid>
    )
}

export default SearchArea