import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from'./Home'
import {Switch,Route} from 'react-router-dom'
import MyFarm from './MyFarm'
import AddFarm from './AddFarm'
import Feed from './Feed'
import PostQuestion from './PostQuestion'
import FarmDetails from './FarmDetails'
import AddCrop from './AddCrop'
import selectAddCrop from './selectAddCrop'
import Footer from './Footer'
import Finance from './Finance'
import Schemes from './Schemes'
import SchemeInfo from './SchemeInfo'
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

        if(routeState){
           this.setState({aadharid:routeState.aadharid})//use routeState ahead
          // console.log("in 3 if")
        } else {
            //Prompt no data.
        }




        //put this state in store here
        //{}n
    }

    render(props) {
        
        console.log("this is the aadharid"+this.state.aadharid)
        return (
            <div>
                <Navbar/>
                <div>

                <Switch>
                    <Route exact path={`${this.props.match.path}`} component={Home}></Route>
                    <Route exact path={`${this.props.match.path}/home`} component={Home}></Route>
                    <Route path={`${this.props.match.path}/feed`} 
                    render={(props) => (<Feed {...props} aadharid={this.state.aadharid} />)} ></Route>
                    <Route path={`${this.props.match.path}/myfarm`} 
                    render={(props) => (<MyFarm {...props} aadharid={this.state.aadharid} />)} ></Route>
                    <Route path={`${this.props.match.path}/addfarm/:farmNum`}
                    render={(props) => (<AddFarm {...props} aadharid={this.state.aadharid} />)}
                    ></Route> 
                     <Route path={`${this.props.match.path}/finance`}
                    render={(props) => (<Finance {...props} aadharid={this.state.aadharid} />)}
                    ></Route> 
                    <Route path={`${this.props.match.path}/addcrop/:farmid/:cropid`}
                    render={(props) => (<AddCrop {...props} aadharid={this.state.aadharid} />)}
                    ></Route>
                    <Route path={`${this.props.match.path}/postquestion`}
                    render={(props) => (<PostQuestion {...props} aadharid={this.state.aadharid} />)}
                    ></Route>
                    <Route path={`${this.props.match.path}/farmdetails/:farmid`}
                    render={(props) => (<FarmDetails {...props} aadharid={this.state.aadharid} />)}
                    ></Route>
                    <Route exact path={`${this.props.match.path}/selectcrop/:farmid`} component={selectAddCrop}></Route>
                    <Route exact path={`${this.props.match.path}/schemes`} component={Schemes}></Route>
                    <Route exact path={`${this.props.match.path}/scheme-info/:tagname`} component={SchemeInfo}></Route>


                </Switch>
                </div>
                <div>
                <Footer/>
                </div>
            </div>
        )
    }
}
