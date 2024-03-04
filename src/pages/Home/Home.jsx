import Hero from "../../components/Video/Video.jsx"
import Carusel from "../../components/Carusel/Carusel.jsx";
import ReusableSlider from "../../components/Slider/Slider.jsx";
import TwoProduct from "../../components/TwoProduct/TwoProduct.jsx";



const Home = () => {

  return (
    <>
        <Hero />
        <TwoProduct/>
        <Carusel/>
        <ReusableSlider/>
    </>
  );
};

export default Home;
