import styles from "./styles.module.scss";
import Images from "../../Images/index";
import gridimage from "../../../public/images/png/bgGrid.png";
import gridimagefallback from "../../../public/images/webp/bgGrid.webp";
import Mobile__grid from "../../../public/images/webp/Group 36521.webp";

function OurServicesHead() {
  return (
    <div>
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
          <span>Our Services</span>
          <h2>Simplifying the Next.</h2>
          <p>
            Yumelabs is a global UI UX Design and Industrial Design agency that
            helps your business scale through fail-proof design innovation
            systems.
          </p>
          <p>
            High-potential global brands trust Yume Labs for better customer
            advocacy, stronger investor trust, and higher media love.
          </p>
        </div>
      </section>
    </div>
  );
}

export default OurServicesHead;
