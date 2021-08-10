import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { ACTIONS } from './Dashboard';

let UxSelect = ({ dispatch, quality }) => {
  let [open, setOpen] = useState(false);

  return (

    <Select
      labelId="demo-controlled-open-select-label"
      id="demo-controlled-open-select"
      open={open}
      value={quality}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onChange={(e) => dispatch({ type: ACTIONS.Select, payload: { quality: e.target.value } })}
      style={{ width: '200px' }}
    >
      <MenuItem value={1}>Low</MenuItem>
      <MenuItem value={2} >Normal</MenuItem>
      <MenuItem value={3} >High</MenuItem>
    </Select>

  );
};

export default UxSelect;