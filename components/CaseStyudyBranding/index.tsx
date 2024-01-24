import styles from "./styles.module.scss";
import Images from "../../components/Images/index";
import colorPaletteWebp from "../../public/images/webp/color-palette.webp";
import colorPalettePng from "../../public/images/png/color-palette.png";
import colorPaletteMobWebp from "../../public/images/webp/colorpalette_mob.webp";
import colorPaletteMobPng from "../../public/images/png/colorpalette_mob.png";
import headingImgWebp from "../../public/images/webp/heading-img.webp";
import headingImgPng from "../../public/images/png/heading-img.png";

function Branding() {
  return (
    <div className={styles.brandingParentContainer}>
      <div className={styles.textContainer}>
        <p className={styles.brandingText}>Branding</p>
      </div>
      <div className={styles.tepographyAndColorContainer}>
        <h2 className={styles.tepographyText}>Typography & Color</h2>
        <p className={styles.tepographyTextDiscription}>
          The color palette artfully blends shades of blue, violet, and green,
          evoking a harmonious and visually engaging experience. This palette
          conveys a sense of trustworthiness, innovation, and tranquility.
          Moving to typography, the deliberate selection of Work Sans lends a
          balanced and sophisticated touch to the design.
        </p>
      </div>
      <div className={styles.colorCardContainer}>
        <div className={styles.cardCombiner}>
          <Images
            icon={colorPaletteWebp}
            fallBackImage={colorPalettePng}
            alt="hero image for homepage"
            className={styles.colorPalette}
          />
          <Images
            icon={colorPaletteMobWebp}
            fallBackImage={colorPaletteMobPng}
            alt="hero image for homepage"
            className={styles.colorPaletteMob}
          />

          <div className={styles.allThreeText}>
            <Images
              icon={headingImgWebp}
              fallBackImage={headingImgPng}
              alt="hero image for homepage"
              className={styles.allThreeTextImg}
            />
            <div className={styles.leftText}>
              <h1>Aa</h1>
              <p>Work Sans</p>
            </div>

            <div className={styles.rightText}>
              <div className={styles.fristHeadingContainer}>
                <div className={styles.paragraphContainer}>
                  <p>60 pt</p>
                  <p>Work Sans Bold</p>
                </div>
                <h1>Heading 1</h1>
              </div>
              <div className={styles.secondHeadingContainer}>
                <div className={styles.paragraphContainer}>
                  <p>42 pt</p>
                  <p>Work Sans Regular</p>
                </div>
                <h2>Heading 2</h2>
              </div>
              <div className={styles.thirdHeadingContainer}>
                <div className={styles.paragraphContainer}>
                  <p>36 pt</p>
                  <p>Work Sans Bold</p>
                </div>
                <h3>Heading 3</h3>
              </div>
              <div className={styles.fourthHeadingContainer}>
                <div className={styles.paragraphContainer}>
                  <p>21 pt</p>
                  <p>Work Sans Regular</p>
                </div>
                <h4>Heading 4</h4>
              </div>
              <div className={styles.fifthHeadingContainer}>
                <div className={styles.paragraphContainer}>
                  <p>14 pt</p>
                  <p>Work Sans Regular</p>
                </div>
                <h5 className={styles.loremText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  iure in illo fugiat, est inventore quibusdam ex debitis nemo
                  deserunt a exercitationem neque similique. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Iusto, aut?
                </h5>
              </div>
            </div>
          </div>
          <p className={styles.evolutionText}>
            During the design evolution, a concerted effort was made to
            synchronize all design elements with the carefully chosen color
            palette. This cohesion was extended to the realm of illustration,
            where a minimalist approach was adopted. Solid colors were employed,
            resulting in clean and straightforward illustrations that
            effortlessly blend with the overall aesthetic.
            <span>
              These uncomplicated visuals not only maintain a visual consistency
              but also facilitate clear communication of complex concepts,
              aligning with the goal of simplicity in the face of extensive
              data. Furthermore, the decision to integrate standard Google
              Material icons for the iconography amplifies user familiarity and
              ease of understanding. The overarching aim of keeping elements
              simple aligns seamlessly with the complex nature of data analysis.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Branding;
