import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const HomeIntro = () => {
    return (
        <>
            <section className="home-intro-container">
                <div className="home-intro-wrapper">
                    <div className="home-intro-item">
                        <h1>Bob</h1>
                    </div>
                    <div className="home-intro-item">
                        <h1>Dennett</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeIntro