import React from 'react'
import { Box, TextField, Button} from '@mui/material'
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {

    const [city,setCity] = useState("");

    const handleSearch = () => {
        if(!city.trim()){
            return;
        }
        onSearch(city);
    };

    return (
        <Box display="flex" gap={2} mb={3}>
            <TextField
            label="Enter City"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <Button
            variant="contained"
            onClick={handleSearch}
            >
            Search
            </Button>
        </Box>
    )
}

export default SearchBar
