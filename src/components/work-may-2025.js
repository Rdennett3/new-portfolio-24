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
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-item-info">
                                <h2>Salt City FCU</h2>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-item-info">
                                <h2>Belvedere Health Services</h2>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-item-info">
                                <h2>Nam Knights M.C.</h2>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-item-info">
                                <h2>Personal Paws</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkMay
