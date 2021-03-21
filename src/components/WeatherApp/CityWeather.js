import React, { useState, useEffect } from "react";
import axios from "axios";

const CityWeather = (props) => {
  const [city, setCity] = useState({});

  useEffect(() => {
    if (props.cityName) {
      const getWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
        const resp = await axios.get(url);
        setCity(resp.data);
      };
    }
    getWeather();
  }, [props.cityName]);

  if (!city.weather) {
    return <h1>Loading...</h1>;
  }

  const iconUrl =
    city && `http://openweathermap.org/img/w/${city.weather[0].icon}.png`;

  return (
    <>
      <h1>{city.name}</h1>
      <img src={iconUrl} alt={city.name} />
    </>
  );
};

export default CityWeather;
