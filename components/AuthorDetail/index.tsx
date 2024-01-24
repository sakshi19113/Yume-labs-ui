import styles from "./styles.module.scss";
import React from "react";
import author from "../../public/images/webp/author.webp";
import authorp from "../../public/images/png/author.jpg";
import Image from "../Images/index";
import news from "../../public/images/png/Untitled-33.png";
import newsp from "../../public/images/webp/Untitled-33.webp";
import arrow from "../../public/images/png/rigthArrow.png";
import arrowr from "../../public/images/png/Icon material-arrow-forward (2).svg";
// import leftArrowPng from ;

const AuthorDetail = () => {
  return (
    <>
      <section className={styles.authorSection}>
        <div className={styles.horizontalLine}></div>
        <div className={styles.paginationBar}>
          <div className={styles.horizantalLine}></div>
        </div>
        <h2>Authors</h2>
        <div className={styles.authorCardContainer}>
          <div className={styles.authorCard}>
            <div className={styles.authorImageText}>
              <Image
                icon={author}
                fallBackImage={authorp}
                alt="author image"
                style={{ borderRadius: "50%" }}
              />

              <div className={styles.authorImageTextBox}>
                <h4>Abhinav Kr.</h4>
                <p className={styles.authorDesignation}>
                  Chief Technology Officer
                </p>
              </div>
            </div>
            <div className={styles.authorText}>
              <p>
                Pritam leads all things business at Yume Labs. He brings 10+
                years of experience in B2B Technology Sales, Corporate
                Development, Strategy, and Consulting in Life Sciences and
                Healthcare industries globally. He is an MBA from IIM Bangalore
                and B.E. in Electronics and Telecommunications from IIEST,
                Shibpur.
              </p>
            </div>
          </div>
          <div className={styles.authorCard}>
            <div className={styles.authorImageText}>
              <Image
                icon={author}
                fallBackImage={authorp}
                alt="author image"
                style={{ borderRadius: "50%" }}
              />
              <div className={styles.authorImageTextBox}>
                <h4>Abhinav Kr.</h4>
                <p>Chief Technology Officer</p>
              </div>
            </div>
            <div className={styles.authorText}>
              <p>
                Pritam leads all things business at Yume Labs. He brings 10+
                years of experience in B2B Technology Sales, Corporate
                Development, Strategy, and Consulting in Life Sciences and
                Healthcare industries globally. He is an MBA from IIM Bangalore
                and B.E. in Electronics and Telecommunications from IIEST,
                Shibpur.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.horizontalLine}></div>
        <h2 id={styles.mobileLineBreak}>Latest Articles</h2>
        <section className={styles.newsPictureContainer}>
          <div className={styles.newsImgContainer}>
            <div>
              <div className={styles.newsTechImg}>
                <Image
                  icon={news}
                  fallBackImage={newsp}
                  alt="article image 1"
                />
              </div>
              <div className={styles.newsImgContainerText}>
                <span>
                  <strong>/01 / News Technology / 03 March 2022</strong>
                </span>
                <p>
                  Great Place to Work 2022 Survey: Vincit is the best place to
                  work in Finland, again!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.newsImgContainer}>
            <div>
              <div className={styles.newsTechImg}>
                <Image
                  icon={news}
                  fallBackImage={newsp}
                  alt="article image 2"
                />
              </div>
              <div className={styles.newsImgContainerText}>
                <span>
                  <strong>/01 / News Technology / 03 March 2022</strong>
                </span>
                <p>
                  Great Place to Work 2022 Survey: Vincit is the best place to
                  work in Finland, again!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.newsImgContainer}>
            <div>
              <div className={styles.newsTechImg}>
                <Image
                  icon={news}
                  fallBackImage={newsp}
                  alt="article image 3"
                />
              </div>
              <div className={styles.newsImgContainerText}>
                <span>
                  <strong>/01 / News Technology / 03 March 2022</strong>
                </span>
                <p>
                  Great Place to Work 2022 Survey: Vincit is the best place to
                  work in Finland, again!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mobileCard}>
            <div className={styles.newsImgContainer}>
              <div>
                <div className={styles.newsTechImg}>
                  <Image
                    icon={news}
                    fallBackImage={newsp}
                    alt="article image 4"
                  />
                </div>
                <div className={styles.newsImgContainerText}>
                  <span>
                    <strong>/01 / News Technology / 03 March 2022</strong>
                  </span>
                  <p>
                    Great Place to Work 2022 Survey: Vincit is the best place to
                    work in Finland, again!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.newsImgContainer}>
              <div>
                <div className={styles.newsTechImg}>
                  <Image
                    icon={news}
                    fallBackImage={newsp}
                    alt="article image 5"
                  />
                </div>
                <div className={styles.newsImgContainerText}>
                  <span>
                    <strong>/01 / News Technology / 03 March 2022</strong>
                  </span>
                  <p>
                    Great Place to Work 2022 Survey: Vincit is the best place to
                    work in Finland, again!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.newsImgContainer}>
              <div>
                <div className={styles.newsTechImg}>
                  <Image
                    icon={news}
                    fallBackImage={newsp}
                    alt="article image 6"
                  />
                </div>
                <div className={styles.newsImgContainerText}>
                  <span>
                    <strong>/01 / News Technology / 03 March 2022</strong>
                  </span>
                  <p>
                    Great Place to Work 2022 Survey: Vincit is the best place to
                    work in Finland, again!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default AuthorDetail;
