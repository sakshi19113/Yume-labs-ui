"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "../../components/Images/index";
import rightArrowWebp from "../../public/images/webp/Icon material-arrow-forward.webp";
import rightArrowPng from "../../public/images/png/Icon ionic-md-arrow-down.png";
import productCartWebp from "../../public/images/webp/Identity123-Business-Cards-Scene-Mockup@2x.webp";
import productCartPng from "../../public/images/png/Identity123-Business-Cards-Scene-Mockup@2x.png";
import industrialCartWebp from "../../public/images/webp/industrialDesign.webp";
import industrialCartPng from "../../public/images/png/industrialDesign.png";
import uxCartWebp from "../../public/images/webp/IMAGE_000823.webp";
import uxCartPng from "../../public/images/png/IMAGE_000823.png";
gsap.registerPlugin(ScrollTrigger);

const InnovationContainer = () => {
  useEffect(() => {
    const boxes = ["box1", "box2", "box3"];

    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      boxes.forEach((box, index) => {
        const element = document.getElementById(box);
        gsap.set(element, { y: `${(index + 1) * 150}px` });

        ScrollTrigger.create({
          trigger: element,
          once: true,
          start: "top 80%",
          onEnter: () => {
            gsap.to(element, {
              y: 0,
              duration: 1.5,
              ease: "power2.out",
            });
          },
        });
      });

      const exploreServicesElement = document.querySelector(
        `.${styles.innovationExploreOurService}`
      );

      gsap.set(exploreServicesElement, { y: -150, opacity: 0 });

      ScrollTrigger.create({
        trigger: exploreServicesElement,
        once: true,
        start: "top 80%",
        onEnter: () => {
          gsap.to(exploreServicesElement, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    }


  }, []);

  return (
    <section className={styles.innovationMarketingContainer}>
      <div id="box1" className={styles.innovationMarketingHeading}>
        <h3 className={styles.gsapHead}>Innovation is the New Marketing.</h3>
        <p className={styles.gsapPara}>
          Build your brand moat with us and leave the competition in the dust.
        </p>
        <p className={styles.innovationMarketingHeadingMobile}>
          Translating user needs into actionable business objectives.
        </p>
        <div className={styles.innovationExploreOurService}>
          <a href="/services">
            <button>
              <span>EXPLORE SERVICES</span>
              <span>ALL OUR SERVICES</span>
              <div>
                <Image
                  icon={rightArrowWebp}
                  fallBackImage={rightArrowPng}
                  alt="rigth-arrow"
                />
              </div>
            </button>
          </a>
        </div>
      </div>
      <div id="box2" className={styles.productIndustrial}>
        <div className={styles.productCart}>
          <Image
            icon={productCartWebp}
            fallBackImage={productCartPng}
            alt="product cart image"
          />
          <h2>PRODUCT <br /> INNOVATION</h2>
        </div>
        <div className={styles.industrialCart}>
          <Image
            icon={industrialCartWebp}
            fallBackImage={industrialCartPng}
            alt="industrial cart image"
          />
          <h2>INDUSTRIAL <br /> DESIGN</h2>
        </div>
      </div>
      <div id="box3" className={styles.uxCart}>
        <Image
          icon={uxCartWebp}
          fallBackImage={uxCartPng}
          alt="ux cart image"
        />
        <h2>UX/UI</h2>
      </div>
    </section>
  );
};

export default InnovationContainer;
