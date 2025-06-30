import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/ScrollSync.css";

gsap.registerPlugin(ScrollTrigger);

const sections = [
    { title: "EagleHawk", image: "/images/work/bw/excelsior.png" },
    { title: "Salt City FCU", image: "/images/work/bw/naba-square.png" },
    { title: "NEPA FCU", image: "/images/work/bw/nycua-new.png" },
    { title: "Personal Paws", image: "/images/work/bw/ppaws-new.png" },
    { title: "Nam Knights", image: "/images/work/bw/nepa-square.png" },
    { title: "NYCUA", image: "/images/work/bw/nycuf-square.png" },
];

const ScrollSync = () => {
    const wrapperRef = useRef(null);
    const rightRef = useRef(null);
    const listRefs = useRef([]);

    useEffect(() => {
        listRefs.current = listRefs.current.slice(0, sections.length);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top top",
                end: "+=5000", // increases scroll distance
                pin: true,
                scrub: true,
            },
        });

        sections.forEach((section, index) => {
            tl.to({}, {
                duration: 1,
                onUpdate: () => {
                    rightRef.current.style.backgroundImage = `url(${section.image})`;
                    highlight(index);
                },
            }, index);
        });

        const highlight = (currentIndex) => {
            listRefs.current.forEach((el, i) => {
                el.classList.toggle("active", i === currentIndex);
            });
        };

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="scroll-container" ref={wrapperRef}>
            <div className="scroll-sync-wrapper">
                <div className="scroll-left">
                    <ul>
                        {sections.map((s, i) => (
                            <li
                                key={i}
                                ref={el => listRefs.current[i] = el}
                                className="scroll-item"
                            >
                                {s.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="scroll-right" ref={rightRef}>
                    <p>Right side background updates</p>
                </div>
            </div>
        </div>
    );
};

export default ScrollSync;
