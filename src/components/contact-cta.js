import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactCta = () => {

    const app = useRef < HTMLDivElement > (null);
    useEffect(() => {
        let recentmm = gsap.matchMedia();

        const work = gsap.utils.toArray('.work-card');
        work.forEach((work, i) => {
            const workanim = gsap.fromTo(
                work,
                {
                    autoAlpha: 0,
                    y: 250,
                    rotate: -5,
                },
                {
                    duration: 2,
                    autoAlpha: 1,
                    y: 0,
                    rotate: 0,
                }
            );

            ScrollTrigger.create({
                trigger: work,
                start: 'top bottom+=100',
                animation: workanim,
                delay: i * 0.2, // Manual stagger by index
            });
        });

    }, [])
    return (
        <>
            <section className="contact-cta-container">
                <div className="contact-cta-wrapper">
                    <h1 className="name-2">Interested in starting a project?</h1>
                    <a href="/contact" className="contact-btn">Get in Touch</a>
                </div>
            </section>
        </>
    )
}

export default ContactCta;