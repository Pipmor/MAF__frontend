import styles from "../ContactsBlock/ContactsBlock.module.css";
import PageBlock from "../PageBlock/PageBlock.jsx";
import ContactCard from "../ContactsBlock/ContactCard/ContactCard.jsx";
import phoneIcon from "../../assets/icons/contact_icons/phone.svg";
import locationIcon from "../../assets/icons/contact_icons/location.svg";
import mailIcon from "../../assets/icons/contact_icons/mail.svg";
import timeIcon from "../../assets/icons/contact_icons/time.svg";
// import { getContacts } from "../../api/getContacts"; // временно закомментировали вызов API

// Мокап данных, замените на вызов API, когда будет готово
const mockData = {
  phone_number: "123-456-789",
  phone_number2: "987-654-321",
  phone_number3: "111-222-333",
  email: "example@email.com",
  working_hours: "9:00 AM - 5:00 PM",
  address: "123 Main St, City"
};

const ContactsBlock = () => {
  // const { data } = useSWR("/contacts", getContacts); // временно закомментировали вызов API
  // const phoneNumbers = [data?.phone_number]; // временно закомментировали вызов API
  // data?.phone_number2 && phoneNumbers.push(data.phone_number2); // временно закомментировали вызов API
  // data?.phone_number3 && phoneNumbers.push(data.phone_number3); // временно закомментировали вызов API

  // Временно использовали мокап данных
  const phoneNumbers = [mockData?.phone_number];
  mockData?.phone_number2 && phoneNumbers.push(mockData.phone_number2);
  mockData?.phone_number3 && phoneNumbers.push(mockData.phone_number3);

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
              content={mockData?.email} /* временно использовали мокап данных */
          />
          <ContactCard
              title="График работы"
              iconURL={timeIcon}
              content={mockData?.working_hours} /* временно использовали мокап данных */
          />
          <ContactCard
              title="Адрес"
              iconURL={locationIcon}
              content={mockData?.address} /* временно использовали мокап данных */
          />
        </ul>
      </PageBlock>
  );
};

export default ContactsBlock;
