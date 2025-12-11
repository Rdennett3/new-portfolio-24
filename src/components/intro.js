import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/style.css";
import Arrow from "../images/arrow-right-thin-full.svg"

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Split the text into individual characters
        const split = new SplitType(textRef.current, {
            types: "words",
            tagName: "span",
        });

        // Animate characters with pinning
        const ctx = gsap.context(() => {
            gsap.from(split.words, {
                opacity: 0.25,
                stagger: 2,
                yPercent: 20,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 20%",
                    end: "+=100%",
                    scrub: true,
                    pin: true,
                }
            });
        }, sectionRef);

        return () => {
            ctx.revert(); // Clean up animations and pinning
            split.revert(); // Revert text splitting
        };
    }, []);

    return (

        <section className="intro-container" ref={sectionRef}>
            <div className="intro-wrapper">
                <p ref={textRef}>
                    I am a Full-stack developer with a passion for the front end and all things design, and E-comm related. Outside of work I enjoy Cooking, Martial Arts, Snowboarding, Hiking, Camping, trying new restaurants, and hanging out with my pets.
                </p>
            </div>
            {/* <div className="lower-intro">
                <a href="/contact">
                    <h3>Get In Touch</h3>
                    <img src={Arrow} alt="" />
                </a>
            </div> */}
        </section>
    );
};

export default Intro;
