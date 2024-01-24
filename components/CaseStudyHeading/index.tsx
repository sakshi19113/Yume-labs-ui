import styles from "./styles.module.scss";
import Images from "../Images/index";
import gridimage from "../../public/images/png/bgGrid.png";
import gridimagefallback from "../../public/images/webp/bgGrid.webp";
import Mobile__grid from "../../public/images/webp/Group 36521.webp";

const YumeLabsMainHeading = () => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.topSection}>
        <div className={styles.homepageHeadingGrid}>
          <Images
            icon={gridimage}
            fallBackImage={gridimagefallback}
            alt="grid image"
            className={styles.yumeLabsGridImage}
          />
        </div>
        <div className={styles.topSectionGridMobile}>
          <Images
            icon={Mobile__grid}
            fallBackImage={Mobile__grid}
            alt="Background grid"
          />
        </div>
        <div className={styles.topSectionHeading}>
          <span>Minits</span>
          <span>Our services</span>
          <h2>Simplifying the Next.</h2>
          <p>
            Maiven is a cutting-edge AI-powered software designed to assist
            companies by analyzing audience engagement through a combination of
            eye tracking and facial recognition technologies. This software aims
            to provide insights into where the audience's attention is focused
            the most and their emotional reactions to the content.
          </p>
          <p>
            High-potential global brands trust Yume Labs for better customer
            advocacy, stronger investor trust, and higher media love.
          </p>
        </div>
      </section>

      <div className={styles.productContainer}>
        <div className={styles.serviceProduct}>
          <p className={styles.serviceText}>Services</p>
          <p className={styles.productText}>Product</p>
        </div>
        <div className={styles.serviceProduct}>
          <p className={styles.serviceText}>Industry</p>
          <p className={styles.productText}>Product</p>
        </div>
        <div className={`${styles.serviceProduct} ${styles.location}`}>
          <p className={styles.serviceText}>Location</p>
          <p className={styles.productText}>Product</p>
        </div>
      </div>
    </div>
  );
};

export default YumeLabsMainHeading;
