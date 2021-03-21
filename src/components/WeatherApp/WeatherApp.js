import React, { useState } from "react";
import CityWeather from "./CityWeather";

const WeatherApp = () => {
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredCityWeather, setEnteredCityWeather] = useState("");

  const changeHandler = (e) => {
    setEnteredCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredCityWeather(enteredCity);
  };

  return (
    <div className="container">
      <CityWeather cityName={enteredCityWeather} />
      <div className="row justify-content-center">
        <form onSubmit={submitHandler}>
          <input type="text" value={enteredCity} onChange={changeHandler} />
          <input type="submit" className="btn btn-primary" value="Search!" />
        </form>
      </div>
    </div>
  );
};

export default WeatherApp;
