import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCard from './components/WeatherCard/WeatherCard';
import { getWeatherByCity } from './services/weatherService';
import { Container, Box, Typography, CircularProgress, Alert } from "@mui/material";



function App() {

	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	

	const handleSearch = async (city)=>{
		try{
			console.log("City searched:", city);
			setLoading(true);
			setError("");

			const data = await getWeatherByCity(city);
			setWeather({
				city:data.name,
				temp:data.main.temp,
				description:data.weather[0].descripption,
			});
		}
		catch(err){
			setError("City not found!");
			setWeather(null);
		}
		finally {
		setLoading(false);
		}
	};

	return (
	<Container maxWidth="sm">
		<Box
		minHeight="100vh"
		display="flex"
		flexDirection="column"
		justifyContent="center"
		>
		{/* Title */}
		<Typography
			variant="h4"
			align="center"
			gutterBottom
		>
			Weather App 🌤️
		</Typography>

		{/* Search */}
		<SearchBar onSearch={handleSearch} />

		{/* Loading */}
		{loading && (
			<Box display="flex" justifyContent="center" mt={2}>
			<CircularProgress />
			</Box>
		)}

		{/* Error */}
		{error && (
			<Box mt={2}>
			<Alert severity="error">{error}</Alert>
			</Box>
		)}

		{/* Weather Card */}
		<Box mt={3}>
			<WeatherCard weather={weather} />
		</Box>
		</Box>
	</Container>
	);

}

export default App;
