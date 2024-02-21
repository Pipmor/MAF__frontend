import styles from "./ContactUs.module.css";
import Form from "../Form/Form";
import PageBlock from "../PageBlock/PageBlock";
import PhoneList from "../PhoneList/PhoneList";

const ContactUs = () => {
  return (
    <PageBlock>
      <div className={styles.headingBlock}>
        <h2 className={styles.heading}>
          Хотите получить консультацию и рассчитать стоимость?
        </h2>
        <p className={styles.callUs}>
          Оставьте свои контактные данные. Мы свяжемся с вами для уточнения всей
          информации.
          <br />
          <br />
          Или позвоните по номеру: <PhoneList separator="comma" />
        </p>
      </div>
      <Form />
    </PageBlock>
  );
};

export default ContactUs;
