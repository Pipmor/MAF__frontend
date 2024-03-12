import Hero from "../../components/Video/Video.jsx"
import ReusableSlider from "../../components/Slider/Slider.jsx";
import TwoProduct from "../../components/TwoProduct/TwoProduct.jsx";
import ReusableCarousel from "../../components/ReusableCarousel/ReusableCarousel.jsx";



const Home = () => {

  return (
    <>
        <Hero />
        <TwoProduct/>
        <ReusableCarousel dots="true" />
        <ReusableSlider/>

    </>
  );
};

export default Home;
