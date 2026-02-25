import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Excelsior from "../images/work-logos/excelsior-black.png";
import Salt from "../images/work-logos/saltcity.png";
import Eaglehawk from "../images/work-logos/eh-logo.webp";
import Ppaws from "../images/work-logos/ppaws-text-2-trans.png";
import Nycua from "../images/work-logos/nycua-blue.png";
import Bloomington from "../images/work-logos/bloom-trans.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        name: "Excelsior",
        image: Excelsior,
        url: "https://excelsiorwood.com"
    },
    {
        name: "Salt City FCU",
        image: Salt,
        url: "https://saltcityfcu.org"
    },
    {
        name: "Eaglehawk",
        image: Eaglehawk,
        url: "https://eaglehawk.io"
    },
    {
        name: "Personal Paws",
        image: Ppaws,
        url: "https://personal-paws.net"
    },
    {
        name: "NYCUA",
        image: Nycua,
        url: "https://nycua.org"
    },
    {
        name: "Bloomington Fire Dept",
        image: Bloomington,
        url: "https://bloomingtonfiredepartment.com/"
    }
];

const WorkGrid = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".work-item-26", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="work-outer-26" ref={sectionRef}>
            <h2>Recent Work</h2>

            <div className="work-wrapper-26">
                {projects.map((project, index) => (
                    <div className="work-item-26" key={index}>
                        <img src={project.image} alt={project.name} />
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-btn"
                        >
                            Visit
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkGrid;