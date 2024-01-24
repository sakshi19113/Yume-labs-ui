// Dependencies
import React, { useEffect } from "react";
import { gsap } from "gsap";

// Styles
import styles from "./styles.module.scss";

const BackgroundGradient = () => {
    useEffect(() => {
        gsap.set(".ball", {});
        let targets = gsap.utils.toArray(".ball");
        window.addEventListener("mousemove", (e) => {
            gsap.to(targets, {
                duration: 0.5,
                x: e.clientX - 200,
                y: e.clientY - 200,
                ease: "power1.out",
                overwrite: "auto",
                stagger: 0.04,
            });
        });
    }, []);

    return (
        <div>
            <div className="ball" style={{
                position: "fixed", top: 0, left: 0, width: "400px", height: "400px", borderRadius: "50%", zIndex: -1, background: `linear-gradient(90deg,
            rgba(214,202,255,1) 0%, rgba(204,209,245,1) 40%, rgba(230,200,230,1) 60%)`, filter: "blur(20px)"
            }}></div>
            <div className="ball" style={{
                position: "fixed", top: 0, left: 0, width: "400px", height: "400px", borderRadius: "50%", zIndex: -1, background: `linear-gradient(90deg,
            rgba(214,202,255,1) 0%, rgba(204,209,245,1) 15%, rgba(230,200,230,1) 60%)`, filter: "blur(20px)"
            }}></div>
            <div className="ball" style={{
                position: "fixed", top: 0, left: 0, width: "400px", height: "400px", borderRadius: "50%", zIndex: -1, background: `linear-gradient(90deg,
            rgba(214,202,255,1) 0%, rgba(204,209,245,1) 15%, rgba(230,200,230,1) 60%)`, filter: "blur(20px)"
            }}></div>
            <div className="ball" style={{
                position: "fixed", top: 0, left: 0, width: "400px", height: "400px", borderRadius: "50%", zIndex: -1, background: `linear-gradient(90deg,
            rgba(214,202,255,1) 0%, rgba(204,209,245,1) 15%, rgba(230,200,230,1) 60%)`, filter: "blur(20px)"
            }}></div>
            <div className="ball" style={{
                position: "fixed", top: 0, left: 0, width: "400px", height: "400px", borderRadius: "50%", zIndex: -1, background: `linear-gradient(90deg,
            rgba(214,202,255,1) 0%, rgba(204,209,245,1) 15%, rgba(230,200,230,1) 60%)`, filter: "blur(20px)"
            }}></div>
            <div className="ball" style={{
                position: "fixed", top: 0, left: 0, width: "400px", height: "400px", borderRadius: "50%", zIndex: -1, background: `linear-gradient(90deg,
            rgba(214,202,255,1) 0%, rgba(204,209,245,1) 15%, rgba(230,200,230,1) 60%)`, filter: "blur(20px)"
            }}></div>
            <div className="ball" style={{
                position: "fixed", top: 0, left: 0, width: "400px", height: "400px", borderRadius: "50%", zIndex: -1, background: `linear-gradient(90deg,
            rgba(214,202,255,1) 0%, rgba(204,209,245,1) 15%, rgba(230,200,230,1) 60%)`, filter: "blur(20px)"
            }}></div>
        </div>

    );
};

export default BackgroundGradient;
