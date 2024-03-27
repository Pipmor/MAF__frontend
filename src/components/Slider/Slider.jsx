import React from "react";
import SliderCard from "../Slider/SliderCard/SliderCard";
import styles from "./Slider.module.css";

import PageBlock from "../../components/PageBlock/PageBlock";

import useSWR from "swr";
import { getCustomersList } from "../../api/getCustomersList";

const ReusableSlider = () => {
  const { data } = useSWR("/our_customer_list", getCustomersList);

  return (
    <PageBlock heading="Наши партнёры" >
      <div className={styles.wrapperContainer}>
      <div className={styles.logos_slide}>
        {data && data.map((el) => (
          <SliderCard key={el.id} imageUrl={el.image} />
        ))}
      </div>
      <div className={styles.logos_slide}>
        {data && data.map((el) => (
          <SliderCard key={el.id} imageUrl={el.image} />
        ))}
      </div>
    </div>
    </PageBlock>
    
  );
};

export default ReusableSlider;