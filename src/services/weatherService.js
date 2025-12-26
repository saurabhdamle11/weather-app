import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/weather/${city}`);
        
        console.log("API response:", response.data);
        console.log("Cached:", response.data.cached);
        console.log("Remaining calls:", response.data.stats.remainingCalls);
        
        return response.data.data;
    } catch (error) {
        console.error("Weather API error:", error.response?.data || error.message);
        throw error;
    }
};