import React, { Component } from 'react'

import Home from'./Home'
import{Link} from 'react-router-dom'

import {Switch,Route} from 'react-router-dom'
import ExpertComponent from './ExpertComponent'
import Footer from './Footer'
import AnswerQuestion from './AnswerQuestion'
import ViewAnswers from './ViewAnswers'


export default class Account extends Component {
    constructor(props) {
        super(props)
            this.state = {
                //aadharid:this.props.location.state.aadharid
            }

    }

    componentDidMount()
    {
       //console.log("just got mounted")
        let routeState
        if(this.props.location.state){
            localStorage.setItem('routeState', JSON.stringify(this.props.location.state))
            routeState = this.props.location.state
           // console.log("in first if")
        } 
        else 
        {
           // console.log("in first else")
            routeState = localStorage.getItem('routeState')
            if(routeState){ routeState = JSON.parse(routeState) ;    }

        }

        // if(routeState){
        //    this.setState({aadharid:routeState.aadharid})//use routeState ahead
        //   // console.log("in 3 if")
        // } else {
        //     //Prompt no data.
        // }
    }
    render(props) {
    
        return (
            <div>

            {//nav div here
            }
            <div className="topnav" style={{position:"sticky"}}>
              <Link to="/accountexpert">Home</Link>
              <Link to="/issuewarning">Issue Warning</Link>
              <Link to="/viewwarning">View Warning</Link>
            
              <Link to="/signinexpert"><button style={{fontSize:"17px",color:"#ffffff",align:"right"}}><i class="fa fa-sign-out"></i></button></Link>
              
          </div><br/> 
            


            <Switch>
                <Route exact path={`${this.props.match.path}/accountexpert`}
                render={(props) => (<ExpertComponent {...props} aadharid={this.state.aadharid} />)} > </Route>
               
               <Route path={`${this.props.match.path}/viewanswers`} 
                render={(props) => (<ViewAnswers {...props} aadharid={this.state.aadharid} />)} ></Route>
                <Route path={`${this.props.match.path}/answerquestion`} 
                render={(props) => (<AnswerQuestion {...props} aadharid={this.state.aadharid} />)} ></Route>
                <Route path={`${this.props.match.path}/`} 
                render={(props) => (<ExpertComponent {...props} aadharid={this.state.aadharid} />)} ></Route>
            </Switch>
             {/* <Switch>
               
                <Route path={`${this.props.match.path}/expertcomponent`} 
                render={(props) => (<ExpertComponent {...props} aadharid={this.state.aadharid} />)} ></Route>
            </Switch>  */}
            <Footer/>
        </div>
        )
    }
}
