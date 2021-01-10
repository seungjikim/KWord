import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppTheme } from './styles/colors.js';
import SideBar from './SideBar'

const Root = () => (
    <BrowserRouter>
        <ThemeProvider theme={AppTheme}>
            <SideBar />
            <App />
        </ThemeProvider>
    </BrowserRouter>
);

export default Root;