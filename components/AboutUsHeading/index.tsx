import Images from "@components/Images";
import styles from "./styles.module.scss";
import aboutUs1Webp from "../../public/images/webp/aboutUs1.webp";
import aboutUs1Png from "../../public/images/png/aboutUs1.png";
import gridImage from "../../public/images/png/Group 36635.png";
import gridimagemobile from "../../public/images/webp/Group 36521.webp";
import gridimagemobilefallback from "../../public/images/png/Group 36521.png";

const AboutUsHeadingContainer = () => {
  return (
    <section className={styles.yumeLabsMainHeading}>
      <div className={styles.topSectionGrid}>
        <Images icon={gridImage} fallBackImage={gridImage} alt="grid image" />
      </div>
      <div className={styles.topSectionGridTwo}>
        <Images
          icon={gridimagemobile}
          fallBackImage={gridimagemobilefallback}
          alt="grid mobile image"
        />
      </div>
      <div className={styles.yumeLabsMainHeadingLeft}>
        <span>About Us</span>
        <span>Our Services</span>
        <h1>
          Stay ahead and stand apart with your extended innovation and design
          team.
        </h1>
        <h1>Feel at home among brave dreamers and curious rebels.</h1>
      </div>
      <div className={styles.yumeLabsMainHeadingRight}>
        <p>
          We are a small founder-led team passionate about co-creating a
          regenerative and sustainable future that delivers long-term prosperity
          to brands, users, and investors.
        </p>

        <p>
          High-potential global brands trust Yume Labs for better customer
          advocacy, stronger investor trust, and higher media love.
        </p>
      </div>
    </section>
  );
};

const AboutUsHeading = () => {
  return (
    <>
      <AboutUsHeadingContainer />
      <div className={styles.videoContainer}>
        <Images
          icon={aboutUs1Webp}
          fallBackImage={aboutUs1Png}
          alt="project discussion"
          // style={{ width: "100%", height: "80vh" }}
        />
      </div>
    </>
  );
};

export default AboutUsHeading;
