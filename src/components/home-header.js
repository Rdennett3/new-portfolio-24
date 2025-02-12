import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Abs from "../images/abs.webp"
const HomeHeader = () => {

    const app = useRef < HTMLDivElement > (null);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let introimgmm = gsap.matchMedia();

        introimgmm.add("(min-width:900px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".new-header-item",
                    start: "top 25%",
                    end: "top top",
                    scrub: true,
                    // markers: true,
                }
            });
            tl.from("#abs", {
                scale: 1.25,
            })
        })
        introimgmm.add("(max-width:899px)", () => {
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
            <section className="new-home-header">
                <div className="new-header-item">
                    <img src={Abs} alt="" id="abs" />
                </div>
            </section>
        </>
    )
}
export default HomeHeader