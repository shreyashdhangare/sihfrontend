import React, { Component } from 'react'

import axios from 'axios';
import TimePicker from 'react-time-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



import './resources/vendor/bootstrap/css/bootstrap.min.css'
import './resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './resources/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import './resources/vendor/animate/animate.css'
import './resources/vendor/css-hamburgers/hamburgers.min.css'
import './resources/vendor/animsition/css/animsition.min.css'
import './resources/vendor/select2/select2.min.css'
import './resources/vendor/daterangepicker/daterangepicker.css'
import './resources/css/util.css'
import './resources/css/main.css'

export default class Finance extends Component {
    constructor (props){
        super(props)
        console.log("Finance")
        console.log(props)
        this.state={
            aadharid:this.props.aadharid,
            farmid:'1234',
            Type:'Expense',
            Source:'',
            Amount:'',
            Receipt:'',
            time:'00:00:00',
            date:new Date('2019-01-01'),

        }

    }
    
    submitHandler =(e) =>{ 
        e.preventDefault() ;
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => { console.log(response)})
        .catch(error => { console.log(error)})
    }

    handleChange = date => {this.setState({date});};
    onChange = time => this.setState({ time })
    handleAmount = (event) =>{   this.setState({Amount:event.target.value})    }    
    handleSource = (event) =>{   this.setState({Source:event.target.value})    }       
    handleType=(event)=>{this.setState({Type:event.target.value})}
    render() {

        const mystyle = {
            
            padding: "10px",
            fontFamily: "Arial",
            width:"15pc",
            
          };

        const {Type,Source,Amount,Date,Time}=this.state
        return (
            <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label><b>Choose type</b></label>
                        <div col-lg-5></div>
                    <select value={this.state.type} onChange={this.handleType} style={mystyle}>
                        <option value="Expense">Expense</option>
                        <option value="Income">Income</option>
                    </select>
                    </div>
                    <div> <br></br> </div>
                 
                    <label><b>Source</b></label>
                    <div className="wrap-input100 rs1 validate-input">
                            <input className="input100" type="text" name="Source" value={this.state.source} onChange={this.handleSource}></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                    </div>

                    <div><br></br> </div>

                    <label><b>Amount</b></label>
                    <div className="wrap-input100 rs1 validate-input">
                            <input className="input100" type="text" name="Amount" value={this.state.amount} onChange={this.handleAmount}></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                    </div>

                    <div><br></br> </div>
                    <div>
                    <label><b>Date  &emsp;</b></label>
                     {/* <input type="date"  selected ={this.state.date} onChange={this.handleChange}/>  */}
                     <DatePicker
                        selected={this.state.date}
                        onChange={this.handleChange}
                        dateFormat="yyyy-MM-dd"
                     /> 

                    </div>
                    <br/>
                    <div>
                        <label><b>Time</b></label>
                        <TimePicker
                        onChange={this.onChange}
                        value={this.state.time}
                        />
                   </div>
                   <br/>
                   <div className="container-login100-form-btn m-t-20">
                            <button className="login100-form-btn">
                                Submit
                            </button>
                        </div>

                    
                </form>
                </div>
                </div>
                </div>
        )
    }
}

