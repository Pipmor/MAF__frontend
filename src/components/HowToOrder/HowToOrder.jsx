import { orderData } from "./orderData";
import OrderCard from "./OrderCard";
import styles from "./HowToOrder.module.css";
import PageBlock from "../PageBlock/PageBlock";
import OrderCardsAnimation from "../../animation/OrderCardsAnimation";
import LineAnimation from "../../animation/LineAnimation";
import useMediaQuery from "../../hooks/useMediaQuery";
import VerticalAnimation from "../../animation/VerticalAnimation";

const HowToOrder = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <PageBlock heading="Как сделать заказ?" subHeading="Быстро и без лишних хлопот: Всего три шага для вашего заказа">
      <div className={styles.wrapperCards}>
        {isMobile ? <VerticalAnimation className={styles.animatedLine} key="mobile" /> : <LineAnimation className={styles.animatedLine} key="desktop" />}
        {orderData.map((el, index) => (
          <OrderCardsAnimation key={`order-card-${index}`}>
            <OrderCard key={`order-card-${index}`} {...el} />
          </OrderCardsAnimation>
        ))}
      </div>
    </PageBlock>
  );
};

export default HowToOrder;
