import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

const IntroText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            // Split text into words
            const introtext = new SplitType(textRef.current, { types: "words" });

            // Wrap each word in a container for masking
            introtext.words.forEach((word) => {
                const wrapper = document.createElement("span");
                wrapper.style.overflow = "hidden";
                wrapper.style.display = "inline-block";

                // Set block display for the animated word
                word.style.display = "inline-block";
                word.style.transform = "translateY(100%)";

                // Wrap word inside the wrapper
                word.parentNode.insertBefore(wrapper, word);
                wrapper.appendChild(word);
            });

            // Animate each word to slide up like a curtain
            gsap.to(introtext.words, {
                y: 0,
                ease: "power4.out",
                stagger: 0.25,
                delay: 0.5,
                duration: 1,
            });
        }
    }, []);

    return (
        <div className="intro-area">
            <h1 className="name" ref={textRef}>Bob Dennett</h1>
        </div>
    );
};

export default IntroText;
