import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Abs from "../images/abs.webp"
import Waterfall from "../video/waterfall.mp4"
const HomeHeader = () => {

    const app = useRef < HTMLDivElement > (null);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let introimgmm = gsap.matchMedia();

        introimgmm.add("(min-width:900px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".new-header-item",
                    start: "top 60%",
                    end: "top top",
                    scrub: true,

                }
            });
            tl.from("#waterfall", {
                scale: 1.25,
                duration: 5,
            })
            tl.to("#waterfall", {
                scale: 1,
                duration: 1,
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
                    <video src={Waterfall} autoPlay muted loop id="waterfall"></video>
                    {/* <img src={Abs} alt="" id="abs" /> */}
                </div>
            </section>
        </>
    )
}
export default HomeHeader