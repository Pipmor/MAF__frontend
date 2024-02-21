import styles from "./TwoGis.module.css";
import PageBlock from "../PageBlock/PageBlock";

const TwoGis = () => {
  //FIX_ME
  const organizationCode = "70000001036220100";
  const organizationLatitude = "42.879168";
  const organizationLongitude = "74.6179";

  const options = JSON.stringify({
    pos: { lat: organizationLatitude, lon: organizationLongitude, zoom: 15 },
    opt: { city: "bishkek" },
    org: organizationCode,
  });

  const twoGisIframeURL = encodeURI(
    `https://widgets.2gis.com/widget?type=firmsonmap&options=${options}`
  );

  return (
    <PageBlock>
      <iframe
        className={styles.map}
        frameBorder="no"
        src={twoGisIframeURL}
      ></iframe>
    </PageBlock>
  );
};

export default TwoGis;
