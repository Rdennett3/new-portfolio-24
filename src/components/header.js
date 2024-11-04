import * as React from "react"
import { Link } from "gatsby";
import WeatherWidget from "../components/WeatherWidget";

const Header = () => {
    return (
        <>
            <section className="header">
                <div className="header-wrapper">
                    {/* <div className="header-item">
                        <a href="https://www.linkedin.com/in/bob-dennett-b3227b103" target="_blank" rel="noreferrer"><h2>LinkedIn</h2></a>
                        <a href="https://www.instagram.com/bobd3/" target="_blank" rel="noreferrer"><h2>Instagram</h2></a>
                        <a href="https://www.instagram.com/bobd3/" target="_blank" rel="noreferrer"><h2>Github</h2></a>
                    </div> */}
                    <div className="header-item">
                        <WeatherWidget />
                    </div>
                    <div className="header-item">
                        <Link to="/"><h2>Home</h2></Link>
                    </div>
                    <div className="header-item">
                        {/* <WeatherWidget /> */}
                        {/* <Link to="/freelancing">Freelancing</Link> */}
                        <Link to="/contact"><h2>Connect</h2></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header