import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/style.css";

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
                y: 5,
                stagger: 2,
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
                    I am a Full-stack developer with a passion for the front end and all things design, and E-comm related. Currently calling the Capital District of New York home. Outside of work I enjoy Cooking, Hiking, Camping, Snowboarding, Martial Arts, trying new restaurants, reading, and attempting to get a green thumb - I keep saying I'm getting better at it, but let's be honest...
                </p>
            </div>
        </section>
    );
};

export default Intro;
