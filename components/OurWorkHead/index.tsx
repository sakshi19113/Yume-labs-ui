"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Images from "../Images/index";
import gridimage from "../../public/images/png/bgGrid.png";
import gridimagefallback from "../../public/images/webp/bgGrid.webp";

gsap.registerPlugin(ScrollTrigger);

function OurWorkHead() {
  const textRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      if (textRef.current) {
        const splitText = new SplitType(textRef.current, {
          types: "chars,words,lines",
        });

        gsap.from(splitText.chars, {
          opacity: 0.3,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            once: true,
          },
        });
      }
    }
  }, []);

  return (
    <section className={styles.yumeLabsMainHeading}>
      <div className={styles.topSectionGrid}>
        <Images
          icon={gridimage}
          fallBackImage={gridimagefallback}
          alt="grid image"
        />
      </div>
      <div className={styles.yumeLabsMainHeadingLeft}>
        <span>Our Work</span>
        <h2 ref={textRef} className={styles.textAnimate}>
          Discover brand innovation stories that will inspire you to reimagine
          the Next for yours.
        </h2>
      </div>
    </section>
  );
}

export default OurWorkHead;
