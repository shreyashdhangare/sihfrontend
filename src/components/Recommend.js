import React, { Component } from 'react'
import axios from 'axios'
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
import {Link,Redirect} from 'react-router-dom'


export class SignIn extends Component {
    constructor(props) {
        super(props)
    
            this.state = {
                State_Name:"",
                District_Name:"",
                Season:"",
                Crop:""
            }
    }
    
    submitHandler =(e) =>{ 
        e.preventDefault() ;
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => { 
        console.log(response.data)
        if(response.data.id===101)
        {
            this.setState({auth:1})
        }
     })
        .catch(error => { console.log(error)})
    }
    changeHandler = (event) =>{   this.setState({[event.target.name]:event.target.value})    }
    render() {

        if(this.state.auth===1)
        {
            return <Redirect to={{
                pathname: '/account/getyeild',
                state: { aadharid: this.state.aadharid }
            }}/>
        }
        const {District_Name,State_Name,Crop,Season}=this.state
        return (
            <div><div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                    <form className="login100-form validate-form" onSubmit={this.submitHandler}>
                        <span className="login100-form-title p-b-33">
                            Input Detail
                        </span>


                       <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="State_Name" value={State_Name} onChange={this.changeHandler} placeholder="State"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div><br/>

                       <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="District_Name" value={District_Name} onChange={this.changeHandler} placeholder="District"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="Crop" value={Crop} onChange={this.changeHandler} placeholder="Crop"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="Season" value={Season} onChange={this.changeHandler} placeholder="Season"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="container-login100-form-btn m-t-20">
                            <button className="login100-form-btn">
                                Get Recommendation
                            </button>
                        </div>

                        <div className="text-center">
                        </div>
                    </form>
                </div>
            </div>
        </div></div>
            // <div>
            //     <form onSubmit={this.submitHandler}>
            //         <div>
            //         name: <input type="text" name="fullname" value={fullname} onChange={this.changeHandler}/>
            //         </div>
            //         <div>
            //          A-ID   <input type="text" name="aadharid" value={aadharid} onChange={this.changeHandler}/>
            //         </div>
            //         <div>    
            //          add   <input type="text" name="address" value={address} onChange={this.changeHandler}/>
            //         </div>
            //         <button type="submit">submit</button>
            //     </form>

            // </div>
        )
    }
}

export default SignIn
