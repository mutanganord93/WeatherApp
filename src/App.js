import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import CurrentW from "./WeatherLocation";
import { MyFutureW } from "./MyFutureW";

function App() {
  
  const [address, setAddress] = useState("Honolulu County, HI");
  const [coordinates, setCoordinates] = useState({
    lat: 21.573383568013707,
    lng: -157.86500137044615,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //setTemp(data);

  

  const useSelection = async (value) => {
    const results = await geocodeByAddress(value);
    const latLong = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLong);
    console.log(latLong);
    //console.log(data);
  };

  return (
    <div>
      <div className="currentWeather">
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={useSelection}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <form action="" className="searchLoc">
                <input
                  {...getInputProps({
                    placeholder: "search",
                    id: "search",
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <button className="searchBar__button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>

              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  // const style = suggestion.active
                  //   ? { backgroundColor: "red"}
                  //   : { backgroundColor: "#00000", cursor: "pointer",borderRadius: "20px"};
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
              <CurrentW address={address} coordinates={coordinates} data={data} setData={setData} setLoading={setLoading}/>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      {!loading && <MyFutureW data = {data}/>}
    </div>
  );
}

export default App;

