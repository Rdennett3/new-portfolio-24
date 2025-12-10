import * as React from "react";
import { Link } from "gatsby";
import WeatherWidget from "../components/WeatherWidget";

const Header = () => {
    return (
        <section className="header">
            <div className="header-wrapper">
                <div className="header-item">
                    <WeatherWidget />
                </div>

                <div className="header-item">
                    <h2><Link to="/">Home</Link></h2>
                </div>

                <div className="header-item">
                    <h2><Link to="/contact">Connect</Link></h2>
                </div>
            </div>
        </section>
    );
};

export default Header;
