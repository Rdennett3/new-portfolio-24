import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Ppaws from "../images/work/ppaws-square-small.webp";
import Naba from "../images/naba.png";
import Nycua from "../images/nycua-new-2.png"
import NamKnights from "../images/namknights.png";
import Nycuf from "../images/nycuf.webp"

gsap.registerPlugin(ScrollTrigger);

const WorkMay = () => {
    return (
        <>
            <section className="work-may-container">
                <div className="work-may-wrapper">
                    <div className="work-section">
                        <h2>Recent Work</h2>
                    </div>
                    <div className="work-section">
                        <div className="work-item">
                            <div className="work-item-info">
                                <h2>EagleHawk</h2>
                                <a href="https://eaglehawk.vibrantbrands.dev" target="_blank" className="work-btn">View Website</a>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-item-info">
                                <h2>Salt City FCU</h2>
                                <a href="https://saltcityfcu.org" target="_blank" className="work-btn">View Website</a>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-item-info">
                                <h2>Belvedere Health Services</h2>
                                <a href="https://belvederehealthservices.com" target="_blank" className="work-btn">View Website</a>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-item-info">
                                <h2>NYCUA</h2>
                                <a href="https://nycua.org" target="_blank" className="work-btn">View Website</a>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-item-info">
                                <h2>Personal Paws</h2>
                                <a href="https://personal-paws.net" target="_blank" className="work-btn">View Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkMay
