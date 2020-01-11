import React, { Component } from 'react'

import Home from'./Home'
import {Switch,Route} from 'react-router-dom'
import ExpertComponent from './ExpertComponent'
import Footer from './Footer'

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
                <ExpertComponent/> 
               
                 {/* <Switch>
                   
                    <Route path={`${this.props.match.path}/expertcomponent`} 
                    render={(props) => (<ExpertComponent {...props} aadharid={this.state.aadharid} />)} ></Route>
                </Switch>  */}
                <Footer/>
            </div>
        )
    }
}
