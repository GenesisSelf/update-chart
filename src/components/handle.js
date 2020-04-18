import React from "react";
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;


const handleOnChange = (e) => console.log(e.value)

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
    handleOnChange(value)
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export default handle;