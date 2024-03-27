import React from "react";
import SliderCard from "../Slider/SliderCard/SliderCard";
import styles from "./Slider.module.css";

import PageBlock from "../../components/PageBlock/PageBlock";

import useSWR from "swr";

import { getPartnersList } from "../../api/getPartnersList";

const ReusableSlider = () => {
    // Изменяем URL для нового API
    const { data } = useSWR("http://107.23.142.232:80/api/v1/blog/partners/", getPartnersList);

    return (
        <PageBlock heading="Наши партнёры" >
            <div className={styles.wrapperContainer}>
                <div className={styles.logos_slide}>
                    {data && data.map((el) => (
                        <SliderCard key={el.id} imageUrl={el.img_partner} />
                    ))}
                </div>
            </div>
        </PageBlock>
    );
};

export default ReusableSlider;
