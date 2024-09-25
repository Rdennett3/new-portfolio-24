import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Water from '../images/water.webp'
import Fall from "../images/fall.webp"
const HomeHeader = () => {

    const app = useRef < HTMLDivElement > (null);


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        gsap.from('.anim1', { y: 20, autoAlpha: 0, stagger: .25, delay: .5, duration: .75 });
        gsap.from(".desc", { y: 50, duration: 2, autoAlpha: 0 });
        gsap.from("#water", { x: 50, duration: 2, pin: 1, scale: .9 });

    }, [])

    return (
        <>
            {/* <section className="home-header">
                <div className="name-container">
                    <h1 className="name"><div className="anim1">Bob</div>&nbsp;<div className="anim1">Dennett</div></h1> <br />
                    <h1 className="name"><div className="anim1">Web</div>&nbsp;<div className="anim1">Developer</div></h1>
                    <p className="anim1">I am a Full-stack developer with a passion for the front end and all things design and e-comm related. Currently calling the Capital District of New York home, but I probably should be living near a warm beach.</p>
                </div>
            </section> */}
            <section className="new-home-header">
                <div className="new-header-item">
                    <div className="top-info-container">
                        <div className="top-info-item">
                            <h1 className="name anim1">Bob Dennett</h1>
                            <h1 className="name anim1">Web Developer</h1>
                        </div>
                        <div className="top-info-item">
                            <p className="desc">I am a Full-stack developer with a passion for the front end and all things design and e-comm related. Currently calling the Capital District of New York home, but I probably should be living near a warm beach.</p>
                        </div>
                    </div>
                </div>
                <div className="new-header-item">
                    <img src={Fall} alt="" id="water" />
                </div>
            </section>
        </>
    )
}
export default HomeHeader