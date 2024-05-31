import styles from "./Layout.module.css";
import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { ModalContext } from "../Modal/ModalContext";
import Widget from "../Widget/Widget";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const memoSetShowModal = useCallback(setShowModal, []);

  return (
    <ModalContext.Provider value={memoSetShowModal}>
      <div className={styles.Layout}>
        <Header />
        <Breadcrumbs />
        <main className={styles.main}>
          <Outlet />
          {showModal && <Modal />}
        </main>
        <Widget />
        <Footer />
        <ScrollToTop />
      </div>
    </ModalContext.Provider>
  );
};

export default Layout;
