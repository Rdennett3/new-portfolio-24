import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/style.css"
import Shopify from "../images/logos-recolored/shopify-mono-black.png";
import WP from "../images/logos-recolored/wp-logo.png";
import AWS from "../images/logos-recolored/aws.png";
import Gatsby from "../images/logos-recolored/gatsby.png";
import Gsap from "../images/logos-recolored/gsap.png";

gsap.registerPlugin(ScrollTrigger);

const Logos = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const items = containerRef.current.querySelectorAll(".logo-item");

        const mq = window.matchMedia("(min-width: 768px)");
        if (mq.matches) {


            gsap.from(items, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.25,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        } else {

            items.forEach((item) => {
                gsap.from(item, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            });
        }
    }, []);

    return (
        <section className="logo-container" ref={containerRef}>
            <div className="logo-wrapper">
                <div className="logo-item">
                    <img src={Shopify} alt="Shopify logo" />
                </div>
                <div className="logo-item">
                    <img src={WP} alt="WordPress logo" />
                </div>
                <div className="logo-item">
                    <img src={Gatsby} alt="Gatsby logo" />
                </div>
                <div className="logo-item">
                    <img src={Gsap} alt="GSAP logo" />
                </div>
                <div className="logo-item">
                    <img src={AWS} alt="AWS logo" />
                </div>
                {/* <div className="logo-item">
                    <p>Wanna talk shop, or just talk sh*t? Get in touch!</p>
                </div> */}
            </div>
        </section>
    );
};

export default Logos;
