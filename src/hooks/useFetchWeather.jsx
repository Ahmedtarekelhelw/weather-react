import { useCallback, useState } from "react";

// Api
import { axiosInstance } from "../api/Api";

const useFetchWeather = () => {
  // State
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [coord, setCorrd] = useState({
    lat: 0,
    lon: 0,
  });

  // Get the Weather Data
  const fetchWeather = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("data/2.5/weather", {
        params: {
          lat: coord.lat,
          lon: coord.lon,
        },
      });

      // checks if this weather data is exist
      const newWeatherData = cards.findIndex((card) => card.id === res.data.id);

      // if it is not add it
      if (newWeatherData === -1) {
        setCards([...cards, res.data]);
        setError("");
      } else {
        setError("This lat and long already exist");
      }
    } catch (error) {
      setError(error.response.data.message || "Invalid Data");
    } finally {
      setLoading(false);
    }
  }, [coord.lat, coord.lon]);
  return {
    fetchWeather,
    cards,
    setCards,
    coord,
    setCorrd,
    error,
    loading,
    setError,
  };
};

export default useFetchWeather;
