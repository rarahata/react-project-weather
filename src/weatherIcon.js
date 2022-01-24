import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./weatherIcon.css";

export default function WeatherIcon(props){
    const iconMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG",
    }
    const colorMapping = {
        "01d": "#FFE162",
        "01n": "#FFE162",
        "02d": "#FFAB76",
        "02n": "#FFAB76",
        "03d": "#92A9BD",
        "03n": "#92A9BD",
        "04d": "#92A9BD",
        "04n": "#92A9BD",
        "09d": "#5C7AEA",
        "09n": "#5C7AEA",
        "10d": "5C7AEA",
        "10n": "5C7AEA",
        "11d": "5C7AEA",
        "11n": "5C7AEA",
        "13d": "#EFEFEF",
        "13n": "EFEFEF",
        "50d": "#9D9D9D",
        "50n": "#9D9D9D",
    }
    console.log(props.code);

    if (props.code){
    return (<ReactAnimatedWeather
    icon={iconMapping[props.code]}
    color={colorMapping[props.code]}
    size={100}
    animate={true}
  />);
}else{
    return "Weather Icon Loading...";
}
}