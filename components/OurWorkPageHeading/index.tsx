import Images from "../Images/index";
import styles from "./styles.module.scss";
import gridImage from "../../public/images/png/Group 36635.png";
import gridimagemobile from "../../public/images/webp/Group 36521.webp";
import gridimagemobilefallback from "../../public/images/png/Group 36521.png";

const OurWorkPageHeading = () => {
  return (
    <section className={styles.yumeLabsMainHeading}>
      <div className={styles.topSectionGrid}>
        <Images icon={gridImage} fallBackImage={gridImage} alt="grid image" />
      </div>
      <div className={styles.topSectionGridTwo}>
        <Images
          icon={gridimagemobile}
          fallBackImage={gridimagemobilefallback}
          alt="grid mobile image"
        />
      </div>
      <div className={styles.yumeLabsMainHeadingLeft}>
        <span>Our Work</span>
        <span>Our Services</span>
        <h1>Simplifying the Next.</h1>
      </div>
      <div className={styles.yumeLabsMainHeadingRight}>
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
  );
};

export default OurWorkPageHeading;
