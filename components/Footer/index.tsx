import Link from "next/link";
import Images from "../Images/index";
import footerLogo from "../../public/images/png/logo.png";
import instaLogo from "../../public/images/png/Icon feather-instagram.png";
import instaLogoWebp from "../../public/images/webp/Icon feather-instagram.webp";
import linkedinLogo from "../../public/images/png/Icon awesome-linkedin.png";
import linkedInLogoWebp from "../../public/images/webp/Icon awesome-linkedin.webp";
import twitterLogo from "../../public/images/png/Icon awesome-twitter.png";
import twitterLogoWebp from "../../public/images/webp/Icon awesome-twitter.webp";
import rightArrowWebp from "../../public/images/webp/Icon material-arrow-forward.webp";
import rightArrowPng from "../../public/images/png/Icon ionic-md-arrow-down.png";
import styles from "./styles.module.scss";
import footerLogoWebp from "../../public/images/webp/headerLogo.webp";
import footerLogoTextWebp from "../../public/images/webp/headerLogoText.webp";
import gridImage from "../../public/images/png/Group 36635.png";
import gridImageMobile from "../../public/images/png/Group 36666.svg";
import ExplorePortfolio from "@components/ExplorePortfolio";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerGridBg}>
        <div className={styles.topSectionGrid}>
          <Images icon={gridImage} fallBackImage={gridImage} alt="grid image" />
        </div>
        <div className={styles.footerMobileGrid}>
          <Images
            icon={gridImageMobile}
            fallBackImage={gridImageMobile}
            alt="grid mobile image"
          />
        </div>
        <div className={styles.getInTouchLeft}>
          <p>Have a dream for a better world?</p>
          <h3>Let us make it real.</h3>
        </div>
        <div className={styles.getInTouchRight}>
          <ExplorePortfolio
            mobileText="ALL OUR SERVICES"
            desktopText="GET IN TOUCH"
          />
        </div>
      </div>

      <div className={styles.middleFooter}>
        <div className={styles.footerNav}>
          <Link href="/ourWork">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/aboutUs">About Us</Link>
          <Link href="/labs">Labs</Link>
          <Link href="/contactUs">Contact Us</Link>
        </div>
        <div className={styles.footerAddress}>
          <div>
            <span className={styles.writeToUs}>WRITE TO US</span>
            <Link
              href="mailto:hello@yumelabs.com"
              className={styles.writeToUsEmail}
            >
              hello@yumelabs.com
            </Link>
          </div>
          <div>
            <span className={styles.address}>ADDRESS</span>
            <span className={styles.writeToUsAddress}>
              4th Floor, Qubical Coworking Space, Kormanagala Bangalore - 560033
              Karnataka, India <br />
              <br />
              +91 9562332441
            </span>
          </div>
        </div>
        <div className={styles.footerLogo}>
          <Link href="https://www.instagram.com/">
            <Images
              icon={instaLogoWebp}
              fallBackImage={instaLogo}
              alt="instagram logo"
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
          <Link href="https://in.linkedin.com/">
            <Images
              icon={linkedInLogoWebp}
              fallBackImage={linkedinLogo}
              alt="linkedin logo"
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
          <Link href="https://twitter.com">
            <Images
              icon={twitterLogoWebp}
              fallBackImage={twitterLogo}
              alt="twitter logo"
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <div className={styles.footerImg}>
          <Images
            icon={footerLogo}
            alt="footer logo"
            className={styles.webView}
          />
          <Images
            icon={footerLogoWebp}
            alt="footer logo image"
            className={styles.mobileView}
            style={{ width: "auto" }}
          />
          <Images
            icon={footerLogoTextWebp}
            fallBackImage={footerLogo}
            alt="footer logo text image"
            className={styles.mobileView}
          />
        </div>
        <div className={styles.footerTerms}>
          <Link href="/">
            <span>Privacy Policy</span>
          </Link>
          <Link href="/">
            <span>Terms of Use</span>
          </Link>
          <Link href="/" className={styles.copyright}>
            <span>Copyright Yume Labs</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
