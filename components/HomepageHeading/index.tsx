import styles from "./styles.module.scss";
import Images from "../Images/index";
import gridimage from "../../public/images/png/bgGrid.png";
import gridimagefallback from "../../public/images/webp/bgGrid.webp";

const HomepageHeading = () => {
  return (
    <>
      <section className={styles.yumeLabsMainHeading}>
        <div className={styles.topSectionGrid}>
          <Images
            icon={gridimage}
            fallBackImage={gridimagefallback}
            alt="grid image"
          />
        </div>
        <div>
          <div className={styles.gridContaint}>
            <div className={styles.yumeLabsMainHeadingLeft}>
              <p>Simplifying the Next.</p>
              <span>for Dreamers who do.</span>
            </div>
            <div className={styles.yumeLabsMainHeadingRight}>
              <p className={styles.yumeLabsMainHeadingRightPara}>
                High-potential global brands trust Yume Labs for<br />better customer advocacy,<br />stronger investor trust, and<br />higher media love.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageHeading;
