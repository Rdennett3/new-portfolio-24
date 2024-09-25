import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Fire from '../images/fire.webp'
import Aruba from '../images/aruba2.png'
const ImgExpand = () => {
    const app = useRef < HTMLDivElement > (null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            ease: "none"
        });

        tl.from(".laptop", {
            scale: 0.8,
            duration: 1,
            transformOrigin: "center center",
            autoAlpha: 0
        }).to({}, {
            duration: 1,
            autoAlpha: 1
        })
        ScrollTrigger.create({
            trigger: ".image-container",
            start: "top 50%",
            end: "top -20%",
            // pin: true,
            animation: tl,
            // scrub: 1,
            // pinSpacing: false
        })

        // NEON SLIDE UP ANIMATION
        const tl2 = gsap.timeline({
            ease: "none"
        });

        tl2.from(".home-about-section", {
            y: 100,
            autoAlpha: 0,
            stagger: .25
        }).to({}, {
            y: 0,
            autoAlpha: 1,
            stagger: .25
        })
        ScrollTrigger.create({
            trigger: ".home-about",
            start: "top 70%",
            end: "top 10%",
            animation: tl2,
            scrub: 1,
        })

    }, [])
    return (
        <>
            <section className="image-container">
                <div className="image-wrapper">
                    <img src={Aruba} alt="about me image" className="laptop" />
                </div>
            </section>
        </>
    )
}
export default ImgExpand