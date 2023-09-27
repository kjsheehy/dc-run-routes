import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import './MultipleSelectCheckmarks.css';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      paper: '#d1d4c7',
    },
    primary: {
      main: '#4b4d46',
      light: '#d1d4c7',
      dark: '#11120e',
    },
    text: {
      primary: '#11120e',
    },
    action: {
      active: '#4b4d46',
    },
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      width: 200,
      // backgroundColor: 'rgb(239, 240, 232)',
      backgroundColor: 'rgb(239, 240, 232)',
    },
  },
};

export default function MultipleSelectCheckmarks(props) {
  const [values, setValues] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValues(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    props.fetchRoutes({
      ...props.params,
      [props.paramKey]: value,
    });
  };

  return (
    <div>
      <FormControl
        theme={theme}
        sx={{
          m: 1,
          width: 200,
          borderColor: 'rgb(59,60,55)',
          color: 'primary.main',
        }}
        className="form-control"
      >
        <InputLabel theme={theme} id="demo-multiple-checkbox-label">
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={values}
          className="select"
          onChange={handleChange}
          input={<OutlinedInput label={props.label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          theme={theme}
        >
          {props.values.map((val) => (
            <MenuItem theme={theme} key={val} value={val}>
              <Checkbox
                theme={theme}
                checked={props.params[props.paramKey].indexOf(val) > -1}
              />
              <ListItemText theme={theme} primary={val} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
