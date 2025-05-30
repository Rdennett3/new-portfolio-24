import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

const IntroText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const introtext = new SplitType(textRef.current, { types: "chars, words" });

            gsap.from(introtext.words, {
                opacity: 0,
                height: 0,
                stagger: 0.15,
                ease: "power2.out",
                delay: 1,
                duration: 1.5,
            });
        }
    }, []);

    return (
        <>
            <div className="intro-area">
                <h1 className="name" ref={textRef}>Bob Dennett</h1>
            </div>
        </>
    );
};

export default IntroText;
