import styles from "./styles.module.scss";
import Images from "../Images/index";
import image from "../../public/images/webp/Rectangle 3952.webp";
import fallbackimage from "../../public/images/png/Rectangle 3952.png";
import laptopimage from "../../public/images/webp/Screenshot 2023-12-15 at 3.56.26 PM.webp";
import mobile__Image from "../../public/images/png/Rectangle 3980.png";
import Radial__Background from "../../public/images/png/Group 36553.svg";

function ProblemStatementSection() {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.parent}>
        <Images
          icon={image}
          fallBackImage={fallbackimage}
          alt="a personn working with laptop"
          className={styles.personWithLaptop}
        />
        <div className={styles.combiner}>
          <div className={styles.problemStatementText}>
            <h3>Problem Statement</h3>
            <p>
              Developing a software solution that streamlines the content
              analysis process for businesses, enabling accelerated innovation
              and iterative content refinement. The challenge lies in creating a
              platform that effectively utilizes AI to swiftly analyze and
              interpret content, allowing companies to gain valuable insights
              and thereby enhancing the content creation and iteration workflow.
            </p>
          </div>
          <div className={styles.projectScopeText}>
            <h3>Project Scope</h3>
            <p>
              By harnessing advanced AI algorithms, this software ensures
              impartial and efficient evaluation of content, eliminating human
              biases from the analysis process. A User-friendly interface will
              facilitate seamless navigation, simplifying complex workflows and
              making insights easily accessible. As a result, the software will
              empower businesses to create content that resonates more
              effectively with their target audience, ultimately driving higher
              engagement and growth.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.stratagyAndPlan}>
        <Images
          icon={laptopimage}
          fallBackImage={fallbackimage}
          alt="A laptop showing stratagy"
          className={styles.showingStratagyLaptop}
        />
        <div className={styles.stratagyAndPlanTextAndDiscription}>
          <h2 className={styles.stratagyAndPlanText}>
            Strategy & Implementing Design solutions.
          </h2>
          <p className={styles.discription}>
            The core AI feature will be meticulously honed to provide accurate
            and unbiased content analysis, allowing businesses to gain valuable
            insights into consumer preferences. In parallel, an array of
            user-centric enhancements will be integrated, including effective
            filtration options for streamlined data analysis. A consolidated
            section will be devised to simplify user interaction and exploration
            of the software's various features, fostering an intuitive and
            seamless experience.
            <span>
              Additionally, fostering collaboration with clients, a feature to
              share campaign test links with client contact lists will be
              introduced. Quality assurance will be upheld through an
              intervention module that prompts users to maintain optimal
              recording conditions. Ensuring data integrity, a facial
              recognition solution will be integrated to authenticate unique
              test sessions, bolstering analysis accuracy and credibility.
            </span>
            Throughout these design implementations, utmost attention will be
            given to privacy, security, and scalability considerations. By
            continually refining AI models and enhancing the user interface
            based on user feedback and performance data, the platform will
            maintain its commitment to delivering actionable insights while
            upholding ethical standards.
          </p>
        </div>
      </div>

      <div className={styles.productDesign__yumeLabs__images}>
        <div className={styles.productDesign__yumeLabs__imagesTop}>
          <div className={styles.productDesign__yumeLabs__imagesTopL}>
            <Images icon={mobile__Image} alt="Mobile Image" />
          </div>
          <div className={styles.productDesign__yumeLabs__imagesTopR}>
            <Images icon={mobile__Image} alt="Mobile Image" />
          </div>
        </div>
        <div className={styles.productDesign__yumeLabs__imagesBottom}>
          <Images
            icon={Radial__Background}
            alt="Radial Background image"
            className={styles.Radial__Background}
          />
          <div className={styles.insideRadial__Background}></div>
          <div className={styles.insideRadial__BackgroundTwo}></div>
        </div>
      </div>
    </div>
  );
}

export default ProblemStatementSection;
