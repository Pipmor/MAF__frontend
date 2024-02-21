import { useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
import PageBlock from "../../components/PageBlock/PageBlock";
import Button from "../../components/UI/Button/Button";
import ReusableCarousel from "../../components/ReusableCarousel/ReusableCarousel";
import DOMPurify from "dompurify";
import { useModal } from "../../components/Modal/ModalContext";
import styles from "./DetailPage.module.css";

const DetailPage = () => {
  const { openModal } = useModal();

  const data = useLoaderData();
  const formattedData = DOMPurify.sanitize(data.detail_description);

  const handleLoad = (event) => {
    event.target.classList.add(styles.loadedImage);
  };

  return (
    <>
      <PageBlock>
        <div className={styles.flexContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBackground} />
            <div className={styles.imageWrapper}>
              <img
                key={data.title}
                className={styles.image}
                src={data.image}
                alt={data.title}
                onLoad={handleLoad}
              />
            </div>
          </div>
          <div className={styles.titleWithButton}>
            <h3 className={styles.detailTitle}>{data.title}</h3>
            <Button className="custom-button" onClick={openModal}>
              Расчитать стоимость
            </Button>
          </div>
          <div className={styles.detailDescription}>{parse(formattedData)}</div>
        </div>
      </PageBlock>
      <ReusableCarousel dots="true" />
    </>
  );
};

export default DetailPage;
