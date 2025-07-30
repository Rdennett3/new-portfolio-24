import * as React from "react"
import { Link } from "gatsby";
import WeatherWidget from "../components/WeatherWidget";

const Header = () => {
    return (
        <>
            <section className="header">
                <div className="header-wrapper">
                    <div className="header-item">
                        <WeatherWidget />
                    </div>
                    <div className="header-item">
                        <Link to="/"><h2>Home</h2></Link>
                    </div>
                    <div className="header-item">
                        <Link to="/contact"><h2>Connect</h2></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header