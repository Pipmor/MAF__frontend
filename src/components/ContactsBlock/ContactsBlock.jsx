import styles from "./ContactsBlock.module.css";
import useSWR from "swr";
import PageBlock from "../PageBlock/PageBlock";
import ContactCard from "./ContactCard/ContactCard";
import phoneIcon from "../../assets/icons/contact_icons/phone.svg";
import locationIcon from "../../assets/icons/contact_icons/location.svg";
import mailIcon from "../../assets/icons/contact_icons/mail.svg";
import timeIcon from "../../assets/icons/contact_icons/time.svg";
import { getContacts } from "../../api/getContacts";

const ContactsBlock = () => {
  const { data } = useSWR("/contacts", getContacts);

  const phoneNumbers = [data?.phone_number];
  data?.phone_number2 && phoneNumbers.push(data.phone_number2);
  data?.phone_number3 && phoneNumbers.push(data.phone_number3);

  return (
    <PageBlock heading="Контакты">
      <ul className={styles.cardList}>
        <ContactCard
          title="Телефон"
          iconURL={phoneIcon}
          content={phoneNumbers}
        />
        <ContactCard
          title="Электронная почта"
          iconURL={mailIcon}
          content={data?.email}
        />
        <ContactCard
          title="График работы"
          iconURL={timeIcon}
          content={data?.working_hours}
        />
        <ContactCard
          title="Адрес"
          iconURL={locationIcon}
          content={data?.address}
        />
      </ul>
    </PageBlock>
  );
};

export default ContactsBlock;
