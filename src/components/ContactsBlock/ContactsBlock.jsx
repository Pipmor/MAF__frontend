import styles from "../ContactsBlock/ContactsBlock.module.css";
import PageBlock from "../PageBlock/PageBlock.jsx";
import ContactCard from "../ContactsBlock/ContactCard/ContactCard.jsx";
import phoneIcon from "../../assets/icons/contact_icons/phoneIcon.png";
import locationIcon from "../../assets/icons/contact_icons/locationIcon.png";
import mailIcon from "../../assets/icons/contact_icons/mailIcon.png";
import personIcon from "../../assets/icons/contact_icons/personIcon.png";
import map from "../../assets/images/map.png";
import useSWR from "swr";
import axiosPrint from "../../api/axiosPrint.js";
import {useTranslation} from "react-i18next";

const fetcher = async (url) => {
    try {
        const response = await axiosPrint.get(url);
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error;
    }
};

const ContactsBlock = () => {
    const { t } = useTranslation();
    const { data: contacts, error } = useSWR("/blog/contact", fetcher);

    if (error) {
        return <div>{t('error1')}</div>;
    }

    if (!contacts) {
        return <div>{t('loading')}</div>;
    }

    return (
        <PageBlock heading="Контакты">
            <ul className={styles.cardList}>
                <ContactCard
                    title=""
                    subtitle={t('contactsEmail')}
                    iconURL={mailIcon}
                    content={contacts[0].email}
                />
                <ContactCard
                    title=""
                    subtitle={t('contactsPhone')}
                    iconURL={phoneIcon}
                    content={contacts[0].phone}
                />
                <ContactCard
                    title=""
                    subtitle={t('contactsAddress')}
                    iconURL={locationIcon}
                    content={contacts[0].address}
                />
                <ContactCard
                    title=""
                    subtitle={t('contactsDirector')}
                    iconURL={personIcon}
                    content={contacts[0].owner}
                />
            </ul>
            <img src={map} alt="Карта" className={styles.mapImage} />
        </PageBlock>
    );
};

export default ContactsBlock;
