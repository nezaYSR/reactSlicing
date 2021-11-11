// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from '@mui/icons-material/Star';



// IMAGES
import cus1 from '../../../../assets/images/Ellipse2.png'
import cus2 from '../../../../assets/images/Ellipse2x.png'
import cus3 from '../../../../assets/images/Ellipse2.png'
import cus4 from '../../../../assets/images/Ellipse2x.png'
import doted from '../../../../assets/images/DottedSquare1.png'

const ValuedCostumer = () => {
    // install Swiper modules
    SwiperCore.use([Pagination, Navigation]);
    return (
        <Fragment>
            <div className="valuedCostumer-section">
                <div className="valuedCostumer-section-title">
                    <h1>
                        Valued costumers with valuable feedback
                    </h1>
                    <p>
                        Feedbacks from our happy users. Become one of them.
                    </p>
                </div>
                <div className="valuedCostumer-section-dot">
                    <img src={doted} alt="dot square accent" />
                    <img src={doted} alt="dot square accent" />
                </div>
                <div className="valuedCostumer-section-slide">
                    <Swiper
                        slidesPerView='auto'
                        // slidesPerView={2}
                        // spaceBetween={335}
                        spaceBetween={31}
                        // spaceBetween={150}
                        // slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            "clickable": true
                        }}
                        navigation={true}
                        breakpoints={{
                            320: {
                                width: 320,
                                slidesPerView: 1,
                                slidesPerGroup: 1
                            },
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                                spaceBetween: 40
                            },
                            // 1024: {
                            //     width: 1024,
                            //     slidesPerView: 2,
                            //     slidesPerGroup: 1,
                            //     // spaceBetween: 40
                            // },
                        }}
                        className="mySwiper">
                        <div class="my-custom-pagination-div" />
                        <SwiperSlide>
                            <div className="slide">

                                <div className="slide-left">
                                    <img src={cus1} alt="customer photo" />
                                </div>

                                <div className="slide-right">
                                    <div className="slide-right-stars">
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam qui autem error quidem dicta.</p>
                                    <strong>- Erich Marks</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">

                                <div className="slide-left">
                                    <img src={cus2} alt="customer photo" />
                                </div>

                                <div className="slide-right">
                                    <div className="slide-right-stars">
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <strong>- Emily Hartman</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">

                                <div className="slide-left">
                                    <img src={cus1} alt="customer photo" />
                                </div>

                                <div className="slide-right">
                                    <div className="slide-right-stars">
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <strong>- Eichmann</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">

                                <div className="slide-left">
                                    <img src={cus2} alt="customer photo" />
                                </div>

                                <div className="slide-right">
                                    <div className="slide-right-stars">
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                        <StarIcon fontSize='small' />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <strong>- Rowling</strong>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Fragment >
    );
};

export default withRouter(ValuedCostumer);