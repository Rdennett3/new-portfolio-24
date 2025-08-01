import * as React from "react"
import { Link } from "gatsby";
import "../css/Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-item"><h1 className="footer-large">Bob Dennett</h1></div>
                    <div className="footer-item">
                        <a href="https://www.linkedin.com/in/bob-dennett-b3227b103" target="_blank" rel="noreferrer"><h1>LinkedIn</h1></a>
                        <a href="https://www.instagram.com/bobd3/" target="_blank" rel="noreferrer"><h1>Instagram</h1></a>
                        <a href="https://github.com/Rdennett3" target="_blank" rel="noreferrer"><h1>Github</h1></a>
                    </div>
                    <div className="footer-item">
                        <p>© {currentYear} Bob Dennett. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer