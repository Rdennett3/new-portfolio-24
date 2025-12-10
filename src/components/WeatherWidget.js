import React, { useEffect, useState } from "react";

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true; // Track whether component is still mounted

        const delayGeolocation = setTimeout(() => {
            if (!mounted) return;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        if (!mounted) return;
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });
                    },
                    () => {
                        if (!mounted) return;
                        setError("Location access denied");
                    }
                );
            } else {
                setError("Geolocation is not supported by this browser.");
            }
        }, 3000);

        return () => {
            mounted = false; // prevent future state updates
            clearTimeout(delayGeolocation);
        };
    }, []);

    useEffect(() => {
        if (!location) return;

        let mounted = true;
        const API_KEY = "099379af33f749ae6c491ac300fe835c";
        const { latitude, longitude } = location;

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
        )
            .then((response) => response.json())
            .then((data) => {
                if (!mounted) return;
                setWeather(data);
            })
            .catch(() => {
                if (!mounted) return;
                setError("Error fetching weather data");
            });

        return () => {
            mounted = false; // cancel setWeather after unmount
        };
    }, [location]);

    return (
        <div>
            {error && <p>{error}</p>}
            {weather ? (
                <div className="weather-wrapper">
                    {weather.main && <h2>{Math.round(weather.main.temp)}°F</h2>}
                    {weather.weather && weather.weather[0] && (
                        <div>
                            <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                            />
                        </div>
                    )}
                </div>
            ) : (
                !error && <h2 className="loading">Loading...</h2>
            )}
        </div>
    );
};

export default WeatherWidget;
