import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Excelsior from "../images/work-logos/excelsior-black.png";
import Salt from "../images/work-logos/saltcity.png";
import Eaglehawk from "../images/work-logos/eh-logo.webp";
import Ppaws from "../images/work-logos/ppaws-text-2-trans.png";
import Nycua from "../images/work-logos/nycua-blue.png";
import Bloomington from "../images/work-logos/bloomington-logo.png";

const WorkGrid = () => {
    return (
        <>
            <section className="work-outer-26">
                <div className="work-wrapper-26">
                    <div className="work-item-26">
                        <img src={Excelsior} alt="Excelsior" />
                        {/* <h3>Excelsior Wood</h3> */}
                        <a href="https://excelsiorwood.com" target="_blank" className="work-btn">Visit</a>
                    </div>
                    <div className="work-item-26">
                        <img src={Salt} alt="" />
                        <a href="https://saltcityfcu.org" target="_blank" className="work-btn">Visit</a>
                    </div>
                    <div className="work-item-26">
                        <img src={Eaglehawk} alt="" />
                        <a href="https://eaglehawk.io" target="_blank" className="work-btn">Visit</a>
                    </div>
                    <div className="work-item-26">
                        <img src={Ppaws} alt="" />
                        <a href="https://personal-paws.net" target="_blank" className="work-btn">Visit</a>
                    </div>
                    <div className="work-item-26">
                        <img src={Nycua} alt="" />
                        <a href="https://nycua.org" target="_blank" className="work-btn">Visit</a>
                    </div>
                    <div className="work-item-26">
                        <img src={Bloomington} alt="" />
                        <a href="https://bloomingtonfiredepartment.com/" target="_blank" className="work-btn">Visit</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkGrid;