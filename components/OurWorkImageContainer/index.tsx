import React, { useState } from "react";
import Images from "../Images/index";
import styles from "./styles.module.scss";
import tabletImageWebp from "../../public/images/webp/tabletImageWebp.webp";
import tabletImagePng from "../../public/images/png/Group 8174.png";
import mobileHandWebp from "../../public/images/webp/Group 8194.webp";
import mobileHandPng from "../../public/images/png/Group 8194.png";
// import expensesMobileAppPng from "../../public/images/png/ourWorkImg3.png";
// import windMillMobileAppPng from "../../public/images/png/ourWorkImg4.png";
import expensesMobileAppWebp from "../../public/images/webp/ourWorkImg3.webp";
import windMillMobileAppWebp from "../../public/images/webp/ourWorkImg4.webp";

const OurWorkSection = (props: any) => {
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

const LoadMore = () => {
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleLoadMoreClick = () => {
    setShowLoadMore(false);
  };

  return (
    <>
      <div className={styles.mobileViewHidden}>
        {showLoadMore && (
          <div className={styles.loadMoreButton}>
            <div
              className={styles.loadMoreButtonContainer}
              onClick={handleLoadMoreClick}
            >
              <span>LOAD MORE</span>
            </div>
          </div>
        )}

        {!showLoadMore && (
          <OurWorkSection
            id1={"pic3"}
            id2={"pic4"}
            left={expensesMobileAppWebp}
            right={windMillMobileAppWebp}
          />
        )}
      </div>
    </>
  );
};

const OurWorkImageContainer = () => {
  return (
    <section className={styles.ourWorkHeroContainer}>
      <OurWorkSection
        id1={"pic1"}
        id2={"pic2"}
        left={tabletImageWebp}
        right={mobileHandWebp}
      />

      <OurWorkSection
        id1={"pic3"}
        id2={"pic4"}
        left={expensesMobileAppWebp}
        right={windMillMobileAppWebp}
      />

      <OurWorkSection
        id1={"pic1"}
        id2={"pic2"}
        left={tabletImageWebp}
        right={mobileHandWebp}
      />
      <LoadMore />
      <div className={styles.mobileViewCards}>
        <OurWorkSection
          id1={"pic3"}
          id2={"pic4"}
          left={expensesMobileAppWebp}
          right={windMillMobileAppWebp}
        />
      </div>
    </section>
  );
};

export default OurWorkImageContainer;
