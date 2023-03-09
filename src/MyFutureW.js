import React from "react";
import { Daily } from "./Daily";
import { Hourly } from "./Hourly";



export const MyFutureW = (props) => {
  const expand = (el)=>{
    let name = '';
    if(el.target.classList.contains('fa-caret-down')) {
        name = el.target.parentElement.parentElement.nextElementSibling;
        name.classList.toggle("hiddenDrop");
    }
}
  
  return (
  <div className="futureWeather">
        <div className="slick-slider">
              <Hourly data={props.data}/>
        </div>
        <div className="daily" onClick={expand}>
          <Daily data={props.data} />
        </div>  
  </div>)
};


