import { Outlet, useParams } from "react-router-dom";
import Service from "../../components/Service/Service.jsx";

const Services = () => {
  const params = useParams();
  if (params.name) return <Outlet />;

  return (
    <>
      <Service/>
    </>
  );
};

export default Services;
