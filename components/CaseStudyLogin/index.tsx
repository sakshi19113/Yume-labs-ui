import styles from "./styles.module.scss";
import Images from "../Images/index";
import mainimage from "../../public/images/webp/Group 8174.webp";
import fallbackmainimage from "../../public/images/webp/Group 8174.webp";
import girlimage from "../../public/images/webp/Rectangle 3974.webp";
import fallbackgirlimage from "../../public/images/png/Rectangle 3974.png";
import fourcardimage from "../../public/images/webp/Group 36842.webp";
import fallbackfourcardimage from "../../public/images/png/Group 36842.png";

const LoginPage = () => {
  return (
    <div className={styles.parentContainer}>
      <Images
        icon={mainimage}
        fallBackImage={fallbackmainimage}
        alt="laughing girl"
        className={styles.laughingGirlImage}
      />
      <div className={styles.girlStudingWithLaptop}>
        <div className={styles.studingGirlImage}>
          <Images
            icon={girlimage}
            fallBackImage={fallbackgirlimage}
            alt="girl study with laptop"
          />
        </div>
        <div className={styles.fourCard}>
          <Images
            icon={fourcardimage}
            fallBackImage={fallbackfourcardimage}
            alt="four card image"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
