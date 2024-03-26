import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import styles from "./ReusableCarousel.module.css";
import { Link } from "react-router-dom"; // Импортируем Link из React Router
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrowIcon from "../../assets/icons/arrowIcons/leftArrow.png";
import nextArrowIcon from "../../assets/icons/arrowIcons/rightArrow.png";
import { getProductsData } from "../../api/getProductsData";
import useSWRImmutable from "swr/immutable";

const ReusableCarousel = ({ dots }) => {
  const { data } = useSWRImmutable("/products/", getProductsData);

  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  useEffect(() => {
    const dots = document.querySelectorAll(`.${styles.customDot}`);
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => handleDotClick(index));
    });
    return () => {
      dots.forEach((dot, index) => {
        dot.removeEventListener("click", () => handleDotClick(index));
      });
    };
  }, [activeDot]);

  const [isPrevClickable, setIsPrevClickable] = useState(true);
  const PrevArrow = ({ onClick }) => {
    const handleClick = () => {
      if (isPrevClickable) {
        setIsPrevClickable(false);
        onClick();
        setActiveDot((prevDot) =>
            prevDot > 0 ? prevDot - 1 : data.length - 1
        );

        setTimeout(() => {
          setIsPrevClickable(true);
        }, 500);
      }
    };

    return (
        <div
            onClick={handleClick}
            className={styles.prevArrow}
        >
          <img src={prevArrowIcon} alt="PrevArrow" />
        </div>
    );
  };

  const [isNextClickable, setIsNextClickable] = useState(true);
  const NextArrow = ({ onClick }) => {
    const handleClick = () => {
      if (isNextClickable) {
        setIsNextClickable(false);
        onClick();
        setActiveDot((prevDot) =>
            prevDot < data.length - 1 ? prevDot + 1 : 0
        );

        setTimeout(() => {
          setIsNextClickable(true);
        }, 500);
      }
    };

    return (
        <div
            onClick={handleClick}
            className={styles.nextArrow}
        >
          <img src={nextArrowIcon} alt="NextArrow" />
        </div>
    );
  };

  const settings = {
    dots: dots && true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: dots && <PrevArrow />,
    nextArrow: dots && <NextArrow />,
    customPaging: (i) => (
        <input
            type="radio"
            name="carousel-dots"
            className={`${styles.customDot} ${
                i === activeDot ? styles.activeDot : ""
            }`}
        />
    ),
  };

  return (
      <div className={styles.wrapperContainer}>
        <Slider {...settings}>
          {data && data.map((el) => (
              <div key={el.id}>
                <CarouselCard img={el.image} />
              </div>
          ))}
        </Slider>
      </div>
  );
};

export default ReusableCarousel;
