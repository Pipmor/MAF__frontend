import { Outlet, useParams } from "react-router-dom";
import styles from "./Service.module.css";

const Services = () => {
    const params = useParams();
    if (params.name) return <Outlet />;

    return (
        <>
            <div className={styles.servicesContainer}>
                <h3>Услуги</h3>
                <p className={styles.companyInfo}>
                    Компания "МИРАГРОФАРМ" предлагает контрактное производство:
                </p>
                <ul>
                    <li>1.Ветеринарных препаратов</li>
                    <li>2.Престартерных и стартерных комбикормов</li>
                    <li>3.Премиксов</li>
                    <li>4.Витаминно-минеральных добавок</li>
                    <li>5.Белково-витаминно-минеральных добавок</li>
                    <li>6.Витаминно-минеральных смесей</li>
                </ul>
                <p className={styles.additionalInfo}>
                    Оказываем услуги по смешиванию кормовых добавок.
                </p>
                <p className={styles.qualityInfo}>
                    Имеющееся оборудование и наличие аккредитованной лаборатории позволяет
                    производить высококачественную продукцию.
                </p>
                <p className={styles.contactInfo}>
                    Подробную информацию о данных услугах вы можете получить по телефонам: +375 17 13 70-315, +375 17 13 70-315
                </p>
                <p>E-mail: olga.davidova@beleka.by</p>
            </div>
        </>
    );
};

export default Services;
