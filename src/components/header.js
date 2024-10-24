import * as React from "react"
import { Link } from "gatsby";
import WeatherWidget from "../components/WeatherWidget";

const Header = () => {
    return (
        <>
            <section className="header">
                <div className="header-wrapper">
                    {/* <div className="header-item">
                        <a href="https://www.linkedin.com/in/bob-dennett-b3227b103" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/bobd3/" target="_blank" rel="noreferrer">Instagram</a>
                    </div> */}
                    <div className="header-item">
                        <WeatherWidget />
                    </div>
                    <div className="header-item">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="header-item">
                        {/* <WeatherWidget /> */}
                        {/* <Link to="/freelancing">Freelancing</Link> */}
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header