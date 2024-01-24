import styles from "./styles.module.scss";
import Images from "../Images/index";
import leftArrowWebp from "../../public/images/webp/component.webp";
import leftArrowPng from "../../public/images/png/Icon material-arrow-forward (2).svg";
import rightArrowWebp from "../../public/images/webp/arrow-forward-web.webp";
import rightArrowPng from "../../public/images/png/Icon material-arrow-forward.png";

function Pagination() {
  return (
    <div className={styles.paginationBar}>
      <div className={styles.horizontalLine} />
      <button className={styles.leftArrowBtn}>
        <Images
          className={styles.leftArrowImg}
          icon={leftArrowPng}
          fallBackImage={leftArrowPng}
          alt="Left Arrow"
        />
      </button>
      <button className={styles.rightArrow}>
        <Images
          icon={rightArrowWebp}
          fallBackImage={rightArrowPng}
          alt="Right Arrow"
          className={styles.rightArrowImage}
        />
      </button>
    </div>
  );
}

export default Pagination;
