import React from "react";
import Images from "../Images/index";
import styles from "./styles.module.scss";
import gridImage from "../../public/images/png/Group 36635.png";
import Mobile__grid from "../../public/images/webp/Group 36521.webp";

const InsightsHero = () => {
  return (
    <>
      <section className={styles.yumeLabsMainHeading}>
        <div className={styles.topSectionGrid}>
          <Images
            icon={gridImage}
            fallBackImage={gridImage}
            alt="Background grid"
          />
        </div>
        <div className={styles.topSectionGridMobile}>
          <Images
            icon={Mobile__grid}
            fallBackImage={Mobile__grid}
            alt="Background grid"
          />
        </div>
        <div className={styles.yumeLabsMainHeadingLeft}>
          <span>About Us</span>
          <span>Our Services</span>
          <h1>Feel at home among brave dreamers and curious rebels.</h1>
          <h1>Simplifying the Next.</h1>
        </div>
        <div className={styles.yumeLabsMainHeadingRight}>
          <p>
            Here in “the pond” we're driven by creativity, curiosity and a
            passion for challenging the status quo in everything we do
          </p>
          <p>
            High-potential global brands trust Yume Labs for better customer
            advocacy, stronger investor trust, and higher media love.
          </p>
        </div>
      </section>
      <section className={styles.heroInsightsContainer}>
        <div className={styles.heroInsightsBgImage}>
          <div className={styles.heroImageText}>
            <h6>/01 / News Technology / 03 March 2022</h6>
            <p>
              Great Place to Work 2022 Survey: Vincit is the best place to work
              in Finland, again!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightsHero;
