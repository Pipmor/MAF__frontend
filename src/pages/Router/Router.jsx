import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Products from "../Products/Products.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import About from "../About/About.jsx";
import Blog from "../Blog/Blog.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import { getServiceById } from "../../api/getServiceById.js";
import styles from "../../components/Breadcrumbs/Breadcrumbs.module.css";
import Services from "../Services/Services.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";
import { getProductById } from "../../api/getProductById.js";
import DetailPage from "../DetailPage/DetailPage.jsx";

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
          element: <Services />,
          handle: {
            crumb: () => (
              <NavLink to="/services" className={styles.navLink} end>
                Услуги
              </NavLink>
            ),
          },
          children: [
            {
              path: ":name",
              element: <DetailPage />,
              loader: getServiceById,
              handle: {
                crumb: (data) => (
                  <span className={styles.span}>{data.title}</span>
                ),
              },
            },
          ],
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
              path: ":name",
              element: <DetailPage />,
              loader: getProductById,
              handle: {
                crumb: (data) => (
                  <span className={styles.span}>{data.title}</span>
                ),
              },
            },
          ],
        },
        {
          path: "blog",
          element: <Blog />,
          handle: {
            crumb: () => (
              <NavLink to="/blog" className={styles.navLink} end>
                Блог
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
