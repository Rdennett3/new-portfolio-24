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
                        <h2>Featured Work</h2>
                    </div>
                    <div className="work-section">
                        <div className="work-item">

                        </div>
                        <div className="work-item"></div>
                        <div className="work-item"></div>
                        <div className="work-item"></div>
                        <div className="work-item"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkMay
