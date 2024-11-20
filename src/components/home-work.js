import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Ppaws from '../images/ppaws-new-2.png'
import nycua from '../images/nycua-new-2.png'
import Excelsior from '../images/excelsior.webp'
import Cfdsny from '../images/cfdsny.png'
import Nepa from '../images/nepa.webp'
import NamKnights from '../images/nam-knights.webp'
import Naba from '../images/naba.webp'
import Nycuf from '../images/nycuf.webp'

const HomeWork = () => {
    const app = useRef < HTMLDivElement > (null);
    useEffect(() => {
        const work = gsap.utils.toArray('.work-section-item');
        work.forEach(work => {
            const workanim = gsap.fromTo(
                work,
                {
                    autoAlpha: 0,
                    y: 250,
                    rotate: -2,
                },
                {
                    stagger: 2,
                    duration: .6,
                    autoAlpha: 1,
                    y: 0,
                    rotate: 0
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
            <div className="home-work">
                <div className="home-work-wrapper">
                    <div className="home-work-section">
                        <div className="work-section-item">
                            <img src={Ppaws} alt="" />
                        </div>
                        <div className="work-section-item">
                            <img src={Excelsior} alt="" />
                            <div className="item-info">
                                <h1>Excelsior Wood Shop</h1>
                            </div>
                        </div>
                        <div className="work-section-item">
                            <img src={Nepa} alt="" />
                        </div>
                        <div className="work-section-item">
                            <img src={Naba} alt="" />
                        </div>
                    </div>
                    <div className="home-work-section">
                        <div className="work-section-item">
                            <img src={NamKnights} alt="" />
                        </div>
                        <div className="work-section-item">
                            <img src={Cfdsny} alt="" />
                        </div>
                        <div className="work-section-item">
                            <img src={nycua} alt="" />
                        </div>
                        <div className="work-section-item">
                            <img src={Nycuf} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeWork