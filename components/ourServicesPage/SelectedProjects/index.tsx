import styles from "./styles.module.scss";
import Images from "../../../components/Images";
import mobileImgWebp from "../../../public/images/webp/Group8174mob.webp";
import mobileImgPng from "../../../public/images/png/Group8174mob.png";
import mobileViewWebp from "../../../public/images/webp/Groups8174.webp";
import mobileViewPng from "../../../public/images/png/Groups8174.png";

function SelectedProjects() {
  return (
    <>
      <p className={styles.SelectedProjectsText}>Selected Projects</p>
      <section className={styles.selectedProjectsSection}>
        <div className={styles.selectedProjectsContainer}>
          <div>
            <Images
              icon={mobileImgWebp}
              fallBackImage={mobileImgPng}
              alt="Mobile Image"
              className={styles.desktopViewImage}
            />
            <Images
              icon={mobileViewWebp}
              fallBackImage={mobileViewPng}
              alt="Mobile Image"
              className={styles.mobileViewImage}
            />
            <div className={styles.simplicontractText}>
              <div className={styles.simplicontractUxUiText}>
                <p>#UX/UI</p>
                <p>#DEVELOPMENT</p>
              </div>
              <h4>Simplicontract</h4>
              <p className={styles.yumelabs}>
                Yumelabs is a global UI UX Design and Industrial Design agency
                that helps your business scale through fail-proof design
                innovation systems.
              </p>
            </div>
          </div>
        </div>
        <div
          className={styles.selectedProjectsContainer}
          id={styles.selectedProjectsImageMid}
        >
          <div>
            <Images
              icon={mobileImgWebp}
              fallBackImage={mobileImgPng}
              alt="Mobile Image"
              className={styles.desktopViewImage}
            />
            <Images
              icon={mobileViewWebp}
              fallBackImage={mobileViewPng}
              alt="Mobile Image"
              className={styles.mobileViewImage}
            />
            <div className={styles.simplicontractText}>
              <div className={styles.simplicontractUxUiText}>
                <p>#UX/UI</p>
                <p>#DEVELOPMENT</p>
              </div>
              <h4>Simplicontract</h4>
              <p className={styles.yumelabs}>
                Yumelabs is a global UI UX Design and Industrial Design agency
                that helps your business scale through fail-proof design
                innovation systems.
              </p>
            </div>
          </div>
        </div>
        <div
          className={styles.selectedProjectsContainer}
          id={styles.selectedProjectsImageLast}
        >
          <div>
            <Images
              icon={mobileImgWebp}
              fallBackImage={mobileImgPng}
              alt="Mobile Image"
              className={styles.desktopViewImage}
            />
            <Images
              icon={mobileViewWebp}
              fallBackImage={mobileViewPng}
              alt="Mobile Image"
              className={styles.mobileViewImage}
            />
            <div className={styles.simplicontractText}>
              <div className={styles.simplicontractUxUiText}>
                <p>#UX/UI</p>
                <p>#DEVELOPMENT</p>
              </div>
              <h4>Simplicontract</h4>
              <p className={styles.yumelabs}>
                Yumelabs is a global UI UX Design and Industrial Design agency
                that helps your business scale through fail-proof design
                innovation systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectedProjects;
