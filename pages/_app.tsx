import type { AppProps } from "next/app";

import ErrorBoundary from "@components/ErrorBoundary";
import arrow from "@public/images/png/scrollArrow.png";
import "../styles/index.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import BackgroundGradient from "@components/BackgroundGradientMouse";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const pathname = usePathname();

  let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);
    scrollProgress!.style.background = `conic-gradient(rgba(236, 205, 220) ${scrollValue}%, #fff ${scrollValue}%)`;
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollPercentage);
    window.addEventListener("load", scrollPercentage);

    return () => {
      window.removeEventListener("scroll", scrollPercentage);
      window.removeEventListener("load", scrollPercentage);
    };
  }, []);

  return (
    <ErrorBoundary>
      <Header />
      <BackgroundGradient />
      <div
        id="progress"
        style={{
          height: "70px",
          width: "70px",
          borderRadius: "50%",
          position: "fixed",
          bottom: "25px",
          right: "25px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          display: "grid",
          placeItems: "center",
          zIndex: "100000000000"
        }}
      >
        <span
          style={{
            height: "calc(100% - 20px)",
            width: "calc(100% - 20px)",
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          <Image src={arrow} height={30} alt="scrollArrow" />
        </span>
      </div>
      <Component {...pageProps} />
      {pathname === "/labs" ? "" : <Footer />}
    </ErrorBoundary>
  );
};

export default MyApp;
