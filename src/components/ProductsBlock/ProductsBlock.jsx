import PageBlock from "../PageBlock/PageBlock";
import styles from "./ProductsBlock.module.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button.jsx";
import useSWR from "swr";
import { getProductsData } from "../../api/getProductsData.js";
import { displayCards } from "../../constants/displayCard.js";

const ProductsBlock = ({ isHomePage }) => {
  const { data: productsData } = useSWR("/products/", getProductsData);

  return (
    <PageBlock
      heading="Наша продукция"
      subHeading="Широкий выбор, высокое качество: Наш ассортимент для ваших потребностей"
      className="wrapper"
    >
      <div className={styles.container}>
        <div className={styles.wrapperCard}>
          {displayCards(isHomePage, productsData,16) &&
            displayCards(isHomePage, productsData,16).map((el) => (
              <ProductCard key={el.id} {...el} />
            ))}
        </div>
        <div className={styles.button_wrapper}>
          {isHomePage && (
            <Link to={"/products"}>
              <Button className="button" withArrow>
                Смотреть все
              </Button>
            </Link>
          )}
        </div>
      </div>
    </PageBlock>
  );
};
export default ProductsBlock;
