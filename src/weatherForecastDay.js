import React from "react";
import WeatherIcon from "./weatherIcon";
import { format, compareAsc } from "date-fns";
import "./weatherForecastDay.css";

export default function WeatherForecastDay(props) {
  console.log(props.data);

  if (props.data) {
    let date = new Date(props.data.dt * 1000);
    console.log(date);
    let day1 = date.getDay();
    console.log(day1);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    console.log(days[date.getDay()]);
    return (
      <div className="WeatherForecastDay">
        <span>{days[date.getDay()]}</span>
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
        <span className="temp-max">{Math.round(props.data.temp.max)}°</span>
        <span className="temp-min">{Math.round(props.data.temp.min)}°</span>
      </div>
    );
  } else {
    return "Loading";
  }
}
