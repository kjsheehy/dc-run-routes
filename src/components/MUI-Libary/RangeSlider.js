import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  const [value, setValue] = useState([1, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setParams((prevParams) => {
      return {
        ...prevParams,
        distance: newValue,
      };
    });
  };

  const marks = [
    { value: 1, label: '1 mi' },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10, label: '10 mi' },
  ];

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={1}
        max={10}
        marks={marks}
        className="distance-slider"
      />
    </Box>
  );
}
