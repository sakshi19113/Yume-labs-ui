"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Images from "../Images/index";
import gridimage from "../../public/images/png/bgGrid.png";
import gridimagefallback from "../../public/images/webp/bgGrid.webp";
import newsTechWebp from "../../public/images/webp/untitled33.webp";
import newsTechPng from "../../public/images/png/Untitled-33.png";
import AllOurServices from "@components/AllOurServicesBtn";

gsap.registerPlugin(ScrollTrigger);

function ArtOfPossible() {
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

  useEffect(() => {
    const newsCardAnimation = ["newsCard1", "newsCard2", "newsCard3"];

    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      newsCardAnimation.forEach((newscard, index) => {
        const element = document.getElementById(newscard);
        gsap.set(element, { y: `${(index + 1) * 150}px` });

        ScrollTrigger.create({
          trigger: element,
          once: true,
          start: "top 80%",
          onEnter: () => {
            gsap.to(element, {
              y: 0,
              duration: 2,
              ease: "power2.out",
            });
          },
        });
      });
    }
  }, []);

  return (
    <>
      <section className={styles.artOfPossibleSection}>
        <div className={styles.topSectionGrid}>
          <Images
            icon={gridimage}
            fallBackImage={gridimagefallback}
            alt="grid image"
          />
        </div>
        <div className={styles.artOfPossibleBgGrid}>
          <p className={styles.artOfPossibleParagraph}>
            The Art of the Possible
          </p>
          <h2 ref={textRef}>
            Learn from our time in the trenches innovating for user advocacy.
          </h2>
        </div>
        <section className={styles.heroInsightsContainer}>
          <div className={styles.heroInsightsBgImage}>
            <div className={styles.heroImageText}>
              <h6>/01 / News Technology / 03 March 2022</h6>
              <p>
                Great Place to Work 2022 Survey: Vincit is the best place to
                work in Finland, again!
              </p>
            </div>
          </div>
        </section>
        <div className={styles.newsImgContainer}>
          <div id="newsCard1" className={styles.newsTechImg}>
            <Images
              icon={newsTechWebp}
              fallBackImage={newsTechPng}
              alt="news Tech image"
            />
            <div className={styles.newsImgContainerText}>
              <span>
                <strong>
                  /01 / News Technology / 03 March{" "}
                  <span className={styles.removeText}>2022</span>
                </strong>
              </span>
              <p>
                Great Place to Work 2022 Survey:{" "}
                <br className={styles.removeBr} />
                Vincit is the best place to work in Finland, again!
              </p>
            </div>
          </div>
          <div id="newsCard2" className={styles.newsTechImg}>
            <Images
              icon={newsTechWebp}
              fallBackImage={newsTechPng}
              alt="news Tech image"
            />
            <div className={styles.newsImgContainerText}>
              <span>
                <strong>
                  /01 / News Technology / 03 March{" "}
                  <span className={styles.removeText}>2022</span>
                </strong>
              </span>
              <p>
                Great Place to Work 2022 Survey:{" "}
                <br className={styles.removeBr} />
                Vincit is the best place to work in Finland, again!
              </p>
            </div>
          </div>
          <div id="newsCard3" className={styles.newsTechImg}>
            <Images
              icon={newsTechWebp}
              fallBackImage={newsTechPng}
              alt="news Tech image"
            />
            <div className={styles.newsImgContainerText}>
              <span>
                <strong>
                  /01 / News Technology / 03 March{" "}
                  <span className={styles.removeText}>2022</span>
                </strong>
              </span>
              <p>
                Great Place to Work 2022 Survey:{" "}
                <br className={styles.removeBr} />
                Vincit is the best place to work in Finland, again!
              </p>
            </div>
          </div>
          <div id="newsCard3" className={styles.newsTechImgMobile}>
            <Images
              icon={newsTechWebp}
              fallBackImage={newsTechPng}
              alt="news Tech image"
            />
            <div className={styles.newsImgContainerText}>
              <span>
                <strong>
                  /01 / News Technology / 03 March{" "}
                  <span className={styles.removeText}>2022</span>
                </strong>
              </span>
              <p>
                Great Place to Work 2022 Survey:{" "}
                <br className={styles.removeBr} />
                Vincit is the best place to work in Finland, again!
              </p>
            </div>
          </div>
          <div id="newsCard3" className={styles.newsTechImgMobile}>
            <Images
              icon={newsTechWebp}
              fallBackImage={newsTechPng}
              alt="news Tech image"
            />
            <div className={styles.newsImgContainerText}>
              <span>
                <strong>
                  /01 / News Technology / 03 March{" "}
                  <span className={styles.removeText}>2022</span>
                </strong>
              </span>
              <p>
                Great Place to Work 2022 Survey:{" "}
                <br className={styles.removeBr} />
                Vincit is the best place to work in Finland, again!
              </p>
            </div>
          </div>
          <div id="newsCard3" className={styles.newsTechImgMobile}>
            <Images
              icon={newsTechWebp}
              fallBackImage={newsTechPng}
              alt="news Tech image"
            />
            <div className={styles.newsImgContainerText}>
              <span>
                <strong>
                  /01 / News Technology / 03 March{" "}
                  <span className={styles.removeText}>2022</span>
                </strong>
              </span>
              <p>
                Great Place to Work 2022 Survey:{" "}
                <br className={styles.removeBr} />
                Vincit is the best place to work in Finland, again!
              </p>
            </div>
          </div>
          <div id="newsCard3" className={styles.newsTechImgMobile}>
            <Images
              icon={newsTechWebp}
              fallBackImage={newsTechPng}
              alt="news Tech image"
            />
            <div className={styles.newsImgContainerText}>
              <span>
                <strong>
                  /01 / News Technology / 03 March{" "}
                  <span className={styles.removeText}>2022</span>
                </strong>
              </span>
              <p>
                Great Place to Work 2022 Survey:{" "}
                <br className={styles.removeBr} />
                Vincit is the best place to work in Finland, again!
              </p>
            </div>
          </div>
        </div>
        <AllOurServices />
      </section>
    </>
  );
}

export default ArtOfPossible;
