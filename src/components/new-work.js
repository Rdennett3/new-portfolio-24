import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import ppaws from "../images/work/ppaws-square.webp"
const NewWork = () => {

    const app = useRef < HTMLDivElement > (null);
    useEffect(() => {
        // let recentmm = gsap.matchMedia();

        // recentmm.add("(min-width:900px)", () => {
        //     let tl = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: ".new-work-wrapper",
        //             start: "top 50%",
        //             end: "top top",
        //         }
        //     });

        //     tl.from(".new-work-item", {
        //         y: 50,
        //         stagger: .05,
        //         autoAlpha: 0
        //     })
        //         .to(".new-work-item", {
        //             stagger: .05,
        //             autoAlpha: 1
        //         })
        // })

        const work = gsap.utils.toArray('.new-work-image');
        work.forEach((work, i) => {
            const workanim = gsap.fromTo(
                work,
                {
                    autoAlpha: 0,
                    y: 250,
                },
                {
                    duration: 1.5,
                    autoAlpha: 1,
                    y: 0,
                }
            );

            ScrollTrigger.create({
                trigger: work,
                start: 'top bottom+=100',
                animation: workanim,
                delay: i * 0.2, // Manual stagger by index
            });
        });

        // const worktext = gsap.utils.toArray('.new-work-text');
        // worktext.forEach((worktext, i) => {
        //     const workanim = gsap.fromTo(
        //         work,
        //         {
        //             autoAlpha: 0,
        //             y: 250,
        //         },
        //         {
        //             duration: 1.5,
        //             autoAlpha: 1,
        //             y: 0,
        //         }
        //     );

        //     ScrollTrigger.create({
        //         trigger: worktext,
        //         start: 'top bottom+=100',
        //         animation: workanim,
        //         delay: i * 0.2, // Manual stagger by index
        //     });
        // });

    }, [])

    return (
        <>
            <section className="new-work-container">
                <div className="new-work-wrapper">
                    <div className="new-work-item">
                        <div className="new-work-inner">
                            <img src={ppaws} className="new-work-image" />
                        </div>
                        <div className="new-work-inner new-work-text">
                            <h1>Personal Paws</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="featured-btn">Visit Site</a>
                        </div>
                    </div>
                    <div className="new-work-item">
                        <div className="new-work-inner">
                            <h1>Personal Paws</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="featured-btn">Visit Site</a>
                        </div>
                        <div className="new-work-inner new-work-text">
                            <img src={ppaws} className="new-work-image" />
                        </div>
                    </div>
                    <div className="new-work-item">
                        <div className="new-work-inner">
                            <img src={ppaws} className="new-work-image" />
                        </div>
                        <div className="new-work-inner new-work-text">
                            <h1>Personal Paws</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="featured-btn">Visit Site</a>
                        </div>
                    </div>
                    <div className="new-work-item">
                        <div className="new-work-inner">
                            <h1>Personal Paws</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="featured-btn">Visit Site</a>
                        </div>
                        <div className="new-work-inner new-work-text">
                            <img src={ppaws} className="new-work-image" />
                        </div>
                    </div>
                    <div className="new-work-item">
                        <div className="new-work-inner">
                            <img src={ppaws} className="new-work-image" />
                        </div>
                        <div className="new-work-inner new-work-text">
                            <h1>Personal Paws</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="featured-btn">Visit Site</a>
                        </div>
                    </div>
                    <div className="new-work-item">
                        <div className="new-work-inner">
                            <h1>Personal Paws</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="featured-btn">Visit Site</a>
                        </div>
                        <div className="new-work-inner new-work-text">
                            <img src={ppaws} className="new-work-image" />
                        </div>
                    </div>
                    <div className="new-work-item">
                        <div className="new-work-inner">
                            <img src={ppaws} className="new-work-image" />
                        </div>
                        <div className="new-work-inner new-work-text">
                            <h1>Personal Paws</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="featured-btn">Visit Site</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewWork;