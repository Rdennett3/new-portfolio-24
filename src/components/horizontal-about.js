// src/components/HorizontalScroll.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HorizontalScroll = () => {
    const containerRef = useRef(null);
    const scrollContentRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray(".horizontal-section");

        const scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1), // Moves sections horizontally
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1, // Smoothens the scrolling
                end: () => "+=" + scrollContentRef.current.offsetWidth, // Dynamic scroll end based on content width
            },
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <div className="horizontal-scroll-container" ref={containerRef}>
            <div className="horizontal-scroll-content" ref={scrollContentRef}>
                <section className="horizontal-section section-1">
                    <div className="horizontal-section-inner"></div>
                </section>
                <section className="horizontal-section section-2">
                    <div className="horizontal-section-inner"></div>
                </section>
                <section className="horizontal-section section-3">
                    <div className="horizontal-section-inner"></div>
                </section>
                <section className="horizontal-section section-4">
                    <div className="horizontal-section-inner"></div>
                </section>
                <section className="horizontal-section section-5">
                    <div className="horizontal-section-inner"></div>
                </section>
                <section className="horizontal-section section-6">
                    <div className="horizontal-section-inner"></div>
                </section>
                <section className="horizontal-section section-7">
                    <div className="horizontal-section-inner"></div>
                </section>
            </div>
        </div>
    );
};

export default HorizontalScroll;
