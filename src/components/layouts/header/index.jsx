import React, { useState, Fragment, useCallback } from "react";
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HamburgerSlider } from 'react-animated-burgers'

import { withRouter, Link } from "react-router-dom";

// IMAGES
import mainLogo from '../../../assets/images/logo.png'
import heroBG from '../../../assets/images/Hero_BG.png'
import illustration from '../../../assets/images/Illustration.png'
import SearchBar from "./search-bar";

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

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleButton = useCallback(
        () => setIsActive(prevState => !prevState),
        [],
    )

    const renderBurger = () => {
        return (

            <>
                <div className="header-burgerOpen">
                    <ul >
                        <li>
                            <Link href='/'>Services</Link>
                        </li>

                        <li>
                            <Link href='/'>Our plans</Link>
                        </li>

                        <li>
                            <Link href='/'>Tools & Resources</Link>
                        </li>
                        <hr />
                        <p>
                            created by Neza Yasser
                        </p>
                    </ul>
                </div>
            </>

        )
    }

    return (
        <Fragment>
            <div className="header-section">
                <img className="header-section-heroBG" src={heroBG} alt="top background" />

                <div className="header">

                    <div className="header-title">
                        <a className="header-title-logo" href="/">
                            <img src={mainLogo} alt="main logo" />
                        </a>
                    </div>

                    <ul className="header-container">
                        <li className="header-container-title">
                            <button className="header-container-title-btn">
                                <a className="header-container-title-btn-txt" href="/">
                                    Home
                                </a>
                            </button>
                        </li>
                        <li className="header-container-title">
                            <button className="header-container-title-btn">
                                <a className="header-container-title-btn-txt" href="/services">
                                    Services
                                </a>
                            </button>
                        </li>
                        <li className="header-container-title">
                            <button className="header-container-title-btn">
                                <a className="header-container-title-btn-txt" href="/plans">
                                    Our Plans
                                </a>
                            </button>
                        </li>
                        <li className="header-container-title">
                            <button className="header-container-title-btn">
                                <a className="header-container-title-btn-txt" href="/tools">
                                    Tools & Resources
                                </a>
                            </button>
                        </li>
                        <ThemeProvider theme={theme}>
                            <Button color="neutral" variant="contained" endIcon={<PersonIcon />}>
                                Login
                            </Button>
                        </ThemeProvider>
                    </ul>

                    <div className="header-burger">
                        <HamburgerSlider
                            barColor="white"
                            {...{ isActive, toggleButton }}
                        />
                    </div>

                    {isActive == true ? renderBurger() : null}

                </div>

                <SearchBar />

            </div>
        </Fragment>
    );
};

export default withRouter(Header);