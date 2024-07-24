// Icons
import DateIcon from "../assets/svg/DateIcon";
import TempIcon from "../assets/svg/TempIcon";
import LocationIcon from "../assets/svg/LocationIcon";

const Card = ({ cardData }) => {
  return (
    <>
      {Object.keys(cardData).length > 0 && (
        <div className="card">
          <LocationIcon />
          <div className="card-info">
            <div className="city-info">
              <h3 className="city-name">
                {cardData.name || "There is No Name"}
              </h3>
              <p className="city-temp">
                <TempIcon />
                {cardData.main?.temp}°F
              </p>
            </div>
            <p className="coords">
              Latitude: {cardData.coord.lat}, Longitude: {cardData.coord.lon}
            </p>
            <p className="date">
              <DateIcon />
              {new Date().toLocaleDateString("en-US", {})}
            </p>
            <p className="weather-desc">
              {cardData?.weather[0]?.description} , {cardData.main?.humidity} %
              Humidity
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
