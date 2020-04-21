import React from "react";
import data from "../history";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

let arr = []
let vals = 0

class TableComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        }
        this.sortDataInAscendingOrder(data)
    }

    sortDataInAscendingOrder(data) {
        data.sort((a, b) => {
            let temp = 0

            if (a.year > b.year) {
                temp = 1
            } else if (b.year > a.year) {
                temp = -1
            } else {
                temp = 0
            }
            return temp
        })
    }

    roundDecimals(num) {
        return Math.round(num * 100) / 100
    }

    filterValues(data) {
        arr = []
        vals = 0

        const value = this.props.value
        const min = value[0]
        const max = value[1]

        return data.map((data, index) => {

            if ((data.year <= max) && (data.year >= min)) {
                return this.display(data)
            }
        })
    }

    display(data) {
        let totals = parseFloat(data.totalReturn)
        this.calculateSum(totals)

        return (
            <TableRow hover={true} key={data.year}>
                <TableCell component="th" scope="row">{data.year}</TableCell>
                <TableCell align="right" style={this.checkIfNegativeValues(data.totalReturn)}>{data.totalReturn}</TableCell>
                <TableCell align="right">{this.roundDecimals(arr.slice(-1))}</TableCell>
            </TableRow>
        )
    }

    checkIfNegativeValues = (num) => {
        const style = {
            color: "red"
        }

        if (num < 0) {
            return style
        }
    }

    calculateSum(data) {
        vals += data
        return arr.push(vals)
    }

    render() {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table className="tableStyle" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Year</TableCell>
                                <TableCell align="right">Total Returns</TableCell>
                                <TableCell align="right">Cumulative Returns</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.filterValues(data)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    };
}

export default TableComponent