import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const BrokenWork = () => {
    const app = useRef < HTMLDivElement > (null);
    useEffect(() => {
        let recentmm = gsap.matchMedia();

        recentmm.add("(min-width:900px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".work-new-wrapper",
                    start: "top 50%",
                    end: "top top",
                }
            });

            tl.from(".anim-2", {
                y: 50,
                stagger: .05,
                autoAlpha: 0
            })
                .to(".anim-2", {
                    stagger: .05,
                    autoAlpha: 1
                })
        })

    }, [])
    return (
        <>
            <section className="work-new-container">
                <div className="work-new-wrapper">
                    <div className="work-new-item work-title">
                        <h1 className="name-2"><span className="anim-2">R</span><span className="anim-2">e</span><span className="anim-2">c</span><span className="anim-2">e</span><span className="anim-2">n</span><span className="anim-2">t</span>&nbsp;<span className="anim-2">W</span><span className="anim-2">o</span><span className="anim-2">r</span><span className="anim-2">k</span></h1>
                    </div>
                    <div className="work-new-item">
                        <div className="work-card">
                            <h1>Excelsior Wood Shop</h1>
                        </div>
                        <div className="work-card">
                            <h1>Personal Paws</h1>
                        </div>
                        <div className="work-card">
                            <h1>Nam Knights M.C.</h1>
                        </div>
                        <div className="work-card">
                            <h1>NABA</h1>
                        </div>
                        <div className="work-card">
                            <h1>NEPA FCU</h1>
                        </div>
                        <div className="work-card">
                            <h1>NYCUF</h1>
                        </div>
                        <div className="work-card">
                            <h1>NYCUA</h1>
                        </div>
                    </div>
                </div>
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