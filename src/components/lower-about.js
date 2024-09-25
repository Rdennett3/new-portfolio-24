import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Pier from "../images/pier2.webp"
const LowerAbout = () => {
    const app = useRef < HTMLDivElement > (null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            ease: "none"
        });

        tl.from(".laptop", {
            y: 100,
            duration: 1,
            autoAlpha: 0
        }).to({}, {
            duration: 1,
            autoAlpha: 1,
            y: 0
        })
        ScrollTrigger.create({
            trigger: ".lower-about-wrapper",
            start: "top 50%",
            end: "top 20%",
            // pin: true,
            animation: tl,
            // markers: true,
            // scrub: 1,
            // pinSpacing: false
        })

        // NEON SLIDE UP ANIMATION
        const tl2 = gsap.timeline({
            ease: "none"
        });

        tl2.from("#pier", {
            y: 100,
            autoAlpha: 0,
            stagger: .25
        }).to({}, {
            y: 0,
            autoAlpha: 1,
            stagger: .25
        })
        ScrollTrigger.create({
            trigger: ".lower-about-wrapper",
            start: "top 70%",
            end: "top 10%",
            animation: tl2,
            scrub: 1,
        })

    }, [])
    return (
        <>
            <section className="lower-about-container">
                <div className="lower-about-wrapper">
                    <div className="lower-about-item">
                        <img src={Pier} alt="" id="pier" />
                    </div>
                    <div className="lower-about-item">
                        <p className="laptop">Outside of work I enjoy Cooking, Hiking, Camping, Snowboarding, Martial Arts, trying new restaurants, reading, and attempting to get a green thumb - I am getting better, I swear.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerAbout