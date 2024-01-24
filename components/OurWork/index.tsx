"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Images from "../Images/index";
import styles from "./styles.module.scss";
import topLeftImage from "../../public/images/webp/Group 817444.webp";
import tabletImagePng from "../../public/images/png/Group 8174.png";
import mobileHandWebp from "../../public/images/webp/Group 8194.webp";
import mobileHandPng from "../../public/images/png/Group 8194.png";
import bottomLeftImage from "../../public/images/webp/ourWorkImg3.webp";
import bottomRightImage from "../../public/images/webp/ourWorkImg4.webp";

gsap.registerPlugin(ScrollTrigger);

const OurWorkSection = (props: any) => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      const pictures = [props.id1, props.id2];

      pictures.forEach((pic, index) => {
        const element = document.getElementById(pic);
        gsap.set(element, { y: `${(index + 1) * 150}px` });
  
        ScrollTrigger.create({
          trigger: element,
          once: true,
          start: "top 80%",
          onEnter: () => {
            gsap.to(element, {
              y: 0,
              duration: 1,
              ease: "power2.out",
            });
          },
        });
      });
    }
  }, []);

  return (
    <div className={styles.ourWorkHeroSection}>
      <div id={props.id1} className={styles.ourWorkHeroLeft}>
        <Images
          icon={props.left}
          fallBackImage={tabletImagePng}
          alt="tablet image"
        />
        <div className={styles.ourWorkHeroDescription}>
          <div>
            <span># UX/UI</span>
            <span># DEVELOPMENT</span>
          </div>
          <h6>Simplicontract</h6>
          <p>
            Yumelabs is a global UI UX Design and Industrial Design agency that
            helps your business scale through fail-proof design innovation
            systems.
          </p>
        </div>
      </div>
      <div id={props.id2} className={styles.ourWorkHeroRight}>
        <Images
          icon={props.right}
          fallBackImage={mobileHandPng}
          alt="mobile in my hand"
        />
        <div className={styles.ourWorkHeroDescription}>
          <div>
            <span># UX/UI</span>
            <span># DEVELOPMENT</span>
          </div>
          <h6>Simplicontract</h6>
          <p>
            Yumelabs is a global UI UX Design and Industrial Design agency that
            helps your business scale through fail-proof design innovation
            systems.
          </p>
        </div>
      </div>
    </div>
  );
};

const OurWork = () => {
  return (
    <section className={styles.ourWorkHeroContainer}>
      <OurWorkSection
        id1={"pic1"}
        id2={"pic2"}
        left={topLeftImage}
        right={mobileHandWebp}
      />
      <OurWorkSection
        id1={"pic3"}
        id2={"pic4"}
        left={bottomLeftImage}
        right={bottomRightImage}
      />
    </section>
  );
};

export default OurWork;
