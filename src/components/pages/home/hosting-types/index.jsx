import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// IMAGES
import shared from '../../../../assets/images/Icon.png'
import vps from '../../../../assets/images/Iconx.png'
import cloud from '../../../../assets/images/Icony.png'
import wp from '../../../../assets/images/WP_Icon.png'

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
            main: '#f7f8ff',
            contrastText: '#93A5FF',
        },
    },
});

const HostingTypes = () => {
    return (
        <Fragment>
            <div className="hostingTypes-section">
                <div className="hostingTypes-section-title">
                    <h1>
                        Types of hosting that we provide
                    </h1>
                    <p>
                        Our service is always affordable for everyone.
                    </p>
                </div>

                <div className="hostingTypes-section-bottom">

                    <div className="hostingTypes-section-bottom-card">
                        <img src={shared} alt="shared icon" />
                        <h3>SHARED HOSTING</h3>
                        <p>
                            Increase the rank of your <br />
                            website by the higher speed
                        </p>
                        <hr />
                        <p>Get started at</p>
                        <span>
                            $15.99/
                            <p>monthjsaaaaaaaaa</p>
                        </span>
                        <div className="hostingTypes-section-bottom-card-btn">
                            <ThemeProvider theme={theme}>
                                <Button color="neutral" variant="contained" endIcon={<ArrowForwardIosIcon />}>
                                    COSTUMISE PLAN
                                </Button>
                            </ThemeProvider>
                        </div>
                    </div>

                    <div className="hostingTypes-section-bottom-card">
                        <img src={vps} alt="vps icon" />
                        <h3>VPS HOSTING</h3>
                        <p>
                            Be able to conceal your ID<br />
                            whenever needed
                        </p>
                        <hr />
                        <p>Get started at</p>
                        <span>
                            $8.99/
                            <p>month</p>
                        </span>
                        <div className="hostingTypes-section-bottom-card-btn">
                            <ThemeProvider theme={theme}>
                                <Button color="neutral" variant="contained" endIcon={<ArrowForwardIosIcon />}>
                                    COSTUMISE PLAN
                                </Button>
                            </ThemeProvider>
                        </div>
                    </div>

                    <div className="hostingTypes-section-bottom-card">
                        <img src={cloud} alt="shared icon" />
                        <h3>CLOUD HOSTING</h3>
                        <p>
                            Super convenient and highly <br />
                            costumizable option
                        </p>
                        <hr />
                        <p>Get started at</p>
                        <span>
                            $7.99/
                            <p>month</p>
                        </span>
                        <div className="hostingTypes-section-bottom-card-btn">
                            <ThemeProvider theme={theme}>
                                <Button color="neutral" variant="contained" endIcon={<ArrowForwardIosIcon />}>
                                    COSTUMISE PLAN
                                </Button>
                            </ThemeProvider>
                        </div>
                    </div>

                    <div className="hostingTypes-section-bottom-card">
                        <img src={wp} alt="shared icon" />
                        <h3>WORDPRESS HOSTING</h3>
                        <p>
                            With low cost and high variety<br />
                            of tools, plugins of your choice
                        </p>
                        <hr />
                        <p>Get started at</p>
                        <span>
                            $13.99/
                            <p>month</p>
                        </span>
                        <div className="hostingTypes-section-bottom-card-btn">
                            <ThemeProvider theme={theme}>
                                <Button color="neutral" variant="contained" endIcon={<ArrowForwardIosIcon />}>
                                    COSTUMISE PLAN
                                </Button>
                            </ThemeProvider>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default withRouter(HostingTypes);