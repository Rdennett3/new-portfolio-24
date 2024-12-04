import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const SlidingText = () => {
    const app = useRef < HTMLDivElement > (null);
    useEffect(() => {
        // Select the scrolling text container
        gsap.registerPlugin(ScrollTrigger);

        // const outerContainer = document.querySelector('.scrolling-text-container');
        // const pinDuration = outerContainer.offsetHeight;

        // ScrollTrigger.create({
        //     trigger: ".scrolling-text-container",
        //     start: "top top",
        //     end: `+=${pinDuration}px`,
        //     pin: true,
        // });

        let scrollermm = gsap.matchMedia();

        scrollermm.add("(min-width:900px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".scrolling-text-container",
                    start: "top 70%",
                    end: "top 20%",
                    scrub: 1,
                    pin: true,
                }
            });
            tl.from(".scroll", {
                x: '100%',
            });
            tl.to(".scroll", {
                x: '-100%'
            })
        })
    }, [])
    return (
        <>
            <div class="scrolling-text-container">
                <div class="scrolling-text-wrapper">
                    <h1 className="scroll name-2">HTML - CSS - JavaScript - Wordpress - Shopify - PHP - Liquid - React - Gatsby - GSAP - AWS - Accessibility - Project Management</h1>
                </div>
            </div>

        </>
    )
}

export default SlidingText