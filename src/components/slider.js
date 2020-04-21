import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const wrapperStyle = { 
  paddingTop: 20,
  paddingBottom: 40,
  paddingLeft: 10,
  paddingRight: 10 
};

class SliderRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: 1926,
      upperBound: 2019,
      value: [1926, 2019],
    };
  }

  render() {
    return (
      <div style={wrapperStyle}>
        <Range min={this.state.lowerBound} max={this.state.upperBound} defaultValue={[1926, 2019]} tipFormatter={(value) => `${value}`} allowCross={false} onChange={this.props.onChange} value={this.props.value} />
      </div>
    )};
}

export default SliderRange;