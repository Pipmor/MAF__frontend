import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";
import useMediaQuery from "../../hooks/useMediaQuery";

const linkList = [
  { destination: "services", caption: "Услуги" },
  { destination: "products", caption: "Продукция" },
  { destination: "blog", caption: "Блог" },
  { destination: "about", caption: "О нас" },
  { destination: "contacts", caption: "Контакты" },
];

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 1100px)");

  if (isMobile) return <MobileHeader linkList={linkList} />;

  return <DesktopHeader linkList={linkList} />;
};

export default Header;
