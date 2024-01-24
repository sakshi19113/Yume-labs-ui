"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import manImageWebp from "../../public/images/webp/man.webp";
import abhinavKumar from "../../public/images/webp/abhinavKumar.webp";
import nabarun from "../../public/images/png/nabarun.png";
import manImagePng from "../../public/images/png/man.jpeg";
import Images from "../Images/index";
import gridimage from "../../public/images/png/bgGrid.png";
import gridimagefallback from "../../public/images/webp/bgGrid.webp";
import doubleQuoteWebp from "../../public/images/webp/doubleQuote.webp";
import doubleQuotePng from "../../public/images/png/Icon open-double-quote-sans-left.png";
import leftArrowPng from "../../public/images/png/Icon material-arrow-forward (2).svg";
import rightArrowWebp from "../../public/images/webp/arrow-forward-web.webp";
import rightArrowPng from "../../public/images/png/Icon material-arrow-forward.png";

gsap.registerPlugin(ScrollTrigger);

function CustomerLove() {
  const textRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const customerData = [
    {
      quote:
        "Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems.",
      name: "Mrs. Regina Christy",
      designation: "Chief Digital Officer Approlabs",
      image: {
        icon: manImageWebp,
        fallBackImage: manImagePng,
        alt: "Man Image",
      },
    },

    {
      quote:
        "High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust, and higher media love.",
      name: "Mr. Abhinav Kumar",
      designation: "Chief Technology Officer Yumelabs",
      image: {
        icon: abhinavKumar,
        fallBackImage: abhinavKumar,
        alt: "Abhinav Kumar's image",
      },
    },
    {
      quote:
        "Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems.",
      name: "Mr. Nabarun Bhowmick",
      designation: "Chief Design Officer Yumelabs",
      image: {
        icon: nabarun,
        fallBackImage: nabarun,
        alt: "Nabarun Bhowmick's image",
      },
    },
  ];

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

  const handlePagination = (direction: "prev" | "next") => {
    if (direction === "prev" && currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === "next" && currentPage < customerData.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const currentCustomer = customerData[currentPage];

  return (
    <>
      <section className={styles.CustomerLove}>
        <div className={styles.topSectionGrid}>
          <Images
            icon={gridimage}
            fallBackImage={gridimagefallback}
            alt="grid image"
          />
        </div>
        <div className={styles.design}>
          <p>Customer Love</p>
          <h2 ref={textRef}>
            Our customer brands see consistent return on design investment
          </h2>
        </div>

        <div>
          <div className={styles.customersDetails}>
            <div className={styles.customerDetailsIcon}>
              <Images
                icon={doubleQuoteWebp}
                fallBackImage={doubleQuotePng}
                alt="double quote"
              />
            </div>
            <div className={styles.customerThoughts}>
              <h3>{currentCustomer.quote}</h3>
            </div>
          </div>
          <div className={styles.aboutCustomer}>
            <div className={styles.customerImage}>
              <div className={styles.gradient} />
              <Images {...currentCustomer.image} />
            </div>
            <div className={styles.manContainer}>
              <span className={styles.customerName}>
                {currentCustomer.name}
              </span>
              <br />
              <span className={styles.customerDesignnation}>
                {currentCustomer.designation}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.paginationBar}>
          <div className={styles.horizontalLine} />
          <button
            className={styles.leftArrowBtn}
            onClick={() => handlePagination("prev")}
          >
            <Images
              className={styles.leftArrowImg}
              icon={leftArrowPng}
              fallBackImage={leftArrowPng}
              alt="Left Arrow"
            />
          </button>
          <button
            className={styles.rightArrow}
            onClick={() => handlePagination("next")}
          >
            <Images
              icon={rightArrowWebp}
              fallBackImage={rightArrowPng}
              alt="Right Arrow"
              className={styles.rightArrowImage}
            />
          </button>
        </div>
      </section>
    </>
  );
}

export default CustomerLove;
