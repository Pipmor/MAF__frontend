import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Products from "../Products/Products.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import About from "../About/About.jsx";
import Press from "../Press/Press.jsx";
import Questions from "../Questions/Questions.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";
import ProductDetail from "../DetailPage/ProductDetail.jsx";
import CalendarPage from "../../components/Сalendar/Calendar.jsx";
import NewsPage from "../../components/Publish/Publish.jsx";
import EventsPage from "../../components/Events/Events.jsx";
import NewsVideo from "../../components/NewsVideo/NewsVideo.jsx";
import Vaccine from "../../components/Vaccine/Vaccine.jsx";
import ProductNew from "../../components/ProductNew/ProductNew.jsx";
import ServicePage from "../ServicePage/ServicePage.jsx";
import Feed from "../../components/Feed/Feed.jsx";
import VeterenarDrugs from "../../components/VeterenarDrugs/VeterenarDrugs.jsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'services',
        element: <ServicePage />,
      },
      {
        path: 'products',
        element: <Products />,
        children: [
          {
            path: '/products/:productId',
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: 'vaccine',
        element: <Vaccine />,
      },
      {
        path: 'feed',
        element: <Feed />,
      },
      {
        path: 'productNew',
        element: <ProductNew />,
      },
      {
        path: 'veterenarDrugs',
        element: <VeterenarDrugs />,
      },
      {
        path: 'productDetail',
        element: <ProductDetail />,
      },
      {
        path: 'press',
        element: <Press />,
      },
      {
        path: 'events',
        element: <EventsPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'calendar',
        element: <CalendarPage />,
      },
      {
        path: 'newsvideo',
        element: <NewsVideo />,
      },
      {
        path: 'questions',
        element: <Questions />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
]);
