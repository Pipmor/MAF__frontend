import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Products from "../Products/Products.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import About from "../About/About.jsx";
import Press from "../Press/Press.jsx";
import Questions from "../Questions/Questions.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import styles from "../../components/Breadcrumbs/Breadcrumbs.module.css";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";
import {getProductById} from "../../api/getProductById.js";
import ProductDetail from "../DetailPage/ProductDetail.jsx";
import CalendarPage from "../../components/Сalendar/Calendar.jsx";
import NewsPage from "../../components/Publish/Publish.jsx";
import EventsPage from "../../components/Events/Events.jsx";
import NewsVideo from "../../components/NewsVideo/NewsVideo.jsx";
import Vaccine from "../../components/Vaccine/Vaccine.jsx";
import ProductNew from "../../components/ProductNew/ProductNew.jsx";
import ServicePage from "../ServicePage/ServicePage.jsx";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,

      handle: {
        crumb: () => (
          <NavLink to="/" className={styles.navLink}>
            Главная
          </NavLink>
        ),
      },
      children: [
        { index: true, element: <Home /> },

        {
          path: "services",
          element: <ServicePage />,
          handle: {
            crumb: () => (
                <NavLink to="/services" className={styles.navLink} end>
                  Услуги
                </NavLink>
            ),
          },
        },
        {
          path: "products",
          element: <Products />,
          handle: {
            crumb: () => (
              <NavLink to="/products" className={styles.navLink} end>
                Продукция
              </NavLink>
            ),
          },
          children: [
            {
              path: ':productId',
              element: <ProductDetail />,
              loader: (params) => getProductById({ params: { id: parseInt(params.productId, 10) } }),
              handle: {
                crumb: (data) => <span className={styles.span}>{data.title}</span>,
              },
            },
          ],
        },
        {
          path: "vaccine",
          element: <Vaccine/>,
          handle: {
            crumb: () => (
                <NavLink to="/vaccine" className={styles.navLink} end>
                  Вакцины
                </NavLink>
            ),
          },
        },
        {
          path: "ProductNew",
          element: <ProductNew/>,
          handle: {
            crumb: () => (
                <NavLink to="/productNew" className={styles.navLink} end>
                  Новинки
                </NavLink>
            ),
          },
        },
        {
          path: "ProductDetail",
          element: <ProductDetail/>,
          handle: {
            crumb: () => (
                <NavLink to="/productDetail" className={styles.navLink} end>
                  ТЩАЗ
                </NavLink>
            ),
          },
        },

        {
          path: "press",
          element: <Press />,
          handle: {
            crumb: () => (
                <NavLink to="/press" className={styles.navLink} end>
                  Пресс центр
                </NavLink>
            ),
          },
        },
        {
          path: "events", 
          element: <EventsPage />, 
          handle: {
            crumb: () => (
                <NavLink to="/events" className={styles.navLink} end>
                  События
                </NavLink>
            ),
          },
        },

        {
          path: "news",
          element: <NewsPage />,
          handle: {
            crumb: () => (
                <NavLink to="/news" className={styles.navLink} end>
                  Новости
                </NavLink>
            ),
          },
        },
        {
          path: "calendar",
          element: <CalendarPage />,
          handle: {
            crumb: () => (
                <NavLink to="/calendar" className={styles.navLink} end>
                  Календарь
                </NavLink>
            ),
          },
        },
        {
          path: "newsvideo",
          element: <NewsVideo />,
          handle: {
            crumb: () => (
                <NavLink to="/newsvideo" className={styles.navLink} end>
                  Видео
                </NavLink>
            ),
          },
        },
        {
          path: "questions",
          element: <Questions />,
          handle: {
            crumb: () => (
                <NavLink to="/questions" className={styles.navLink} end>
                  Вопросы и Ответы
                </NavLink>
            ),
          },
        },
        {
          path: "about",
          element: <About />,
          handle: {
            crumb: () => (
              <NavLink to="/about" className={styles.navLink} end>
                О нас
              </NavLink>
            ),
          },
        },
        {
          path: "contacts",
          element: <Contacts />,
          handle: {
            crumb: () => (
              <NavLink to="/contacts" className={styles.navLink} end>
                Контакты
              </NavLink>
            ),
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
