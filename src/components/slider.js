import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React, { useState } from 'react';
import Slider from 'rc-slider';
import handle from './handle'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const SliderRange = props => {
  // const [value, setValue] = useState(0);
  const wrapperStyle = { paddingTop: 20, paddingBottom: 40, paddingLeft: 10, paddingRight: 10 };
  // console.log(value, "valuesadskjfnkj")

  // const handleOnChange = (e) => console.log(e.target.value)
  function renderValue(value) { return `${value}`}
  return (
    <div style={wrapperStyle}>
      <Range min={1926} max={2019} defaultValue={[1926, 2019]} tipFormatter={(value) => `${value}`} handle={handle} />
    </div>
  )
}

export default SliderRange;