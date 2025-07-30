import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const IntroText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        // Split text into words
        const split = new SplitText(textRef.current, {
            type: "words",
        });

        // Wrap each word in a container for masking
        split.words.forEach((word) => {
            const wrapper = document.createElement("span");
            wrapper.style.overflow = "hidden";
            wrapper.style.display = "inline-block";

            word.style.display = "inline-block";
            word.style.transform = "translateY(100%)";

            word.parentNode.insertBefore(wrapper, word);
            wrapper.appendChild(word);
        });

        // Animate each word to slide up like a curtain
        gsap.to(split.words, {
            y: 0,
            ease: "power4.out",
            stagger: 0.25,
            delay: .25,
            duration: 1,
        });

        return () => {
            split.revert(); // Restore original DOM
        };
    }, []);

    return (
        <div className="intro-area">
            <h1 className="name" ref={textRef}>Bob Dennett</h1>
        </div>
    );
};

export default IntroText;
