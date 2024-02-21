
import ProductsBlock from "../../components/ProductsBlock/ProductsBlock.jsx";
import ServicesBlock from "../../components/ServicesBlock/ServicesBlock";
import HowToOrder from "../../components/HowToOrder/HowToOrder.jsx"
import Hero from "../../components/Hero/Hero.jsx"
import ReusableSlider from "../../components/Slider/Slider.jsx";
import ExpandingGallery from "../../components/ExpandingGallery/ExpandingGallery.jsx";

const Home = () => {

  return (
    <>
      <Hero />
      <ServicesBlock isHomePage />
      <ProductsBlock isHomePage/>
      <ExpandingGallery/>
      <HowToOrder />
      <ReusableSlider/>
    
    </>
  );
};

export default Home;
