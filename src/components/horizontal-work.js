import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import eaglehawk from "../images/new-work/eaglehawk.png"
import saltcity from "../images/new-work/saltcity.png"
import bloomington from "../images/new-work/bloomington.png"
import personal from "../images/new-work/personal-paws.png"
import nycua from "../images/new-work/nycua.png"

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
            image: eaglehawk,
            title: "EagleHawk",
            text: "",
            link: "https://eaglehawk.io",
        },
        {
            image: saltcity,
            title: "Salt City FCU",
            text: "",
            link: "https://saltcityfcu.org",
        },
        {
            image: bloomington,
            title: "Bloomington FD",
            text: "",
            link: "https://bloomingtonfiredepartment.com",
        },
        {
            image: personal,
            title: "Personal Paws",
            text: "",
            link: "https://personal-paws.net",
        },
        {
            image: nycua,
            title: "NYCUA",
            text: "",
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
