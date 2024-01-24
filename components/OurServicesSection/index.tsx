"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Images from "../Images/index";
import ImageContainer from "../Images/index";
import untitledWebp from "../../public/images/webp/untitled.webp";
import untitledPng from "../../public/images/png/untitled.png";
import gridimage from "../../public/images/png/Group 36666.svg";
import gridimagefallback from "../../public/images/webp/bgGrid.webp";

gsap.registerPlugin(ScrollTrigger);

function OurServiceSection() {
  const textRef = useRef(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const imagesContainer = imagesContainerRef.current;

    if (!isMobile) {
      if (textRef.current) {
        const splitText = new SplitType(textRef.current, {
          types: "chars,words,lines",
        });

        gsap.from(splitText.chars, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power1.out",
          stagger: 1,
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

    if (imagesContainer && !isMobile) {
      let sections = gsap.utils.toArray(imagesContainer.children);
      let totalWidth = 100 * (sections.length - 2);
	    const tween = gsap.to(imagesContainer, {
      x: totalWidth,
      duration: 3,
      ease: "none",
    });

      gsap.to(sections, {
        xPercent: `-${totalWidth}`,
        ease: "none",
        duration: 1,
        animation: `${tween}`,
        scrollTrigger: {
          trigger: imagesContainer,
          start: !isMobile ? "top 20%" : "",
          pin: true,
          scrub: 2,
          snap: 1 / (sections.length - 1),
          end: `+=${totalWidth}`,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
    }
  }, []);

  return (
    <div className={styles.ourServicesHomePage}>
      <section className={styles.yumeLabsMainHeading}>
        <div className={styles.topSectionGrid}>
          <Images
            icon={gridimage}
            fallBackImage={gridimagefallback}
            alt="grid image"
          />
        </div>
        <div
          className={`${styles.yumeLabsMainHeadingLeft} ${styles.ourServiceSectionText}`}
        >
          <p className={styles.ourServiceText}>Our Services</p>
          <p className={styles.ourApproachText}>Our Approach</p>
          <h2 ref={textRef} className={styles.ourServiceHeadText}>
            High-potential global brands trust Yume Labs for better customer
            advocacy, stronger investor trust, and higher media love.
          </h2>
        </div>
      </section>
   {/* <div
        className="imagesWrapper"
        style={{
          width: "fit-content",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >  */}
        <div
          ref={imagesContainerRef}
          className={styles.ourServiceScrollbarContainer}
        >
          <div className={styles.ourServiceScrollbarSection}>
            <div className={styles.ourServiceScrollbarText}>
              <h4>Deeper Insight</h4>
              <p>
                Yume Labs is a global UI UX Design and Industrial Design agency
                that helps your business scale through fail-proof design
                innovation systems.
              </p>
            </div>
            <div className={styles.ourServiceScrollbarImg}>
              <ImageContainer
                icon={untitledWebp}
                fallBackImage={untitledPng}
                alt="Our Services Scrollbar Image"
              />
            </div>
          </div>
          <div className={styles.ourServiceScrollbarSection}>
            <div className={styles.ourServiceScrollbarText}>
              <h4>Pioneering Innovation</h4>
              <p>
                Yume Labs is a global UI UX Design and Industrial Design agency
                that helps your business scale through fail-proof design
                innovation systems.
              </p>
            </div>
            <div className={styles.ourServiceScrollbarImg}>
              <ImageContainer
                icon={untitledWebp}
                fallBackImage={untitledPng}
                alt="Our Services Scrollbar Image"
              />
            </div>
          </div>
          <div className={styles.ourServiceScrollbarSection}>
            <div className={styles.ourServiceScrollbarText}>
              <h4>Compelling Design</h4>
              <p>
                Yume Labs is a global UI UX Design and Industrial Design agency
                that helps your business scale through fail-proof design
                innovation systems.
              </p>
            </div>
            <div className={styles.ourServiceScrollbarImg}>
              <ImageContainer
                icon={untitledWebp}
                fallBackImage={untitledPng}
                alt="Our Services Scrollbar Image"
              />
            </div>
          </div>
        </div>
      {/* </div>  */}
    </div>
  );
}

export default OurServiceSection;