import { Outlet, useParams } from "react-router-dom";
import ServicesBlock from "../../components/ServicesBlock/ServicesBlock";

const Services = () => {
  const params = useParams();
  if (params.name) return <Outlet />;

  return (
    <>
      <ServicesBlock />
    </>
  );
};

export default Services;
