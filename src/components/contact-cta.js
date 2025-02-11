import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const ContactCta = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctamm = gsap.matchMedia();

        ctamm.add("(min-width:900px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contact-cta-container",
                    start: "top 45%",
                    end: "top top",
                    // markers: true,
                }
            });
            tl.from(".contact-cta-wrapper", {
                duration: 1,
                y: 100,
                autoAlpha: 0,
                stagger: .15
            })
        })
        ctamm.add("(max-width:899px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#header-image",
                    start: "top 50%",
                    end: "top top",
                    // scrub:true,
                }
            });
            tl.to("#header-image img", {
                duration: 1,
                "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            })
            return () => {
                ctamm.kill(); // Stops and cleans up the animation
            };
        })

        let ctatextmm = gsap.matchMedia();
        ctatextmm.add("(min-width:900px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contact-cta-container",
                    start: "top 80%",
                    end: "top top",
                    // markers: true,
                }
            });
            tl.from(".name-expand", {
                // y: 50,
                // x: -50,
                scaleX: 0,
                autoAlpha: 0,
                stagger: .09,
                delay: .15,
                duration: .15
            })
        })
        ctatextmm.add("(max-width:899px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contact-cta-container",
                    start: "top 50%",
                    end: "top top",
                    // scrub:true,
                }
            });
            tl.from(".name2anim", {
                y: 50,
                autoAlpha: 0,
                stagger: .09,
                delay: .15,
                duration: .15
            })
        })
        return () => {
            ctatextmm.kill(); // Stops and cleans up the animation
        };

    })
    return (
        <>
            <section className="contact-cta-container">
                <div className="contact-cta-wrapper">
                    <h1 className="name-2 name-expand"><span className="name2anim">I</span><span className="name2anim">n</span><span className="name2anim">t</span><span className="name2anim">e</span><span className="name2anim">r</span><span className="name2anim">e</span><span className="name2anim">s</span><span className="name2anim">t</span><span className="name2anim">e</span><span className="name2anim">d</span>&nbsp;<span className="name2anim">I</span><span className="name2anim">n</span>&nbsp;<span className="name2anim">S</span><span className="name2anim">t</span><span className="name2anim">a</span><span className="name2anim">r</span><span className="name2anim">t</span><span className="name2anim">i</span><span className="name2anim">n</span><span className="name2anim">g</span>&nbsp;<span className="name2anim">A</span>&nbsp;<span className="name2anim">P</span><span className="name2anim">r</span><span className="name2anim">o</span><span className="name2anim">j</span><span className="name2anim">e</span><span className="name2anim">c</span><span className="name2anim">t</span><span className="name2anim">?</span></h1>
                    <a href="/contact" className="featured-btn" id="cta-btn">Get in Touch</a>
                </div>
            </section>
        </>
    )
}

export default ContactCta;