import headerLogoWebp from "../../public/images/webp/headerLogo.webp";
import headerLogoPng from "../../public/images/png/headerLogo.png";
import headerLogoTextWebp from "../../public/images/webp/headerLogoText.webp";
import headerLogoTextPng from "../../public/images/png/headerLogoText.png";
import Images from "../Images/index";

import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const { pathname } = useRouter();

  const [activeNav, setActiveNav] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveNav(pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.yumeLabsHeader}>
      <nav>
        <Link className={`${styles.yumeLabsLogo}`} href="/">
          <div>
            <Images
              icon={headerLogoWebp}
              fallBackImage={headerLogoPng}
              alt="yume labs header logo"
            />
          </div>
          <div>
            <Images
              icon={headerLogoTextWebp}
              fallBackImage={headerLogoTextPng}
              alt="yume labs header logo text"
            />
          </div>
        </Link>
        <div
          className={`${styles.hamburger} ${
            menuOpen ? `${styles.active}` : ""
          }`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${styles.yumeLabsNavItem} ${
            menuOpen ? `${styles.active}` : ""
          }`}
        >
          <div>
            <Link
              href="/ourWork"
              className={`${activeNav === "/ourWork" ? styles.activeLink : ""}`}
            >
              Work
            </Link>
          </div>
          <div>
            <Link
              href="/services"
              className={`${
                activeNav === "/services" ? styles.activeLink : ""
              }`}
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              href="/insights"
              className={`${
                activeNav === "/insights" ? styles.activeLink : ""
              }`}
            >
              Insights
            </Link>
          </div>
          <div>
            <Link
              href="/aboutUs"
              className={`${activeNav === "/aboutUs" ? styles.activeLink : ""}`}
            >
              About Us
            </Link>
          </div>
          {/* <div>
            <Link
              href="/labs"
              className={`${activeNav === "/labs" ? styles.activeLink : ""}`}
            >
              Labs
            </Link>
          </div> */}
          <div className={`${styles.contactUsButton}`}>
            <Link
              href="/contactUs"
              className={`${
                activeNav === "/contactUs" ? styles.activeLink : ""
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
