import Images from "../Images/index";
import styles from "./styles.module.scss";
import gridImage from "../../public/images/png/Group 36635.png";

const ContactUsPageHeading = () => {
  return (
    <section className={styles.yumeLabsMainHeading}>
      <div className={styles.topSectionGrid}>
        <Images icon={gridImage} fallBackImage={gridImage} alt="grid image" />
      </div>
      <div className={styles.topSectionGridTwo}>
        <Images icon={gridImage} fallBackImage={gridImage} alt="grid mobile image" />
      </div>
      <div className={styles.yumeLabsMainHeadingLeft}>
        <span>Contact Us</span>
        <h1 className={styles.mobileViewHide}>Let us make it real.</h1>
        <h1 className={styles.webViewHide}>
          Feel at home among brave dreamers and curious rebels.
        </h1>
      </div>
      <div className={styles.yumeLabsMainHeadingRight}>
        <p className={styles.mobileViewHide}>
          Here in “the pond” we're driven by creativity, curiosity and a passion
          for challenging the status quo in everything we do
        </p>
        <p className={styles.webViewHide}>
          High-potential global brands trust Yume Labs for better customer
          advocacy, stronger investor trust, and higher media love.
        </p>
      </div>
    </section>
  );
};

export default ContactUsPageHeading;
