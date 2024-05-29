import React from "react";
import SliderCard from "../Slider/SliderCard/SliderCard";
import styles from "./Slider.module.css";
import PageBlock from "../../components/PageBlock/PageBlock";
import useSWRImmutable from "swr/immutable";
import { getPartnersList } from "../../api/getPartnersList.js";

const ReusableSlider = () => {
    const { data } = useSWRImmutable("/blog/partners/", getPartnersList);

    return (
        <PageBlock
            heading="Наши партнёры"
        >
            <div className={styles.wrapperContainer}>
                <div className={styles.logos_slide}>
                    {data &&
                        data.map((el) => <SliderCard key={el.id} imageUrl={el.img_partner} />)}
                </div>
                <div className={styles.logos_slide}>
                    {data &&
                        data.map((el) => <SliderCard key={el.id} imageUrl={el.img_partner} />)}
                </div>
            </div>
        </PageBlock>
    );
};

export default ReusableSlider;
