import React, { useState, Fragment } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { withRouter, Link } from "react-router-dom";


// IMAGES
import illustration from '../../../../assets/images/Illustration.png'


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

const SearchBar = () => {
    const [domain, setDomain] = React.useState('.com');

    const styles = theme => ({
        root: {
            background: "blue",
            marginBottom: "10px"
        },
        root2: {
            background: "grey",
            marginBottom: "10px"
        },
        whiteColor: {
            color: "white"
        }
    });

    const handleChange = (event) => {
        setDomain(event.target.value);
    };


    return (
        <Fragment>
            <div className="searchbar">
                <div className="searchbar-section">
                    <div className="searchbar-section-left">
                        <h1>Web Hosting Easy and Secure</h1>
                        <p>Full control of what you use and pay for</p>
                        <div className="searchbar-section-left-form">
                            <div className="searchbar-section-left-form-set">
                                <TextField
                                    id="outlined-basic"
                                    label="Search for a domain name"
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{
                                        style: {
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            width: '100%',
                                            height: '50%',
                                            color: '#e9e9e9'
                                        }
                                    }} />
                                <FormControl id="select-basic" size="small" sx={{ minWidth: 100 }}>
                                    <Select
                                        value={domain}
                                        onChange={handleChange}
                                        displayEmpty
                                        classes={{
                                            root: styles.whiteColor,
                                            icon: styles.whiteColor
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>.com</em>
                                        </MenuItem>
                                        <MenuItem value={10}>.net</MenuItem>
                                        <MenuItem value={20}>.co.id</MenuItem>
                                        <MenuItem value={30}>.site</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <ThemeProvider theme={theme}>
                                <Button size="small" className="searchbar-section-left-form-btn" color="neutral" variant="contained">
                                    CHECK AVAILABILITY
                                </Button>
                            </ThemeProvider>
                        </div>
                    </div>

                    <div className="searchbar-section-right">
                        <img className="searchbar-section-right-illustration" src={illustration} alt="illustration" />
                    </div>
                </div>

            </div>
        </Fragment >
    );
};

export default withRouter(SearchBar);