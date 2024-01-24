"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import playReelWebp from "../../public/images/webp/Icon ionic-md-arrow-dropleft.webp";
import playReelPng from "../../public/images/png/Icon ionic-md-arrow-dropleft.png";
import Images from "../../components/Images/index";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

const HeroImageContainer = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      const container = document.querySelector(`.${styles.heroImageContainer}`);
  
      gsap.fromTo(
        container,
        {
          scale: 0.5,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2.5,
          delay: 1, // Add a delay to slow down the animation (adjust as needed)
        }
      );
    }
  }, []);

  return (
    <section className={styles.heroImageContainer}>
      <div className={styles.heroImageContainerContent}>
        <div className={styles.heroImageContainerLeft}>
          <p>
            Dreams <br />
            Delivered
          </p>
        </div>
        <div className={styles.heroImageContainerRight}>
          <span>Play Showreel</span>
          <div className={styles.playShowreelButton}>
            <Images
              icon={playReelWebp}
              fallBackImage={playReelPng}
              alt="hero image for homepage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImageContainer;
