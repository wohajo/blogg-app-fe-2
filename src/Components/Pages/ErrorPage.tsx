import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { Link as MaterialLink } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    oopsie: {
        marginTop: "30%"
    }
  }),
);

const ErrorPage = () => {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container justify = "center" className={classes.oopsie}>
            <div><MaterialLink to={'/'} underline="none" component={Link}>Oops! Something went wrong! Go back.</MaterialLink></div>
        </Grid>
    </ThemeProvider>
    )
}

export default ErrorPage