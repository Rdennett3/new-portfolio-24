import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollStack = () => {
    const containerRef = useRef();

    useEffect(() => {
        const panels = gsap.utils.toArray(".panel");

        gsap.set(panels, { yPercent: 100 });
        gsap.set(panels[0], { yPercent: 0 }); // First one is visible initially

        panels.forEach((panel, i) => {
            if (i === 0) return;

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: () => `top+=${i * window.innerHeight} top`,
                end: () => `top+=${(i + 1) * window.innerHeight} top`,
                scrub: true,
                onUpdate: (self) => {
                    gsap.to(panel, {
                        yPercent: 0,
                        ease: "none",
                        duration: 0.1,
                    });
                },
            });
        });

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${panels.length * window.innerHeight}`,
            pin: true,
            scrub: true,
        });
    }, []);

    return (
        <div className="stack-container">
            <div className="stack-wrapper" ref={containerRef}>
                <div className="stack">
                    <div className="panel panel1">Panel 1</div>
                    <div className="panel panel2">Panel 2</div>
                    <div className="panel panel3">Panel 3</div>
                    <div className="panel panel4">Panel 4</div>
                    <div className="panel panel5">Panel 5</div>
                </div>
            </div>
        </div>
    );
};

export default ScrollStack;
