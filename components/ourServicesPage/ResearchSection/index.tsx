"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./styles.module.scss";
import Images from "../../../components/Images";
import arrowWebp from "../../../public/images/webp/downArrow.webp";
import arrowPng from "../../../public/images/png/Icon material-keyboard-arrow-down.svg";
import MobileImageWebp from "../../../public/images/webp/Groups8174.webp";
import MobileImagePng from "../../../public/images/png/Groups8174.png";
import AllOurServices from "@components/AllOurServicesBtn";
gsap.registerPlugin(ScrollTrigger);
function ResearchSection() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.researchSection}>
        <div className={styles.researchSectionLeft}>
          <h2>Research</h2>
          <p>
            Yumelabs is a global UI UX Design and Industrial Design agency that
            helps your business scale through fail-proof design innovation
            systems.
          </p>
        </div>
        <div className={styles.researchSectionRight}>
          <div className={styles.researchDropdown}>
            <h4>Qualitative Research</h4>
            <Images icon={arrowWebp} fallBackImage={arrowPng} alt="Arrow" />
          </div>
          <div className={styles.horizontalLine}>
            <hr />
          </div>
          <div className={styles.researchDropdown}>
            <h4>Heuristic Evaluation</h4>
            <Images icon={arrowWebp} fallBackImage={arrowPng} alt="Arrow" />
          </div>
          <div className={styles.horizontalLine}>
            <hr />
          </div>
          <div className={styles.researchDropdown}>
            <h4>Usability Testing</h4>
            <Images icon={arrowWebp} fallBackImage={arrowPng} alt="Arrow" />
          </div>
          <div className={styles.horizontalLine}>
            <hr />
          </div>
          <div className={styles.researchDropdown}>
            <h4>Quantitative Research</h4>
            <Images icon={arrowWebp} fallBackImage={arrowPng} alt="Arrow" />
          </div>
          <div className={styles.horizontalLine}>
            <hr />
          </div>
          <div className={styles.researchDropdown}>
            <h4>Competitor Analysis</h4>
            <Images icon={arrowWebp} fallBackImage={arrowPng} alt="Arrow" />
          </div>
          <div className={styles.horizontalLine}>
            <hr />
          </div>
          <div className={styles.researchDropdownMob}>
            <h4>Ethnographic Research</h4>
            <Images icon={arrowWebp} fallBackImage={arrowPng} alt="Arrow" />
          </div>
        </div>
      </section>

      <section className={styles.researchHeroSection}>
        <div className={styles.researchHeroSectionRight}>
          <Images
            icon={MobileImageWebp}
            fallBackImage={MobileImagePng}
            alt="Mobile Image"
          />
          <div className={styles.researchHeroImgContainer}>
            <a className={styles.researchHeroImgUi} href="ux/ui">
              # QUALITATIVE RESEARCH
            </a>
            <a className={styles.researchHeroImgDev} href="development">
              # DEVELOPMENT
            </a>
          </div>
          <div className={styles.simplicontractUxUiText}>
            <p>#UX/UI</p>
            <p>#DEVELOPMENT</p>
          </div>
          <h3 className={styles.researchHeroImgHead}>Simplicontract</h3>
          <p className={styles.researchHeroImgPara}>
            Yumelabs is a global UI UX Design and Industrial Design agency that
            helps your business scale through fail-proof design innovation
            systems.
          </p>
        </div>
        <div className={styles.researchHeroSectionRight}>
          <Images
            icon={MobileImageWebp}
            fallBackImage={MobileImagePng}
            alt="Mobile Image"
          />
          <div className={styles.researchHeroImgContainer}>
            <a className={styles.researchHeroImgUi} href="ux/ui">
              # QUALITATIVE RESEARCH
            </a>
            <a className={styles.researchHeroImgDev} href="development">
              # DEVELOPMENT
            </a>
          </div>
          <div className={styles.simplicontractUxUiText}>
            <p>#UX/UI</p>
            <p>#DEVELOPMENT</p>
          </div>
          <h3 className={styles.researchHeroImgHead}>Simplicontract</h3>
          <p className={styles.researchHeroImgPara}>
            Yumelabs is a global UI UX Design and Industrial Design agency that
            helps your business scale through fail-proof design innovation
            systems.
          </p>
        </div>
        <div className={styles.researchHeroSectionRight}>
          <Images
            icon={MobileImageWebp}
            fallBackImage={MobileImagePng}
            alt="Mobile Image"
          />
          <div className={styles.researchHeroImgContainer}>
            <a className={styles.researchHeroImgUi} href="ux/ui">
              # QUALITATIVE RESEARCH
            </a>
            <a className={styles.researchHeroImgDev} href="development">
              # DEVELOPMENT
            </a>
          </div>
          <div className={styles.simplicontractUxUiText}>
            <p>#UX/UI</p>
            <p>#DEVELOPMENT</p>
          </div>
          <h3 className={styles.researchHeroImgHead}>Simplicontract</h3>
          <p className={styles.researchHeroImgPara}>
            Yumelabs is a global UI UX Design and Industrial Design agency that
            helps your business scale through fail-proof design innovation
            systems.
          </p>
        </div>
        <div className={styles.researchHeroSectionRight}>
          <Images
            icon={MobileImageWebp}
            fallBackImage={MobileImagePng}
            alt="Mobile Image"
          />
          <div className={styles.researchHeroImgContainer}>
            <a className={styles.researchHeroImgUi} href="ux/ui">
              # QUALITATIVE RESEARCH
            </a>
            <a className={styles.researchHeroImgDev} href="development">
              # DEVELOPMENT
            </a>
          </div>
          <div className={styles.simplicontractUxUiText}>
            <p>#UX/UI</p>
            <p>#DEVELOPMENT</p>
          </div>
          <h3 className={styles.researchHeroImgHead}>Simplicontract</h3>
          <p className={styles.researchHeroImgPara}>
            Yumelabs is a global UI UX Design and Industrial Design agency that
            helps your business scale through fail-proof design innovation
            systems.
          </p>
        </div>
        <div className={styles.researchHeroSectionRight}>
          <Images
            icon={MobileImageWebp}
            fallBackImage={MobileImagePng}
            alt="Mobile Image"
          />
          <div className={styles.researchHeroImgContainer}>
            <a className={styles.researchHeroImgUi} href="ux/ui">
              # QUALITATIVE RESEARCH
            </a>
            <a className={styles.researchHeroImgDev} href="development">
              # DEVELOPMENT
            </a>
          </div>
          <div className={styles.simplicontractUxUiText}>
            <p>#UX/UI</p>
            <p>#DEVELOPMENT</p>
          </div>
          <h3 className={styles.researchHeroImgHead}>Simplicontract</h3>
          <p className={styles.researchHeroImgPara}>
            Yumelabs is a global UI UX Design and Industrial Design agency that
            helps your business scale through fail-proof design innovation
            systems.
          </p>
        </div>
      </section>
      <AllOurServices />
    </div>
  );
}

export default ResearchSection;
