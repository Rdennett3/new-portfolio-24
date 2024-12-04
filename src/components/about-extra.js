import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../styles/style.css"
import Cheyanne from '../images/cheyanne.png'
import Nala from '../images/nala.png'
import Otis from '../images/otis.png'
import Fire from '../images/fire.webp'
import Vacation from '../images/vacation.png'
const AboutExtra = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let headerimgmm = gsap.matchMedia();

        headerimgmm.add("(min-width:900px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#extra-images",
                    start: "top 45%",
                    end: "top top",
                    // markers: true,
                }
            });
            tl.from("#extra-images img", {
                duration: 1,
                y: 100,
                autoAlpha: 0,
                stagger: .15
            })
        })
        headerimgmm.add("(max-width:899px)", () => {
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
        })
    })
    return (
        <>
            <section className="about-extra">
                <div className="about-extra-wrapper">
                    <div className="about-extra-item" id="extra-images">
                        <img src={Cheyanne} alt="" />
                        <img src={Otis} alt="" />
                        <img src={Nala} alt="" />
                        <img src={Fire} alt="" />
                        <img src={Vacation} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutExtra
export const Head = () => <title>Contact</title>