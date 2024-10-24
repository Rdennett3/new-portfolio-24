import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Pier from "../images/pier2.webp"
const LowerAbout = () => {
    const app = useRef < HTMLDivElement > (null);
    useEffect(() => {


    }, [])
    return (
        <>
            <section className="lower-about-container" id="pier">
                <div className="lower-about-wrapper">
                    <div className="lower-about-item">
                        <img src={Pier} alt="" />
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