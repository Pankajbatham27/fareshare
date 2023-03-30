import classes from "./Booking.module.css";
import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import dynamic from "next/dynamic";
import Script from "next/script";
import Link from "next/link";

const Booking = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [addressPickup, setAddressPickup] = useState("");
  const [addressDrop, setAddressDrop] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });
  const [coordinatesDrop, setCoordinatesDrop] = useState({
    lat: null,
    lng: null
  });

  const handleSelect = async (address) => {
    const result = await geocodeByAddress(address);
    const coordinatesResult = await getLatLng(result[0]);
    setAddressPickup(address);
    setCoordinates(coordinatesResult);
  };

  const handleSelectDrop = async (address) => {
    const result = await geocodeByAddress(address);
    const coordinatesResult = await getLatLng(result[0]);
    setAddressDrop(address);
    setCoordinatesDrop(coordinatesResult);
  };

  // const DynamicPlaceScript = dynamic(() => import("./PlaceScript"), {
  //   ssr: false,
  // });

  return (
    <div className={classes.bookingAddress}>

      {/* <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiqx0MaSS3QybaU4NH9iehcbro6r92nD8&libraries=places" onLoad={() => {
        setScriptLoaded(true);
      }} />

      {scriptLoaded && (
        <PlacesAutocomplete
          value={addressPickup}
          onChange={setAddressPickup}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <div key={suggestions.description} className={classes.inputGroup}>
                <input
                  value={addressPickup}
                  {...getInputProps({
                    placeholder: "Pickup Location",
                    className: "location-search-input",
                  })}
                />
              </div>

              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "lime", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      key={suggestion.description}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      )}

      {scriptLoaded && (
        <PlacesAutocomplete

          value={addressDrop}
          onChange={setAddressDrop}
          onSelect={handleSelectDrop}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <div key={suggestions.description} className={classes.inputGroup}>
                <input
                  value={addressDrop}
                  {...getInputProps({
                    placeholder: "Drop Location",
                    className: "location-search-input",
                  })}
                />
              </div>

              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "lime", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      key={suggestion.description}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      )} */}

      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h5 className="mb-3">Join Fare Share today and let us help you share the ride, save money and eliminate the stress of your daily commute!</h5>
          </div>
          <div className="col-md-3">
            <div>
            <Link href='https://book.fareshare.in'>
              <button className={classes.customButton}>
                <div className="d-flex justify-content-between">
                  <div><a target='_blank' className="text-light">BOOK NOW</a></div>
                  <div>
                    <i className="fa fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Booking;
