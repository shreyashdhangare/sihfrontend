import React, { Component } from 'react'
import './resources/vendor/bootstrap/css/bootstrap.min.css'
import MortgageCalculator from "mortgage-calculator-react";
export default class LoanCalculator extends Component {
    render() {
        return (
            <div class="container">
                <MortgageCalculator/>
            </div>
        )
    }
}
