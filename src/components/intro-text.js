import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

const IntroText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const introtext = new SplitType(textRef.current, { types: "chars, words" });

            gsap.from(introtext.chars, {
                opacity: 0,
                y: 50,
                stagger: 0.06,
                ease: "power2.out",
            });
        }
    }, []);

    return (
        <>
            <div className="intro-area">
                <h1 ref={textRef} className="intro-text name">Bob Dennett</h1>
            </div>
        </>
    );
};

export default IntroText;
