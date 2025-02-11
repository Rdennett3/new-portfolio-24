import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Water from '../images/water.webp'
import Winter from "../images/winter.webp"
import Abs from "../images/abs.webp"
const HomeHeader = () => {

    const app = useRef < HTMLDivElement > (null);


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        gsap.from('.anim1', { y: 50, autoAlpha: 0, stagger: .09, delay: .15, duration: .5 });
        gsap.from(".desc", { y: 50, duration: 2, autoAlpha: 0, delay: .5 });
        gsap.from("#abs", { y: 50, duration: 2, delay: .75, autoAlpha: 0, scale: 1.75 });

    }, [])

    return (
        <>
            <section className="new-home-header">
                <div className="new-header-item">
                    <div className="top-info-container">
                        <div className="top-info-item">
                            <h1 className="name"><span className="anim1">B</span><span className="anim1">o</span><span className="anim1">b</span>&nbsp;<span className="anim1">D</span><span className="anim1">e</span><span className="anim1">n</span><span className="anim1">n</span><span className="anim1">e</span><span className="anim1">t</span><span className="anim1">t</span></h1>
                        </div>
                        {/* <div className="top-info-item">
                            <p className="desc">I am a Full-stack developer with a passion for the front end and all things design and e-comm related. Currently calling the Capital District of New York home, but I should probably be living near a warm beach.</p>
                        </div> */}
                    </div>
                </div>
                <div className="new-header-item">
                    <img src={Abs} alt="" id="abs" />
                </div>
            </section>
        </>
    )
}
export default HomeHeader