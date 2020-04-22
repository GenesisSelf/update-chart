import React from 'react';
import TableComponent from './components/table';
import './App.css';
import SliderRange from './components/slider'
import { Header } from './components/header'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lowerBound: 1926,
      upperBound: 2019,
      value: [ 1926, 2019 ],
    };
  }
  
  logging = value => {
    console.log(value); //eslint-disable-line
  };

  onSliderChange = value => {
    this.logging(value);
    this.setState({
      value,
    });
  };

  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [ lowerBound, upperBound ] });
  };

  render() {
    return(
        <div className="App">
            <Header />
            <SliderRange value={ this.state.value } onChange={ this.onSliderChange } />
            <TableComponent value={ this.state.value } />
        </div>
    );
  }
}