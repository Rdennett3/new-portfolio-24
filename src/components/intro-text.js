import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const IntroText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        // Split into lines, words, and characters
        const split = new SplitText(textRef.current, {
            type: "lines,words,chars",
            linesClass: "split-line"
        });

        // Make sure each line has its own container for masking (like a curtain reveal)
        split.lines.forEach((line) => {
            const wrapper = document.createElement("div");
            wrapper.style.overflow = "hidden";
            wrapper.style.display = "block";

            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        // Timeline to sequence line + char animations
        const tl = gsap.timeline({ delay: 0.1 });

        // Animate lines sliding up
        tl.from(split.lines, {
            yPercent: 100,
            ease: "power4.out",
            duration: 1,
            stagger: 0.2
        });

        // Animate characters inside lines with a little stagger
        tl.from(
            split.chars,
            {
                yPercent: 100,
                duration: 0.4,
                stagger: {
                    each: 0.05,
                }
            },
        );

        return () => {
            split.revert(); // Clean up on unmount
            tl.kill();
        };
    }, []);

    return (
        <div className="intro-area">
            <div className="intro-area-wrapper">
                <h1 className="name" ref={textRef}>
                    Bob <br /> Dennett
                </h1>
                <p>Web Developer</p>
            </div>
        </div>
    );
};

export default IntroText;
