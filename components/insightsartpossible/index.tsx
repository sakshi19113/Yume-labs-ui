import React from "react";
import Images from "../Images/index";
import styles from "./styles.module.scss";
import techImageInsightPng from "../../public/images/png/Untitled-33.png";
import techImageInsightWebp from "../../public/images/webp/Untitled-33.webp";

const ArtOfPossible = () => {
  return (
    <div className={styles.newImageSection}>
      <div className={styles.newsTechImg}>
        <Images
          icon={techImageInsightWebp}
          fallBackImage={techImageInsightPng}
          alt="news tech-image"
        />
      </div>
      <div className={styles.newsImgContainerText}>
        <span>
          <strong>/01 / News Technology / 03 March 2022</strong>
        </span>
        <p>
          Great Place to Work 2022 Survey: Vincit is the best place to work in
          Finland, again!
        </p>
      </div>
    </div>
  );
};

const ArtOfPossibleSection = () => {
  return (
    <>
      <section className={styles.artOfPossibleSection}>
        <div className={styles.newsImgContainer}>
          <ArtOfPossible />
          <hr />
          <ArtOfPossible />
          <hr />
          <ArtOfPossible />
          <hr />
          <ArtOfPossible />
          <hr />
          <ArtOfPossible />
          <hr />
          <ArtOfPossible />
          <hr />
          <ArtOfPossible />
        </div>
        <div className={styles.allServiceButton}>
          <div className={styles.allServiceBtnContainer}>
            <span>LOAD MORE</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default ArtOfPossibleSection;
