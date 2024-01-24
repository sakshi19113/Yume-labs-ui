import Images from "@components/Images";
import styles from "./styles.module.scss";
import abhinavKumarWebp from "../../public/images/webp/abhinavKumar.webp";
import abhinavKumarPng from "../../public/images/png/abhinavKumar.png";
import linkedinLogo from "../../public/images/png/linkedinAbout.svg";
import aboutUs5Webp from "../../public/images/webp/aboutUs5.webp";
import aboutUs4Webp from "../../public/images/webp/aboutUs4.webp";
import aboutUs6Webp from "../../public/images/webp/aboutUs6.webp";
import aboutUs7Webp from "../../public/images/webp/aboutUs7.webp";
import aboutUs5Png from "../../public/images/png/aboutUs5.png";
import aboutUs4Png from "../../public/images/png/aboutUs4.png";
import aboutUs6Png from "../../public/images/png/aboutUs6.png";
import aboutUs7Png from "../../public/images/png/aboutUs7.png";
import Link from "next/link";

const FounderSection = (props: any) => {
  return (
    <div className={styles.founderSection}>
      <div className={styles.founderImg}>
        <p>{props.hoverText}</p>
        <Images
          icon={abhinavKumarWebp}
          fallBackImage={abhinavKumarPng}
          alt="founder image"
          className={styles.founderImage}
        />
        <Link href="https://www.linkedin.com/feed/">
          <Images icon={linkedinLogo} alt="linkedin logo image" />
        </Link>
      </div>
      <div className={styles.founderInfo}>
        <h5>{props.founderName}</h5>
        <p>{props.post}</p>
      </div>
    </div>
  );
};

const PartnerSection = () => {
  return (
    <div className={styles.partnerSection}>
      <div
        style={{ width: "100%", height: "280px", backgroundColor: "#F5F5F5" }}
      ></div>
      <div className={styles.founderInfo}>
        <h5>Approlabs</h5>
        <p style={{ maxWidth: "240px" }}>
          Our values guide our choices and actions daily, built on the three
          pillars of:
        </p>
      </div>
    </div>
  );
};

const AboutUsFounder = () => {
  return (
    <section className={styles.aboutcontainer}>
      <h3 className={styles.founderTextDesktop}>Founders at Yume Labs</h3>
      <h3 className={styles.founderTextMobile}>People at Yume Labs</h3>
      <div className={styles.founderContainer}>
        <FounderSection
          hoverText="Abhinav leads Experience and Interaction Design for our clients. He is a serial technology entrepreneur (ex-IndieBio and Google Accelerator cohorts) and a published researcher and subject matter expert in Computational Neuroscience and Brain-Machine Interfaces. He is an M.Des (Interaction Design) from IDC - IIT Bombay and B.Tech in Mechanical Engineering from IIIT DM, Jabalpur."
          founderName={"Abhinav Kr."}
          post={"Chief Technology Officer"}
        />
        <FounderSection
          hoverText="Nabarun leads Industrial and Marketing Design for our clients. He has worked extensively with Exploration & Innovation teams in large
          Corporates in the Appliances and Healthcare domains globally and has
          multiple patents and awards to his name. He is an M.Des (Industrial
          Design) from IDC - IIT Bombay and B.E. in Electronics and
          Telecommunications from IIEST, Shibpur."
          founderName={"Nabarun Bhowmick"}
          post={"Chief Executive Officer"}
        />
        <FounderSection
          hoverText="Pritam leads Marketing and Go-to-Market with a consultative approach to the business aspects of Experience Design. He brings extensive experience in B2B Technology Sales & Marketing, Corporate Development, Strategy, and Consulting in multiple industries globally. He is an MBA from IIM Bangalore and B.E. in Electronics and Telecommunications from IIEST, Shibpur."
          founderName={"Pritam Saha"}
          post={"Chief Executive Officer"}
        />
      </div>
    </section>
  );
};

const AboutUsPartner = () => {
  return (
    <section className={styles.aboutcontainer}>
      <h3 className={styles.partnerTextDesktop}>Partners at Yume Labs</h3>
      <div className={styles.partnerContainer}>
        <PartnerSection />
        <PartnerSection />
        <PartnerSection />
      </div>
    </section>
  );
};

const AboutUsMeetImgContainer = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.topImg}>
        <div>
          <Images
            icon={aboutUs5Webp}
            fallBackImage={aboutUs5Png}
            alt="text cards in hands 1"
          />
        </div>
        <div>
          <Images
            icon={aboutUs4Webp}
            fallBackImage={aboutUs4Png}
            alt="meeting in progess image 2"
          />
        </div>
      </div>
      <div className={styles.bottomImg}>
        <div>
          <Images
            icon={aboutUs6Webp}
            fallBackImage={aboutUs6Png}
            alt="meeting in progress 3"
          />
        </div>
        <div>
          <Images
            icon={aboutUs7Webp}
            fallBackImage={aboutUs7Png}
            alt="meeting in progress 4"
          />
        </div>
      </div>
    </div>
  );
};

const AboutUsFounderAndPartner = () => {
  return (
    <>
      <AboutUsFounder />
      <AboutUsPartner />
      <AboutUsMeetImgContainer />
    </>
  );
};

export default AboutUsFounderAndPartner;
