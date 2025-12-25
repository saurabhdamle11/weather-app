import { Card, Typography, CardContent } from '@mui/material'

const WeatherCard = ({ weather }) => {

  if (!weather) return null;

  return (
    <Card
      sx={{
        maxWidth: 420,
        mx: 'auto',
        mt: 4,
        borderRadius: 4,
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      }}
    >
      <CardContent sx={{ textAlign: 'center', py: 4 }}>
        {/* City Name */}
        <Typography variant="h5" gutterBottom>
          {weather.city}
        </Typography>

        {/* Temperature */}
        <Typography
          variant="h2"
          sx={{ fontWeight: 600 }}
        >
          {Math.round(weather.temp)}°C
        </Typography>

        {/* Weather Description */}
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ mt: 1, textTransform: 'capitalize' }}
        >
          {weather.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
