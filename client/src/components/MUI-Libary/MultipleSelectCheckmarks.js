import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import './MultipleSelectCheckmarks.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      width: 200,
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
    props.setParams((prevParams) => {
      return {
        ...prevParams,
        [props.paramKey]: value,
      };
    });
    props.fetchRoutes();
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200 }} className="form-control">
        <InputLabel id="demo-multiple-checkbox-label">{props.label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={values}
          onChange={handleChange}
          input={<OutlinedInput label={props.label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {props.values.map((val) => (
            <MenuItem key={val} value={val}>
              <Checkbox checked={props.params.indexOf(val) > -1} />
              <ListItemText primary={val} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
