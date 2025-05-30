import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const AnimatedText = ({ text }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return; // Ensure SplitType only runs in the browser

        const split = new SplitType(textRef.current, { types: "words, chars" });

        gsap.from(split.chars, {
            opacity: 0,
            y: 20,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
        });

        return () => {
            split.revert(); // Cleanup SplitType on unmount
        };
    }, []);

    return <h1 ref={textRef}>{text}</h1>;
};

export default AnimatedText;
