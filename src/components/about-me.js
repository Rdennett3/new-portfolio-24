import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Nala from '../images/nala.png'
import Otis from '../images/otis.png'
import Cheyanne from '../images/cheyanne.png'
import Vacation from '../images/vacation.png'
import Fire from '../images/fire.webp'

const AboutMe = () => {
    return (
        <>
            <section className="about">
                <div className="about-wrapper">
                    <div className="about-item"></div>
                    <div className="about-item"></div>
                </div>
            </section>
        </>
    )
}

export default AboutMe