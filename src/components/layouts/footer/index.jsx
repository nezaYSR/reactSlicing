import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

// IMAGES
import footer from '../../../assets/images/footer.png'
import mainLogo from '../../../assets/images/logo.png'
import group103 from '../../../assets/images/Group103.png'
import group104 from '../../../assets/images/Group104.png'
import group105 from '../../../assets/images/Group105.png'
import group106 from '../../../assets/images/Group106.png'

import ig from '../../../assets/images/instagram-2016.png'
import tw from '../../../assets/images/twitter.png'
import yt from '../../../assets/images/youtube-icon.png'
import fb from '../../../assets/images/facebook-2.png'

const Footer = () => {
    return (
        <Fragment>
            <div className="footer-section">
                {/* <img className="footer-section-heroBG" src={footer} alt="bottom background" /> */}

                <div className="footer-content-top">
                    <div className="footer-left">

                        <div className="footer-left-top">
                            <div className="footer-left-top-hosting">
                                <h3>HOSTING</h3>
                                <ul>
                                    <li>
                                        <a href="">Shared Hosting</a>
                                    </li>
                                    <li>
                                        <a href="">VPS Hosting</a>
                                    </li>
                                    <li>
                                        <a href="">Cloud Hosting</a>
                                    </li>
                                    <li>
                                        <a href="">Wordpress Hosting</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-left-top-features">
                                <h3>FEATURES</h3>
                                <ul>
                                    <li>
                                        <a href="">Beginner Guide</a>
                                    </li>
                                    <li>
                                        <a href="">Move to Servion</a>
                                    </li>
                                    <li>
                                        <a href="">Website Builder</a>
                                    </li>
                                    <li>
                                        <a href="">Tools and Resources</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-left-top-support">
                                <h3>SUPPORT</h3>
                                <ul>
                                    <li>
                                        <a href="">Help Center</a>

                                    </li>
                                    <li>
                                        <a href="">Submit a Ticket</a>
                                    </li>
                                    <li>
                                        <a href="">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="footer-right">
                        <div className="footer-right-top">
                            <h3>WE ACCEPT</h3>
                            <ul>
                                <li >
                                    <img className="footer-vendor" src={group103} alt="visa logo" />
                                </li>
                                <li >
                                    <img className="footer-vendor" src={group105} alt="mastercard logo" />
                                </li>
                                <li >
                                    <img className="footer-vendor" src={group104} alt="union logo" />
                                </li>
                                <li >
                                    <img className="footer-vendor" src={group106} alt="rectangle logo" />
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="footer-content-bottom">

                    <div className="footer-left-bottom">
                        <img src={mainLogo} alt="main logo" />
                        <p>
                            St. Patrick Ave., 10233 <br />
                            USA
                        </p>
                    </div>
                    <div className="footer-right-bottom">
                        <div className="footer-right-bottom-socmed">
                            <ul>
                                <li className="footer-right-bottom-socmed-logo">
                                    <a href=""><img src={ig} alt="ig logo" /></a>

                                </li>
                                <li className="footer-right-bottom-socmed-logo">
                                    <a href=""><img src={tw} alt="ig logo" /></a>
                                </li>
                                <li className="footer-right-bottom-socmed-logo">
                                    <a href=""> <img src={yt} alt="ig logo" /></a>
                                </li>
                                <li className="footer-right-bottom-socmed-logo">
                                    <a href=""><img src={fb} alt="ig logo" /></a>
                                </li>
                            </ul>
                            <span>
                                <a href="">Terms of  Service</a>
                                <p>|</p>
                                <a href="">Privacy Policy</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default withRouter(Footer);