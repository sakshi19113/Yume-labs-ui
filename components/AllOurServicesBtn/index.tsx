"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./styles.module.scss";
import Images from "../Images/index";
import rightArrowWebp from "../../public/images/webp/Icon material-arrow-forward.webp";
import rightArrowPng from "../../public/images/png/Icon ionic-md-arrow-down.png";

gsap.registerPlugin(ScrollTrigger);

function AllOurServices() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile && window.location.pathname === '/') {
      const myCustomButton = document.querySelector(
        `.${styles.allOurServicesButton}`
      );
      gsap.set(myCustomButton, { y: 100 });

      ScrollTrigger.create({
        once: true,
        trigger: myCustomButton,
        start: "top 80%",
        onEnter: () => {
          gsap.to(myCustomButton, {
            y: 0,
            duration: 2,
            ease: "power2.out",
          });
        },
      });
    }
  }, []);

  return (
    <>
      <div className={styles.allOurServices}>
        <a href="/services" className={styles.allOurServicesButton}>
          <p className={styles.allOurServicesText}>ALL OUR SERVICES</p>
          <p className={styles.explorePortfolioText}>EXPLORE PORTFOLIO</p>
          <button className={styles.playButtonAllOurServices}>
            <Images
              icon={rightArrowWebp}
              fallBackImage={rightArrowPng}
              alt="rigth-arrow"
            />
          </button>
        </a>
      </div>
    </>
  );
}

export default AllOurServices;
