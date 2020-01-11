import React, { Component } from 'react'
import axios from 'axios';

import { Redirect } from 'react-router-dom'

export default class AnswerQuestion extends Component {

    constructor (props){
        super(props)
        console.log("Finance")
        console.log(props)
        this.state={
            Type:'',
            Answer:'',
            sentData:"0"

        }

    }


    submitHandler =(e) =>{
        e.preventDefault() ;
        console.log(this.state)
        this.setState({sentData:'1'})
        //http://192.168.43.233:8080/forum/show/question
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => { console.log(response)})
        .catch(error => { console.log(error)})

    }

    handleType=(event)=>{this.setState({Answer:event.target.value})}
    render() {
        if(this.state.sentData==="1")
            return <Redirect to={'/accountexpert'}/>


        return (
            <div>
               {/* <div className="limiter">*/}
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                    <form  className="login100-form validate-form" onSubmit={this.submitHandler}>
                        {/* <span className="login100-form-title p-b-33">
                            Answer this question
                        </span> */}

                        <div class="row">
                            <div class="col-lg-2"></div>
                            Question goes here
                        </div><br/>
                        <div class="row">
                            <div class="col-lg-2"></div>
                        <textarea name="answer" rows="10" cols="30" style={{backgroundColor:"#e6e9eb",padding:"10px"}} onChange={this.handleType}>Answer goes here</textarea>
                        </div>
                        <div className="container-login100-form-btn m-t-20">
                        {/* <Link to={"/accountexpert"}> <button className="login100-form-btn">
                                Submit
                            </button></Link> */}
                            <button className="login100-form-btn">
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </div>
         {/* </div> */}
          </div>
        )
    }
}
