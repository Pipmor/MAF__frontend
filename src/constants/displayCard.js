
export const displayCards = (isPageName,data,length) => {
  const productCardsInHomePage =
      data?.length > length ? data?.slice(0, length) : data;
  if (isPageName) {
    return productCardsInHomePage
  } else {
    return data;
  }
};


