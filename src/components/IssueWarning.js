import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import DatePicker from "react-datepicker";

export default class IssueWarning extends Component {

    constructor (props){
        super(props)
        console.log("Warning")
        console.log(props)
        this.state={
            type:'Pest',
            info:'',
            date:'',
            crop:'',
            sentData:'0'

        }

    }
    handleChange = date => {this.setState({date});};
    submitHandler =(e) =>{ 
        e.preventDefault() ;
        this.setState({sentData:'1'})
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => { console.log(response)})
        .catch(error => { console.log(error)})
    }

    handleType = (event) =>{   this.setState({type:event.target.value})    }    
    handleWarning = (event) =>{   this.setState({warning:event.target.value})    }   

    render() {
        if(this.state.sentData==="1")
            return <Redirect to={'/accountexpert'}/> 
        const mystyle = {
            
            padding: "10px",
            fontFamily: "Arial",
            width:"15pc",
            
          };

         
        return (
        
            <div>

                  <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                <form onSubmit={this.submitHandler} >
                 


                 <div>
                     <label><b>Choose type of warning</b></label>
                     <div col-lg-5></div>
                 <select value={this.state.type} onChange={this.handleType} style={mystyle}>
                     <option value="Pest">Pest Warning</option>
                     <option value="Weather">Weather Warning</option>
                     <option value="General">General Warning</option>
                 </select>
                 <br/><br/>
                 </div>
                 <label><b>Enter warning</b></label>
                 <div className="wrap-input100 rs1 validate-input">
                         <input className="input100" type="textarea" name="Amount" value={this.state.warning} onChange={this.handleWarning}></input>
                         <span className="focus-input100-1"></span>
                         <span className="focus-input100-2"></span>

                </div>

                <div>
                <label><b>Date : &emsp;</b></label>
                     {/* <input type="date"  selected ={this.state.date} onChange={this.handleChange}/>  */}
                     <DatePicker
                        selected={this.state.date}
                        onChange={this.handleChange}
                        dateFormat="yyyy-MM-dd"
                     /> 

                    </div>

                <div className="container-login100-form-btn m-t-20">
                         <button className="login100-form-btn">
                             Submit
                         </button>
                     </div>

                 
             </form>
                
                </div>
                </div>
                </div>
                </div>
        )
    }
}
