import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Pier from '../images/pier.webp'
const HomeAbout = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // NEON SLIDE UP ANIMATION
        const tl2 = gsap.timeline({
            ease: "none"
        });

        tl2.from(".about-wrapper p", {
            y: 100,
            autoAlpha: 0,
            duration: 1,
        }).to({}, {
            y: 0,
            autoAlpha: 1,
            duration: 2
        })
        ScrollTrigger.create({
            trigger: ".about-wrapper",
            start: "top 70%",
            end: "top 10%",
            animation: tl2,
            // scrub: 1,
        })

    }, [])
    return (
        <>
            <div className="about-container">
                <div className="about-wrapper">
                    <p>Outside of work I enjoy Cooking, Hiking, Camping, Snowboarding, Martial Arts, trying new restaurants, reading, and attempting to get a green thumb - I am getting better, I swear.</p>
                </div>
            </div>
        </>
    )
}
export default HomeAbout