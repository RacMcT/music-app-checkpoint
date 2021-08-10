import React from 'react';
import Slider from '@material-ui/core/Slider';
import { ACTIONS } from './Dashboard';

let UxSlider = ({ dispatch, volume }) => {
  
  return (
    <Slider 
      value={volume}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      onChange={(e, newValue) => dispatch({ type: ACTIONS.Slider, payload: { volume: newValue } })}
      step={10}
      marks
      min={10}
      max={100}
    />
  )
};

export default UxSlider;