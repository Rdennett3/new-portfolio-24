import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const sections = sectionsRef.current;

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const sectionWidth = isMobile ? window.innerWidth : window.innerWidth * 0.5;
        const totalScroll = (sections.length - 1) * sectionWidth;

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top 20%",
                end: () => "+=" + totalScroll,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);



    const sectionData = [
        {
            image: "/images/eaglehawk.png",
            title: "EagleHawk",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://eaglehawk.io",
        },
        {
            image: "/images/saltcity.png",
            title: "Salt City FCU",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://saltcityfcu.org",
        },
        {
            image: "/images/bloomington.png",
            title: "Bloomington FD",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://bloomingtonfiredepartment.com",
        },
        {
            image: "/images/personal-paws.png",
            title: "Personal Paws",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://personal-paws.net",
        },
        {
            image: "/images/nycua.png",
            title: "NYCUA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://nycua.org",
        },
    ];

    return (
        <>
            <div className="work-title">
                <div className="work-title-wrapper">
                    <h2>Recent Work</h2>
                </div>
            </div>
            <section ref={containerRef} className="horizontal-scroll-container">
                {sectionData.map((data, i) => (
                    <div
                        key={i}
                        ref={el => (sectionsRef.current[i] = el)}
                        className="horizontal-section"
                    >
                        <div className="section-inner">
                            <div className="section-image">
                                <img src={data.image} alt={data.title} />
                            </div>
                            <div className="section-content">
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                                <a href={data.link} className="section-button" target="_blank">
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
