import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme } from '@mui/material/styles';
import './RangeSlider.css';

function valuetext(value) {
  return `${value}mi`;
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4b4d46',
      light: '#d1d4c7',
      dark: '#11120e',
    },
    text: {
      primary: '#11120e',
    },
  },
});

export default function RangeSlider(props) {
  const [value, setValue] = useState([1, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.fetchRoutes({
      ...props.params,
      distance: newValue,
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
    <Box theme={theme} sx={{ width: 250 }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={1}
        max={10}
        marks={marks}
        className="distance-slider"
        theme={theme}
      />
    </Box>
  );
}
