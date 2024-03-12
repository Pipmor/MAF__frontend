import React from "react";
import PageBlock from "../PageBlock/PageBlock.jsx";
import styles from "./TwoProduct.module.css";
import { data } from "./config/Data.js";
import { ProductComponent } from "./config/ProductComponent.jsx";

const TwoProductCards = () => {
  return (
    <PageBlock heading="Продукция">
      <div className={styles.container}>
        <div className={styles.wrapperCard}>
          {data.map((prod, index) => {
            return (
              <ProductComponent
                key={index}
                title={prod.name}
                image={prod.image}
                path={prod.link}
              />
            );
          })}
        </div>
      </div>
    </PageBlock>
  );
};

export default TwoProductCards;
