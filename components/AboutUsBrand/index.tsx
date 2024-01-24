import styles from "./styles.module.scss";
import Images from "../Images/index";
import aboutUs2 from "../../public/images/png/aboutUs2.png";
import aboutUs3Webp from "../../public/images/webp/aboutUs3.webp";
import aboutUs3Png from "../../public/images/png/aboutUs3.png";

interface OurValuesSectionProps {
  title: string;
  description: string;
}

const OurValuesSection: React.FC<OurValuesSectionProps> = (props) => {
  return (
    <div className={styles.ourValuesChild}>
      <Images icon={aboutUs2} alt="percentage symbol image" />
      <h6>{props.title}</h6>
      <p>{props.description}</p>
    </div>
  );
};

const AboutUsBrand = () => {
  return (
    <>
      <section className={styles.aboutContainer}>
        <h1>Give your brand the “Yume Labs Edge”</h1>
        <div className={styles.brandFlex}>
          <p>
            <span>We innovate </span> at the intersection of business, design,
            and engineering so your brand can deliver on its unique promise.
          </p>
          <p>
            <span>We invest </span> in continuous R&D to bring you the latest
            and the best in Product Innovation, UX/UI Design, and Industrial
            Design.
          </p>
          <p>
            <span>We proactively </span> manage delivery risk through a
            structured project management process to ensure you stay within time
            and budget.
          </p>
        </div>

        <div className={styles.ourValues}>
          <h3>Our Values</h3>
          <p className={styles.ourValuesSubHead}>
            Our values guide our choices and actions daily, built on the three
            pillars of:
          </p>
          <div className={styles.ourValuesFlexContainer}>
            <OurValuesSection
              title={"Excellence"}
              description={
                "Choose to go beyond “enough” to deliver at the edge of what’s “possible”."
              }
            />
            <OurValuesSection
              title={"Simplification"}
              description={
                "Embrace first-principles thinking to reduce non-essential complexity."
              }
            />
            <OurValuesSection
              title={"Co-creation"}
              description={
                "Create together through diligence, communication, and transparency."
              }
            />
          </div>
        </div>
      </section>
      <section>
        <Images
          icon={aboutUs3Webp}
          fallBackImage={aboutUs3Png}
          alt="discussion with all members image"
          className={styles.heroBrandImage}
        />
      </section>
    </>
  );
};

export default AboutUsBrand;
