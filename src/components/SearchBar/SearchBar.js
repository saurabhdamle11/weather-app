import React from 'react'
import { Box, TextField, Button, Autocomplete} from '@mui/material'
import { useState } from 'react'

const cities = [
  "Amsterdam", "Austin", "Bangkok", "Barcelona", "Beijing", "Berlin", "Bogota",
  "Boston", "Buenos Aires", "Cairo", "Chicago", "Dallas", "Delhi", "Denver",
  "Dubai", "Hong Kong", "Houston", "Istanbul", "London", "Los Angeles",
  "Madrid", "Mexico City", "Miami", "Moscow", "Mumbai", "New York", "Paris",
  "Philadelphia", "Phoenix", "Rio de Janeiro", "Rome", "San Diego", "San Francisco",
  "Sao Paulo", "Seattle", "Seoul", "Shanghai", "Singapore", "Sydney", "Tokyo", "Toronto"
];

const SearchBar = ({ onSearch }) => {

    const [city,setCity] = useState("");
    const [selected, setSelected] = useState(null);

    const handleSearch = () => {
        if(!city.trim()){
            return;
        }
        onSearch(city);
    };

    return (
        <Box display="flex" gap={2} mb={3}>
            <Autocomplete
                options={cities}
                freeSolo
                value={selected}
                onChange={(event, newValue) => {
                    setSelected(newValue);
                    if (typeof newValue === 'string') setCity(newValue);
                    else if (newValue === null) setCity('');
                }}
                inputValue={city}
                onInputChange={(event, newInputValue) => setCity(newInputValue)}
                filterOptions={(options, state) => {
                    const input = state.inputValue ? state.inputValue.trim().toLowerCase() : '';
                    if (!input) return [];
                    return options.filter((opt) => opt.toLowerCase().includes(input));
                }}
                openOnFocus={false}
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="Enter City"
                    size="small"
                    variant="outlined"
                    fullWidth
                />
                )}
                sx={{ flex: 1 }}
            />
            <Button variant="contained" onClick={handleSearch}>
                Search
            </Button>
        </Box>
    )
}

export default SearchBar
