import styles from "./styles.module.scss";
import Images from "@components/Images";
import doubleQuoteWebp from "../../../public/images/webp/doubleQuote.webp";
import doubleQuotePng from "../../../public/images/png/Icon open-double-quote-sans-left.png";
import manImageWebp from "../../../public/images/webp/man.webp";
import manImagePng from "../../../public/images/png/man.jpeg";

function CustomerContainer() {
  return (
    <div className={styles.customerContainer}>
      <div className={styles.customersDetailsContainer}>
        <div className={styles.customersDetails}>
          <div className={styles.customerDetailsIcon}>
            <Images
              icon={doubleQuoteWebp}
              fallBackImage={doubleQuotePng}
              alt="double quote"
            />
          </div>
          <div className={styles.customerThoughts}>
            <h3>
              “ Yume Labs is a global UI UX Design and Industrial Design agency
              that helps your business scale through fail-proof design
            </h3>
          </div>
        </div>
        <div className={styles.aboutCustomer}>
          <div className={styles.customerImage}>
            <div className={styles.gradient} />
            <Images
              className={styles.manImage}
              icon={manImageWebp}
              fallBackImage={manImagePng}
              alt="Man Image"
            />
          </div>
          <div className={styles.customerId}>
            <span id={styles.customerName}>Mrs. Regina Christy</span> <br />
            <span id={styles.customerDesignnation}>
              Chief Digital Officer Approlabs
            </span>
          </div>
        </div>
      </div>
      <div className={styles.customersDetailsSideTextContainer}>
        <p>
          Scale Your Brand through: <br /> Deeper Insight - Qualitative user
          insights validated by quantitative studies that surface hidden market
          gaps for your next big opportunity. <br /> Pioneering Innovation -
          First-to-market features with strong business cases for maintaining
          your edge over the competition consistently. <br /> Compelling Design
          - True-to-brand aesthetics and applied behavioural science that
          delivers industry-leading differentiation.
        </p>
      </div>
    </div>
  );
}

export default CustomerContainer;
