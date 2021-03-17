import React, { useState, useEffect } from "react";
import axios from "axios";

const CityWeather = (props) => {
  const [city, setCity] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const resp = await axios.get(url);
      // console.log(resp.data);
      setCity(resp.data);
    };

    getWeather();
  }, [props.cityName]);

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
