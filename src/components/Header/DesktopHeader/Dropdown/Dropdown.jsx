import styles from "./Dropdown.module.css";
import useSWR from "swr";
import { useState, useEffect } from "react";
import DropdownList from "../DropdownList/DropdownList";
import ServicesContent from "../ServicesContent/ServicesContent";
import ProductsContent from "../ProductsContent/ProductsContent";
import { getServicesData } from "../../../../api/getServicesData";
import { getProductsData } from "../../../../api/getProductsData";

const Dropdown = ({ contentType, closeDropdown }) => {
  const { data: servicesData } = useSWR("/service_list", getServicesData);
  const { data: productsData } = useSWR("/products", getProductsData);
  const [selectedContentName, setSelectedContentName] = useState(null);
  const servicesPathName = servicesData?.map((service) => service.slug);

  const getUniqueCategoryNames = () => {
    const allCategoryNames =
      productsData?.flatMap((data) => data.category.map((cat) => cat.name)) ||
      [];
    const categories = [...new Set(allCategoryNames)];
    return categories;
  };

  const contentNames =
    contentType === "services"
      ? servicesData?.map((data) => data.title)
      : getUniqueCategoryNames();

  const handleContentHover = (contentName) => {
    setSelectedContentName(contentName);
  };

  useEffect(() => {
    if (!contentNames.includes(selectedContentName)) {
      setSelectedContentName(contentNames[0]);
    }
  }, [contentNames, selectedContentName]);

  const getSelectedContentData = () => {
    if (contentType === "services") {
      return servicesData?.find((data) => data.title === selectedContentName);
    } else {
      return productsData?.filter((data) => {
        const categoryNames = data.category.map((cat) => cat.name);
        return categoryNames.includes(selectedContentName);
      });
    }
  };

  const selectedContentData = getSelectedContentData();

  if (!contentNames.length) {
    return null;
  }

  return (
    <div
      className={`${styles.dropdownContainer} ${
        !!contentType && styles.isOpen
      } container`}
    >
      {contentType && (
        <div className={styles.wrapper}>
          <DropdownList
            contentNames={contentNames}
            onHover={handleContentHover}
            closeDropdown={closeDropdown}
            selectedContent={selectedContentName}
            contentType={contentType}
            servicesPathName={servicesPathName}
          />
          {selectedContentData && contentType === "services" ? (
            <ServicesContent
              key={`services ${selectedContentData?.title}`}
              description={selectedContentData?.detail_description}
              imageUrl={selectedContentData?.image}
              closeDropdown={closeDropdown}
              pathName={selectedContentData?.slug}
            />
          ) : (
            <ProductsContent
              key={`products ${selectedContentData?.title}`}
              images={selectedContentData?.map((data) => data.image)}
              titles={selectedContentData?.map((data) => data.title)}
              pathNames={selectedContentData?.map((data) => data.slug)}
              closeDropdown={closeDropdown}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
