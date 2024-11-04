import React, { useEffect, useState } from "react";

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Get user location
        const delayGeolocation = setTimeout(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });
                    },
                    (error) => {
                        setError("Location access denied");
                    }
                );
            } else {
                setError("Geolocation is not supported by this browser.");
            }
        }, 3000); // Delay by 3 seconds

        // Cleanup the timeout if the component is unmounted before it triggers
        return () => clearTimeout(delayGeolocation);
    }, []);

    useEffect(() => {
        if (location) {
            // Fetch weather data from OpenWeatherMap
            const API_KEY = "099379af33f749ae6c491ac300fe835c";
            const { latitude, longitude } = location;

            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
            )
                .then((response) => response.json())
                .then((data) => {
                    setWeather(data);
                })
                .catch((error) => {
                    setError("Error fetching weather data");
                });
        }
    }, [location]);

    return (
        <div>
            {error && <p>{error}</p>}
            {weather ? (
                <div className="weather-wrapper">
                    {/* <h3>Weather in {weather.name}</h3> */}
                    {/* Check if weather.main and weather.weather are available before rendering */}
                    {weather.main && (
                        <h2>{Math.round(weather.main.temp)}°F</h2>
                    )}
                    {weather.weather && weather.weather[0] && (
                        <div>
                            <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                            />
                            {/* <p>{weather.weather[0].description}</p> */}
                        </div>
                    )}
                </div>
            ) : (
                !error && <h2>Loading...</h2>
            )}
        </div>
    );
};

export default WeatherWidget;
