import { convertUTC } from "./convertUTC";
import { useFetch } from "./fetchData";

const CurrentW = (props) => {
  const { loading, data } = useFetch(
    `https://weatheappdesignapi.onrender.com/weather?lat=${props.coordinates.lat}&lon=${props.coordinates.lng}`
  );
  props.setData(()=> {return data});
  props.setLoading(()=>{return loading});

  function splitTime(time) {
    const [d, sunValue] = time.split(",");
    return sunValue;
  }

  const MyWeather = ()=>{
    return(
      <>
        <p className="location">{props.address}</p>
        <h1 className="currentTemp">{props.data.current.temp}</h1>
        <h2 className="currentDescri">
          {props.data.current.weather[0].description}
        </h2>
        <div className="sun">
          <div className="sunRise">
            <h1>Sunrise</h1>
            <h2 className="sunTime">
              {splitTime(
                convertUTC(props.data.timezone, props.data.current.sunrise).sun
              )}
            </h2>
            <i className="wi wi-sunrise"></i>
          </div>
          <div className="sunSet">
            <h1>Sunset</h1>
            <h2 className="sunTime">
              {splitTime(
                convertUTC(props.data.timezone, props.data.current.sunset).sun
              )}
            </h2>
            <i className="wi wi-sunset"></i>
          </div>
        </div>
        <div className="currentDetails">
          <div className="uvi">
            <i className="wi wi-day-sunny"></i>
            <h1>UVI</h1>
            <h2>{props.data.current.uvi}</h2>
          </div>
          <div className="wind">
            <i className="wi wi-strong-wind"></i>
            <h1>Wind</h1>
            <h2>{props.data.current.wind_speed}</h2>
          </div>
          <div className="pressure">
            <i className="wi wi-barometer"></i>
            <h1>Pressure</h1>
            <h2>{props.data.current.pressure}</h2>
          </div>
          <div className="humidity">
            <i className="wi wi-humidity"></i>
            <h1>Humidity</h1>
            <h2>{props.data.current.humidity}</h2>
          </div>
        </div>
      </>
    )
  }
  

  const MyCurrentW = () => {
    return (
      <section className="currentW">
        {loading && <h1>loading....</h1>}
        {!loading && <MyWeather/>}
      </section>
    );
  };

  return (<MyCurrentW />);
};

export default CurrentW;

