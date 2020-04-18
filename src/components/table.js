import React, { Component } from "react";
import data from "../history";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SliderRange from './slider'

export default class TableComponent extends Component {
    // constructor(props) {
    //     super(props)
    // }
    // sortData = (data) => {
    //     const ascendingOrderOfYearArray = []
    //     data.sort((a, b) => {
    //         const sortedData = a.year - b.year
    //         ascendingOrderOfYearArray.append(sortedData)
    //         return ascendingOrderOfYearArray
    //     }
    //     // return data.map((row, index)=> {

    //     //     return <tr key={index}>
    //     //         <td>{row.year}</td>
    //     //         <td>{row.totalReturn}</td>
    //     //     </tr>
    //     )
    // }

    // checkNegativeValues = (string) => {
    //     const firstChar = string.slice()
    //     if (firstChar == '-') {
        //new function to change text colour
    //         return style.color = "red"
    //     }
    // }
    // calculateSum(data) {
    //     let currentData = []
    //     currentData = data
    //     currentData.totalReturn.reduce((totalReturn, sum) => {
    //         return totalReturn++
    //     }, 0)
    //     return currentData
    // }
    // // sortMinAndMaxValues(data) {
    // //     data.map((data.year, index) => {
    // //         let arrayOfYears = []
    // //         // data.sort()
    // //         arrayOfYears.bind(data.year)
    // //         console.log(arrayOfYears, "years")
    // //     })
    // // }
    // onChange(selection) {
    //     const { data, onChange } = this.props;
    //     const sortedData = data.sort((a, b) => (a-b) - (b-a));
    //     // let max = sortedData.pop()
    //     // let min = sortedData.shift()
    //     // return min && max

    //     //update chart to display row with object info
    // }

    displayHandles() {
        // let a = element.getAttribute("aria-valuenow")
        // let b = document.getElementsByClassName("rc-slider-handle-2")[1].__reactEventHandlers$jvv5prb4bx.onKeyDown.aria-valuenow

        // console.log(b, "MEOWOWOW")
        // return b
    }

    render() {
        return(
        <div>
            <p>S&P 500 Total Returns by Year</p>
            <SliderRange/>
            <TableContainer component={Paper}>
                <Table className="tableStyle" aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Year</TableCell>
                        <TableCell align="right">Total Returns</TableCell>
                        <TableCell align="right">Cumulative Total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data, index) => (
                        <TableRow key={data.year}>
                            <TableCell component="th" scope="row">{data.year}</TableCell>
                            <TableCell align="right">{data.totalReturn}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )};
}
