import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import eaglehawk from "../images/new-work/eaglehawk.png";
import saltcity from "../images/new-work/saltcity.png";
import bloomington from "../images/new-work/bloomington.png";
import personal from "../images/new-work/personal-paws.png";
import nycua from "../images/new-work/nycua.png";
import excelsior from "../images/new-work/excelsior.png";

gsap.registerPlugin(ScrollTrigger);

export default function StackedCards() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    // Cards data inside the component
    const cards = [
        {
            image: excelsior,
            title: "Excelsior Woods",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://excelsiorwood.com",
        },
        {
            image: eaglehawk,
            title: "EagleHawk",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://eaglehawk.io",
        },
        {
            image: saltcity,
            title: "Salt City FCU",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://saltcityfcu.org",
        },
        {
            image: bloomington,
            title: "Bloomington FD",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://bloomingtonfiredepartment.com",
        },
        {
            image: personal,
            title: "Personal Paws",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://personal-paws.net",
        },
        {
            image: nycua,
            title: "NYCUA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://nycua.org",
        },
    ];

    useEffect(() => {
        const cards = cardsRef.current;
        const container = containerRef.current;

        // Initial state
        gsap.set(cards, {
            yPercent: 110,
            zIndex: (i) => i
        });

        gsap.set(cards[0], {
            yPercent: 0
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${cards.length * 150}%`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        cards.forEach((card, i) => {
            if (i === 0) return;

            // pause (reading time)
            tl.to({}, { duration: 0.6 });

            // slide next card over previous
            tl.to(card, {
                yPercent: 0,
                ease: "power2.out",
                duration: 1
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);


    return (
        <>
            {/* <div className="work-title">
                <h2>Recent Work</h2>
            </div> */}

            <section ref={containerRef} className="stacked-cards">
                <div className="stacked-cards__inner">
                    {cards.map((card, i) => (
                        <article
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className="stacked-card"
                        >
                            {/* <div className="stacked-card__image">
                                <img src={card.image} alt={card.title} />
                            </div> */}
                            <div className="stacked-card__content">
                                <div className="stacked-card-wrapper">
                                    <h2>{card.title}</h2>
                                    <p>{card.text}</p>
                                    <a
                                        href={card.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="stacked-card__button blue-btn"
                                    >
                                        Visit Site
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
