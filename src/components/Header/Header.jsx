import React from "react";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSwitcher/LanguageSwitcher.jsx";

const Header = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 1100px)");

  const linkList = [
    { destination: "about", caption: t("about") },
    { destination: "services", caption: t("services") },
    { destination: "products", caption: t("productLink1") },
    { destination: "news", caption: t("press") },
    { destination: "questions", caption: t("AnswerQuestions") },
    { destination: "contacts", caption: t("contacts") },
  ];

  return (
      <>
        {isMobile ? (
            <MobileHeader linkList={linkList} />
        ) : (
            <DesktopHeader linkList={linkList} />
        )}
      </>
  );
};

export default Header;
