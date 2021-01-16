import React from 'react';
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import SearchArea from '../Post/SearchArea';
import Navbar from '../Navbar/Navbar';

const SearchPage = () => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        <SearchArea/>
    </ThemeProvider>
    )
}

export default SearchPage