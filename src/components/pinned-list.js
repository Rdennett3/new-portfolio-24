import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/style.css";

gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        title: "EagleHawk",
        image: "/images/excelsior.png",
        buttonText: "Visit Site",
        buttonUrl: "https://eaglehawk.io"
    },
    {
        title: "Salt City FCU",
        image: "/images/naba-square.png",
        buttonText: "Visit Site",
        buttonUrl: "https://saltcityfcu.org"
    },
    {
        title: "Personal Paws",
        image: "/images/ppaws-new.png",
        buttonText: "Visit Site",
        buttonUrl: "https://personal-paws.net"
    },
    {
        title: "Nam Knights",
        image: "/images/nam-knights-cropped.webp",
        buttonText: "Visit Site",
        buttonUrl: "https://southerntierchapter.com"
    },
    {
        title: "NYCUA",
        image: "/images/nycuf-square.png",
        buttonText: "Visit Site",
        buttonUrl: "https://nycua.org"
    },
];

const ScrollSync = () => {
    const wrapperRef = useRef(null);
    const rightRef = useRef(null);
    const listRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);


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

        const highlight = (index) => {
            setActiveIndex(index); // sets which section's data is active

            listRefs.current.forEach((el, i) => {
                el.classList.toggle("active", i === index);
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
                    {/* <p>this will be the title</p> */}
                    <a
                        href={sections[activeIndex].buttonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="scroll-btn"
                    >
                        {sections[activeIndex].buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ScrollSync;
