import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

// IMAGES
import weGive from '../../../../assets/images/Group138.png'
import tweakAs from '../../../../assets/images/001-cloud.png'
import securityAt from '../../../../assets/images/Group128.png'
import screenIllustration from '../../../../assets/images/screen_illustration.png'
import doted from '../../../../assets/images/DottedSquare1.png'

const WhatWill = () => {
    return (
        <Fragment>
            <div className="whatWill-section">
                <div className="whatWill-section-title">
                    <h1>
                        What will you get if you'll join us
                    </h1>
                    <p>
                        Get the best web hosting service at the price you can afford
                    </p>
                </div>
                <div className="whatWill-section-bottom">
                    <div className="whatWill-section-bottom-left">
                        <ul>
                            <li>
                                <img src={weGive} alt="support icon" />
                                <div className="desc">

                                    <h3>WE GIVE A CARE</h3>
                                    <p>
                                        Beside the support we provide you with various <br />
                                        tools to be able to host and manage your websites
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src={tweakAs} alt="tweak icon" />
                                <div className="desc">

                                    <h3>TWEAK AS YOU WISH</h3>
                                    <p>
                                        Be able to costumize your plan over time if needed <br />
                                        so you pay only for what you use
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src={securityAt} alt="security icon" />
                                <div className="desc">
                                    <h3>security at its best</h3>
                                    <p>
                                        We are the most reliable service provider, ready to give <br />
                                        you a helping hand the fastest way possible 24/7
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="whatWill-section-bottom-right">
                        <img src={screenIllustration} alt="screen illustration" />
                        <img src={doted} alt="dot square accent" />
                        <img src={doted} alt="dot square accent" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default withRouter(WhatWill);