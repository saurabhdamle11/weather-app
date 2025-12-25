import axios from "axios";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeatherByCity = async (city) => {
    console.log("API KEY:", WEATHER_API_KEY);
    const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: WEATHER_API_KEY,
        units: "metric",
      },
    }
    );
    console.log("API response", response);
    return response.data;
};