import { convertUTC } from "./convertUTC";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

export const Hourly = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
  };
  const timezone = props.data.timezone;
  return (
    <div>
      <Slider {...settings}>
        {props.data.hourly.map((item) => {
          return (
            <div>
              <h1>{convertUTC(timezone, item.dt).hour}</h1>
              <i className={`wi wi-owm-night-${item.weather[0].id}`}></i>
              <h2>{item.temp}</h2>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

