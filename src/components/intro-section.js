import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Waterfall from "../video/waterfall.mp4"

const IntroSection = () => {
    return (
        <>
            <div class="video-container">
                <video source={Waterfall} type="video/mp4" autoplay loop muted playsinline>
                </video>
                <div class="overlay-content">
                    <h1>Welcome to My Website</h1>
                    <p>Engaging background video</p>
                </div>
            </div>

        </>
    )
}

export default IntroSection;