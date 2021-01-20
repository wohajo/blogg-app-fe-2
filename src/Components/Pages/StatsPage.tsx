import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import SearchArea from '../Post/SearchArea';
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../Interfaces/Interfaces';
import { useEffect } from 'react';
import StatsArea from '../StatsArea/StatsArea';

const StatsPage = () => {

    const password = useSelector((state: RootState) => state.password);
    const history = useHistory();

    useEffect(() => {
        if (password === null) {
            history.push({
                pathname:  "/"
            });
        }
    });

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        <StatsArea/>
    </ThemeProvider>
    )
}

export default StatsPage