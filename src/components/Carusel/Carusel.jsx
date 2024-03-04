import React from "react";
import Slider from "react-slick";
import BigLetter from "../../assets/images/serviceImages/BigLetter.png";
import styles from "./Carusel.module.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div className={styles.slideContainer}>
                <img
                    src={BigLetter}
                    alt="Slide 1"
                    className={styles.slideImage}
                />
            </div>
            <div className={styles.slideContainer}>
                <img
                    src={BigLetter}
                    alt="Slide 2"
                    className={styles.slideImage}
                />
            </div>
            <div className={styles.slideContainer}>
                <img
                    src={BigLetter}
                    alt="Slide 3"
                    className={styles.slideImage}
                />
            </div>
            <div className={styles.slideContainer}>
                <img
                    src={BigLetter}
                    alt="Slide 4"
                    className={styles.slideImage}
                />
            </div>
            <div className={styles.slideContainer}>
                <img
                    src={BigLetter}
                    alt="Slide 5"
                    className={styles.slideImage}
                />
            </div>
            <div className={styles.slideContainer}>
                <img
                    src={BigLetter}
                    alt="Slide 6"
                    className={styles.slideImage}
                />
            </div>
        </Slider>
    );
};

export default Carousel;
