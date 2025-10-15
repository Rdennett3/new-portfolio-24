import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
                start: "top 25%",
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
            image: "/images/ppaws-new.png",
            title: "EagleHawk",
            text: "Description for section one.",
            link: "https://eaglehawk.io",
        },
        {
            image: "/images/ppaws-new.png",
            title: "Salt City FCU",
            text: "Description for section two.",
            link: "https://saltcityfcu.org",
        },
        {
            image: "/images/ppaws-new.png",
            title: "Bloomington Fire Department",
            text: "Description for section three.",
            link: "https://bloomingtonfiredepartment.com",
        },
        {
            image: "/images/ppaws-new.png",
            title: "Personal Paws",
            text: "Description for section four.",
            link: "https://personal-paws.net",
        },
        {
            image: "/images/ppaws-new.png",
            title: "New York Credit Union Association",
            text: "Description for section five.",
            link: "https://nycua.org",
        },
    ];

    return (
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
                            <a href={data.link} className="section-button">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            <style jsx>{`
        .horizontal-scroll-container {
          position: relative;
          height: 75vh;
          width: 100vw;
          display: flex;
          overflow: hidden;
        }
        .horizontal-section {
          flex: 0 0 90vw;
          height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .section-inner {
          width: 80%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }
        .section-image img {
          width: 100%;
          height: auto;
          display: block;
          border-radius:25px;
        }
        .section-content h2 {
          margin: 0 0 1rem 0;
          font-size: 1.8rem;
        }
        .section-content p {
          margin-bottom: 1rem;
        }
        .section-button {
          display: inline-block;
          padding: 0.6rem 1.2rem;
          background: #000;
          color: #fff;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .horizontal-section {
            flex: 0 0 100vw;
          }
          .section-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .section-image img {
            max-width: 80%;
            margin: 0 auto;
          }
        }
      `}</style>
        </section>
    );
}
