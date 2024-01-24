"use client";
import styles from "./styles.module.scss";
import Images from "../Images/index";
import rightArrowWebp from "../../public/images/webp/Icon material-arrow-forward.webp";
import rightArrowPng from "../../public/images/png/Icon ionic-md-arrow-down.png";

interface CustomButtonProps {
  mobileText: string;
  desktopText: string;
}

const ExplorePortfolio: React.FC<CustomButtonProps> = ({
  mobileText,
  desktopText,
}) => {
  return (
    <>
      <div className={styles.allOurServices}>
        <a href="/services" className={styles.allOurServicesButton}>
          <p className={styles.allOurServicesText}>{desktopText}</p>
          <p className={styles.explorePortfolioText}>{mobileText}</p>
          <button className={styles.playButtonAllOurServices}>
            <Images
              icon={rightArrowWebp}
              fallBackImage={rightArrowPng}
              alt="right-arrow"
            />
          </button>
        </a>
      </div>
    </>
  );
};

export default ExplorePortfolio;
