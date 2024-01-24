import styles from "./styles.module.scss";
import Images from "../Images/index";
import theArtPng from "../../public/images/png/theArt.png";
import theArtWebp from "../../public/images/webp/theArt.webp";
import gridImage from "../../public/images/png/Group 36635.png";
import gridImageMobile from "../../public/images/webp/Group 36521.webp";
const ArticleContainer = () => {
  return (
    <>
      <section className={styles.yumeLabsMainHeading}>
        <div className={styles.topSectionGrid}>
          <Images icon={gridImage}
           fallBackImage={gridImage}
            alt="grid image" />
        </div>
        <div className={styles.topSectionGridTwo}>
          <Images
            icon={gridImageMobile}
            fallBackImage={gridImageMobile}
            alt="grid mobile image"
          />
        </div>
        <div className={styles.yumeLabsMainHeadingLeft}>
          <span>Article</span>
          <span>Our Services</span>
          <h1>Why Do You Need a Design System?.</h1>
        </div>
        <div className={styles.yumeLabsMainHeadingRight}>
          <p>May 05, 2023</p>
        </div>
      </section>
      <section className={styles.heroInsightsDetailContainer}>
        <Images
          icon={theArtWebp}
          fallBackImage={theArtPng}
          alt="the art image"
        />
      </section>
    </>
  );
};

export default ArticleContainer;
