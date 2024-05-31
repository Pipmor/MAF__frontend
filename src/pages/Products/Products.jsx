import { Outlet, useParams } from "react-router-dom";
import ProductsBlock from "../../components/ProductsBlock/ProductsBlock";

const Products = () => {
  const { productId } = useParams();  // Извлечение productId из параметров URL
  if (productId) return <Outlet />;   // Если productId существует, рендерим Outlet

  return (
      <>
        <ProductsBlock />
      </>
  );
};

export default Products;
