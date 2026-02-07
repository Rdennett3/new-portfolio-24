import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StackedCards({ cards }) {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current;

        gsap.set(cards, {
            yPercent: 100,
            zIndex: (i) => i,
        });

        gsap.to(cards, {
            yPercent: 0,
            ease: "none",
            stagger: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => "+=" + window.innerHeight * cards.length,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <section ref={containerRef} className="stacked-cards">
            <div className="stacked-cards__inner">
                {cards.map((card, i) => (
                    <article
                        key={i}
                        ref={(el) => (cardsRef.current[i] = el)}
                        className="stacked-card"
                    >
                        <div className="stacked-card__image">
                            <img src={card.image} alt={card.title} />
                        </div>

                        <div className="stacked-card__content">
                            <h2>{card.title}</h2>
                            <p>{card.text}</p>
                            <a
                                href={card.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="stacked-card__button"
                            >
                                Visit Site
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
