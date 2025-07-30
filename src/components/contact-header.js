import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const ContactHeader = () => {
    return (
        <>
            <section className="contact-header-container">
                <div className="contact-header-wrapper">
                    <div className="contact-header-item">
                        <h1 className="name">Get In Touch</h1>
                    </div>
                    <div className="contact-header-item"></div>
                </div>
            </section>
        </>
    )
}

export default ContactHeader;