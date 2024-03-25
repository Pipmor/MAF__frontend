import { Outlet, useParams } from "react-router-dom";
import ProductsBlock from "../../components/ProductsBlock/ProductsBlock";

const Products = () => {
  const params = useParams();
  if (params.name) return <Outlet />;

  return (
    <>
      <ProductsBlock />
      
    </>
  );
};

export default Products;











