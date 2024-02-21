import useSWR from "swr";
import PageBlock from "../PageBlock/PageBlock";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./ServicesBlock.module.css";
import { getServicesData } from "../../api/getServicesData";
import { displayCards } from "../../constants/displayCard";

const ServicesBlock = (isHomePage) => {
  const { data: servicesData } = useSWR("/service_list", getServicesData);
  return (
    <PageBlock
      heading="Услуги"
      subHeading="Профессиональные услуги типографии: Разнообразие и качество в каждом заказе"
    >
      <div className={styles.wrapperCard}>
        {displayCards(isHomePage,servicesData,6) &&
          displayCards(isHomePage,servicesData,6).map((el) => <ServiceCard key={el.id} {...el} />)}
      </div>
    </PageBlock>
  );
};

export default ServicesBlock;
