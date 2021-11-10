import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// IMAGES
import rocket from '../../../../assets/images/launch.png'
import web from '../../../../assets/images/layout(1).png'
import clouds from '../../../../assets/images/Clouds.png'
import logos from '../../../../assets/images/Logos.png'

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
            main: '#E5E5E5',
            contrastText: '#93A5FF',
        },
    },
});

const DontKnow = () => {
    return (
        <Fragment>
            <div className="dontKnow-section">
                <div className="dontKnow-section-title">
                    <h1>Don't know where to start from?</h1>
                    <p>We've got the best articles, tools and resources to help you to start</p>
                </div>
                <div className="dontKnow-section-bottom">

                    <div className="dontKnow-section-bottom-card">
                        <div className="dontKnow-section-bottom-card-top">
                            <div className="dontKnow-section-bottom-card-top-icon">
                                <img src={rocket} alt="rocket icon" />
                            </div>
                            <div className="dontKnow-section-bottom-card-top-accent">
                                <img src={clouds} alt="clouds accent" />
                            </div>
                        </div>
                        <div className="dontKnow-section-bottom-card-bottom">
                            <h3>PLANNING TO BUILD A WEBSITE</h3>
                            <p>
                                You want to build a new website but not sure what to start with? We've <br />
                                prepared a step by step guide for you to handle the whole process from <br />
                                design to launch
                            </p>
                            <div className="dontKnow-section-bottom-card-bottom-btn">
                                <ThemeProvider theme={theme}>
                                    <Button color="neutral" variant="contained" endIcon={<ArrowForwardIosIcon />}>
                                        LEARN MORE
                                    </Button>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>

                    <div className="dontKnow-section-bottom-card">
                        <div className="dontKnow-section-bottom-card-top">
                            <div className="dontKnow-section-bottom-card-top-icon">
                                <img src={web} alt="rocket icon" />
                            </div>
                            <div className="dontKnow-section-bottom-card-top-accent">
                                <img src={logos} alt="clouds accent" />
                            </div>
                        </div>
                        <div className="dontKnow-section-bottom-card-bottom">
                            <h3>WANT TO MOVE A WEBSITE TO SERVION</h3>
                            <p>
                                Already have an existing website and want to move it to Servion but not <br />
                                sure how to do it? No worries, it's not difficult, we can handle all the work <br />
                                for you.
                            </p>
                            <div className="dontKnow-section-bottom-card-bottom-btn">
                                <ThemeProvider theme={theme}>
                                    <Button color="neutral" variant="contained" endIcon={<ArrowForwardIosIcon />}>
                                        LEARN MORE
                                    </Button>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default withRouter(DontKnow);