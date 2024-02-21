import useSWR from "swr";
import { getContacts } from "../../api/getContacts";
import styles from "./PhoneList.module.css";

/**
 * @param {object} PhoneListProps
 * @param {'comma'|'pipe'} [PhoneListProps.separator]
 */
const PhoneList = ({ separator }) => {
  const { data } = useSWR("/contacts", getContacts);

  const phoneList = [];
  data?.phone_number && phoneList.push(data.phone_number);
  data?.phone_number2 && phoneList.push(data.phone_number2);
  data?.phone_number3 && phoneList.push(data.phone_number3);

  const nbspPhoneList = phoneList.map((entry) =>
    entry.replace(/\s/g, "\u00A0")
  );

  return (
    <>
      {nbspPhoneList.map((phoneNumber, index, array) => (
        <span className={styles.phoneNumber} key={index}>
          {phoneNumber}
          {index < array.length - 1 && <Separator variant={separator} />}
        </span>
      ))}
    </>
  );
};

export default PhoneList;

const Separator = ({ variant }) => {
  return variant === "comma" ? <CommaSeparator /> : <PipeSeparator />;
};

const PipeSeparator = () => (
  <span className={styles.pipeSeparator}> &nbsp;|&nbsp; </span>
);

const CommaSeparator = () => <span className={styles.commaSeparator}>, </span>;
