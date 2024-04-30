import PageBlock from "../PageBlock/PageBlock.jsx";
import styles from "./Vaccine.module.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button.jsx";
import useSWRImmutable from "swr/immutable";
import { getProductsData } from "../../api/getProductsData.js";
import { displayCards } from "../../constants/displayCard.js";

import data from "./vaccine.db.json";

const Vaccine = ({ isHomePage }) => {
    const { data: productsData } = useSWRImmutable("/products/", getProductsData);

    return (
        <PageBlock className="wrapper">
            <div className={styles.gridContainer}>
                <div className={styles.leftColumn}>
                    <ul>
                        <li><Link to="/">Ветеринарные препараты</Link></li>
                        <li><Link to="/">Корма и кормовые добавки</Link></li>
                        <li><Link to="/vaccine">Вакцины</Link></li>
                        <li><Link to="/products">Продукты</Link></li>
                        <li><Link to="/productNew">Новинки</Link></li>
                    </ul>
                </div>
                <div className={styles.container}>
                    <h2>Вакцины</h2>
                    <p>Вакцина - это биологическое препарат, который используется для защиты организма от инфекционных заболеваний. Она содержит ослабленные или убитые формы патогенов (вирусы, бактерии и т. д.), либо их антигены, что позволяет организму развить иммунитет к определенной болезни без риска тяжелого заболевания. Вакцины являются одним из наиболее эффективных способов предотвращения распространения инфекционных заболеваний и считаются ключевым инструментом в общественном здравоохранении.</p>
                    <div className={styles.selector_wrapper}>
                        <p>Сортировать по:</p>
                        <select className={styles.selector}>
                            <option value="">Все</option>
                            <option value="">А-Я</option>
                            <option value="">А-Я</option>
                            <option value="">А-Я</option>
                        </select>
                    </div>
                    <div className={styles.wrapperCard}>
                        {displayCards(isHomePage, data.products, 16) &&
                            displayCards(isHomePage, data.products, 16).map((el) => (
                                <ProductCard key={el.id} {...el} />
                            ))}
                    </div>
                    <div className={styles.button_wrapper}>
                        {isHomePage && (
                            <Link to={"/products"}>
                                <Button className="button" withArrow>
                                    Смотреть все
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </PageBlock>
    );
};
export default Vaccine;
