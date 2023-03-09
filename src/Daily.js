import { convertUTC } from "./convertUTC";
import React from "react";

export const Daily = (props) => {
  const timezone = props.data.timezone;
  return (
    <>
      {props.data.daily.map((item) => {
        return(<div className="dailyWeather">
          <div className="myDayW">
            {console.log(item)}
            <h1>{convertUTC(timezone, item.dt).day}</h1>
            <h2>{item.temp.day}</h2>
            <i className={`wi wi-owm-night-${item.weather[0].id}`}></i>
            <button className="searchBar__button" id="dropDown">
              <i className="fa-solid fa-caret-down"></i>
            </button>
          </div>

          <div className="dailyDetails hiddenDrop">
            <div className="details">
              <i className="wi wi-direction-down"></i>
              <div>
                <h1>min</h1>
                <h2>{item.temp.min}</h2>
              </div>
            </div>
            <div className="details">
              <i className="wi wi-direction-up"></i>
              <div>
                <h1>max</h1>
                <h2>{item.temp.max}</h2>
              </div>
            </div>
            <div className="details">
              <i className="wi wi-sunrise"></i>
              <div>
                <h1>Sunrise</h1>
                <h2>{convertUTC(timezone, item.sunrise).hour}</h2>
              </div>
            </div>
            <div className="details">
              <i className="wi wi-sunset"></i>
              <div>
                <h1>Sunset</h1>
                <h2>{convertUTC(timezone, item.sunset).hour}</h2>
              </div>
            </div>
            <div className="details">
              <i className="wi wi-day-sunny"></i>
              <div>
                <h1>UVI</h1>
                <h2>{item.uvi}</h2>
              </div>
            </div>
            <div className="details">
              <i className="wi wi-strong-wind"></i>
              <div>
                <h1>Wind</h1>
                <h2>{item.wind_speed}</h2>
              </div>
            </div>
            <div className="details">
              <i className="wi wi-barometer"></i>
              <div>
                <h1>Pressure</h1>
                <h2>{item.pressure}</h2>
              </div>
            </div>
            <div className="details">
              <i className="wi wi-humidity"></i>
              <div>
                <h1>Humidity</h1>
                <h2>{item.humidity}</h2>
              </div>
            </div>
          </div>
        </div>)
      })}
    </>
  );
};

