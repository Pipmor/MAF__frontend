import { useState, useEffect } from "react"; 
import Slider from "react-slick"; 
import CarouselCard from "./CarouselCard"; 
import styles from "./ReusableCarousel.module.css"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import prevArrowIcon from "../../assets/icons/arrowIcons/leftArrow.png"; 
import nextArrowIcon from "../../assets/icons/arrowIcons/rightArrow.png"; 
import { getAchievements } from "../../api/getAchievements";
import useSWR from "swr";
import PageBlock from "../PageBlock/PageBlock";
import useMediaQuery from "../../hooks/useMediaQuery";


const ReusableCarousel = ({ dots}) => { 

  const { data } = useSWR("/achievements", getAchievements);
  const [activeDot, setActiveDot] = useState(0); 
 
  const isMobile = useMediaQuery("(max-width: 800px)");
  const slidesToScroll = isMobile ? 2 : 4; 
  const slidesToShow = isMobile ? 2 : 4;
  
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
    slidesToShow: slidesToShow, 
    slidesToScroll: slidesToScroll, // Pass the slidesToScroll value here
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
    <PageBlock>
      <div className={styles.wrapperContainer}> 
        <Slider {...settings}> 
          {data && data.map((el) => ( 
            <CarouselCard key={el.id} imageUrl={el.image} /> 
          ))} 
        </Slider> 
      </div> 
    </PageBlock>
  ); 
}; 

export default ReusableCarousel;