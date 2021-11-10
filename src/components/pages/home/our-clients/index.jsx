import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// IMAGES
import robin from '../../../../assets/images/robinhood-1.png'
import reddit from '../../../../assets/images/reddit-1.png'
import upcase from '../../../../assets/images/upcase.png'
import hubspot from '../../../../assets/images/hubspot.png'
import tunein from '../../../../assets/images/tunein.png'


const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#93A5FF',
            contrastText: '#E5E5E5',
        },
    },
});


const OurClients = () => {
    return (
        <Fragment>
            <div className="ourClients-section">
                <div className="ourClients-section-title">
                    <h1>Our Clients</h1>
                    <p>
                        You can be the next one and may start for free
                    </p>
                </div>
                <div className="ourClients-section-clients">
                    <img src={robin} alt="robinhood logo" />
                    <img src={reddit} alt="reddit logo" />
                    <img src={upcase} alt="upcase logo" />
                    <img src={hubspot} alt="hubspot logo" />
                    <img src={tunein} alt="tunein logo" />
                </div>
                <ThemeProvider theme={theme}>
                    <Button color="neutral" variant="contained" >
                        GET FREE TRIAL
                    </Button>
                </ThemeProvider>
            </div>
        </Fragment>
    );
};

export default withRouter(OurClients);