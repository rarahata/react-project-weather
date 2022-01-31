import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./weatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [ready, setReady] = useState(false);
  console.log("coord", props);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);

    console.log("response", response.data.daily);
  }

  useEffect(() => {
    const apiKey = "67ca492fd73748fde63df058209eed51";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&exclude=current,hourly,minutely,alerts&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }, [props.coord]);

  console.log("forecast", forecast);

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyforecast, index) {
            if (index < 4)
              return (
                <div className="col-3" key={index}>
                  <WeatherForecastDay data={dailyforecast} />
                </div>
              );
          })}
        </div>
      </div>
    );
  } else {
    return "Loading";
  }
}
