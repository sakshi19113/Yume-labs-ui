import Images from "../Images/index";
import styles from "./styles.module.scss";
import doubleQuotesPng from "../../public/images/png/Icon open-double-quote-sans-left.png";
import doubleQuoteswebp from "../../public/images/webp/Icon open-double-quote-sans-left.webp";
import manImage from "../../public/images/png/Ellipse 12.png";
import gradientImage from "../../public/images/png/Ellipse 11.png";
import arrowIcon from "../../public/images/png/Icon material-arrow-forward.png";
import leftArrowIcon from "../../public/images/png/Icon material-arrow-forward (2).svg";
import manImageWebp from "../../public/images/webp/Ellipse 12.webp";
import gradientImageWebp from "../../public/images/webp/Ellipse 11.webp";
import arrowIconWebp from "../../public/images/webp/Icon material-arrow-forward.webp";
import leftArrowIconWebp from "../../public/images/webp/Icon material-arrow-forward (2).webp";

import { FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  terms: boolean;
}

const ContactForm: React.FC = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = {
      name: (e.target as any).name.value,
      phone: (e.target as any).phone.value,
      email: (e.target as any).email.value,
      message: (e.target as any).message.value,
      terms: (e.target as any).terms.checked,
    };
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <input type="text" id="name" name="name" required placeholder="*Name" />

      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{10}"
        placeholder="*Phone Number"
        required
      />

      <input
        type="email"
        id="email"
        name="email"
        placeholder="*Email"
        required
      />

      <textarea
        id="message"
        name="message"
        rows={10}
        placeholder="*Message"
        required
      ></textarea>

      <label className={styles.termsCheckbox}>
        <input
          type="checkbox"
          name="terms"
          className={styles.termsInput}
          required
        />
        I agree to frog collecting and processing my personal data to allow me
        to receive information on frog services.
      </label>
      <div className={styles.submitButtonContainer}>
        <button type="submit" className={styles.submitButton}>
          <span className={styles.inactive}>Submit</span>
          <span className={styles.active}>Submit</span>
        </button>
      </div>
    </form>
  );
};

const ContactUsBody = () => {
  return (
    <>
      <section className={styles.contactUsBody}>
        <div>
          <div className={styles.customersDetails}>
            <div className={styles.customerDetailsIcon}>
              <Images
                icon={doubleQuoteswebp}
                fallBackImage={doubleQuotesPng}
                alt="double quote"
              />
            </div>
            <div className={styles.customerThoughts}>
              <h3>
                “ Yume Labs is a global UI UX Design and Industrial Design
                agency that helps your business scale through fail-proof design
                innovation systems. “
              </h3>
            </div>
          </div>

          <div className={styles.aboutCustomer}>
            <Images
              className={styles.gradient}
              icon={gradientImageWebp}
              fallBackImage={gradientImage}
              alt="gradient image"
            />
            <div className={styles.customerImage}>
              <Images
                className={styles.manImage}
                icon={manImageWebp}
                fallBackImage={manImage}
                alt="man images"
              />
            </div>
            <div>
              <span className={styles.customerName}>Mrs. Regina Christy</span>{" "}
              <br />
              <span className={styles.customerDesignnation}>
                Chief Digital Officer Approlabs
              </span>
            </div>
          </div>

          <div className={styles.paginationBar}>
            <div className={styles.horizontalLine}></div>
            <button className={styles.leftArrow}>
              <Images
                icon={leftArrowIcon}
                fallBackImage={leftArrowIconWebp}
                alt="left arrow"
              />
            </button>
            <button className={styles.rightArrow}>
              <Images
                icon={arrowIconWebp}
                fallBackImage={arrowIcon}
                alt="right arrow"
              />
            </button>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactUsBody;
