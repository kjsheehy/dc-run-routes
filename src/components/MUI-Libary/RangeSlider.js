import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  const [value, setValue] = useState([0, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.updateParams({
      distance: newValue,
    });
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        min={0}
        max={10}
      />
    </Box>
  );
}
