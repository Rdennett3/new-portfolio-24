import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const BigImage = ({ image }) => {
    const bigImageRef = useRef(null);

    useEffect(() => {
        const element = bigImageRef.current;

        // Parallax animation
        gsap.to(element, {
            yPercent: -20, // Adjust for parallax intensity
            ease: "none",
            scrollTrigger: {
                trigger: element, // The element that triggers the animation
                start: "top bottom", // Start when the element's top enters the viewport
                end: "bottom top", // End when the element's bottom leaves the viewport
                scrub: true, // Smooth animation tied to scroll
            },
        });

        // Cleanup on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={bigImageRef}
            className="big-image"
            style={{
                position: "relative",
                width: "100%",
                height: "500px", // Adjust as needed
                overflow: "hidden",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        ></div>
    );
};

export default BigImage;
