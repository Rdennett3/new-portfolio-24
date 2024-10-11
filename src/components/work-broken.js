import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import PpawsSquare from '../images/work/ppaws-square.webp'
import NamKnights from '../images/work/nam-knights-square.webp'
import Naba from '../images/work/naba-square.webp'
import Nycuf from '../images/work/nycuf-square.webp'
import Nepa from '../images/work/nepa-square.webp'
const BrokenWork = () => {
    const app = useRef < HTMLDivElement > (null);
    useEffect(() => {
        const work = gsap.utils.toArray('.broken-work-item');
        work.forEach(work => {
            const workanim = gsap.fromTo(
                work,
                {
                    x: 50,
                    duration: 1,
                    pin: 1,
                    scale: .9
                },
                {
                    x: 0,
                    duration: 1,
                    pin: 1,
                    scale: 1,
                    stagger: 2
                }
            );
            ScrollTrigger.create({
                trigger: work,
                animation: workanim,
            })
        })

    }, [])
    return (
        <>
            <section className="work-new-container">

            </section>
            {/* <section className="broken-work">
                <div className="broken-work-container">
                    <div className="featured">
                        <div className="featured-container broken-work-item">
                            <div className="featured-section">
                                <div className="featured-wrapper">
                                    <p>Shopify | Development</p>
                                    <h1 className="featured-title">Excelsior Wood Shop</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <a href="https://shop.excelsiorwood.com/" className="featured-btn" target="_blank">Visit Site</a>
                                </div>
                            </div>
                            <div className="featured-section"></div>
                        </div>
                    </div>
                    <div className="other-work">
                        <div className="other-work-item broken-work-item">
                            <img src={PpawsSquare} alt="" />
                            <div className="other-work-item-wrapper">
                                <p>Shopify | Design | Development</p>
                                <h1 className="other-title">Personal Paws</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                                <a href="https://personal-paws.com" className="other-btn" target="_blank">Visit Site</a>
                            </div>
                        </div>
                        <div className="other-work-item broken-work-item">
                            <img src={NamKnights} alt="" />
                            <div className="other-work-item-wrapper">
                                <p>Shopify | Design | Development</p>
                                <h1 className="other-title">Nam Knights MC</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                                <a href="https://southerntierchapter.com/" className="other-btn" target="_blank">Visit Site</a>
                            </div>
                        </div>
                        <div className="other-work-item broken-work-item">
                            <img src={Naba} alt="" />
                            <div className="other-work-item-wrapper">
                                <p>Wordpress | Development</p>
                                <h1 className="other-title">NABA</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                                <a href="https://nabavision.org" className="other-btn" target="_blank">Visit Site</a>
                            </div>
                        </div>
                        <div className="other-work-item broken-work-item">
                            <img src={Nycuf} alt="" className="work-img" />
                            <div className="other-work-item-wrapper">
                                <p>Concrete CMS | Development</p>
                                <h1 className="other-title">NYCUF</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="https://nycuf.org/" className="other-btn" target="_blank">Visit Site</a>
                            </div>
                        </div>
                        <div className="other-work-item broken-work-item">
                            <img src={Nepa} alt="" />
                            <div className="other-work-item-wrapper">
                                <p>Concrete CMS | Development</p>
                                <h1 className="other-title">NEPA</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="https://nepafcu.org/" className="other-btn" target="_blank">Visit Site</a>
                            </div>
                        </div>
                        <div className="other-work-item broken-work-item">
                            <img src={Naba} alt="" />
                            <div className="other-work-item-wrapper">
                                <p>Concrete CMS | Development</p>
                                <h1 className="other-title">CFDS</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="https://nycuf.org/" className="other-btn" target="_blank">Visit Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default BrokenWork