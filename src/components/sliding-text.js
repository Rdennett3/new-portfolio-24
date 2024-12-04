import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
    const racesRef = useRef(null); // Reference to the scrolling text wrapper
    const containerRef = useRef(null); // Reference to the container

    useEffect(() => {
        const races = racesRef.current;

        function getScrollAmount() {
            let racesWidth = races.scrollWidth;
            return -(racesWidth - window.innerWidth);
        }

        const tween = gsap.to(races, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
        });

        const scrollTrigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 20%",
            end: () => `+=${getScrollAmount() * -2}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
        });

        // Clean up on component unmount
        return () => {
            scrollTrigger.kill();
            tween.kill();
        };
    }, []);

    return (
        <>
            <div className="scrolling-text-pin-wrapper">
                <div className="scrolling-text-container" ref={containerRef}>
                    <div className="scrolling-text-wrapper" ref={racesRef}>
                        <h1 className="scroll name-2">HTML - CSS - JavaScript - Wordpress - Shopify - PHP - Liquid - React - Gatsby - GSAP - AWS - Accessibility - Project Management</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ScrollingText;
