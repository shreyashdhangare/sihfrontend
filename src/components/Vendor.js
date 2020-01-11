import React, {Component} from 'react'
import Chart from './Chart'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import Navbarganesh from './Navbarganesh'
import vendoraddcrops from './vendoraddcrops'
import vendorbuycrops from './vendorbuycrops'
import vendorshowmsp from './vendorshowmsp'
import vendorviewprices from './vendorviewprices'
import FeedComponent from './FeedComponent'






class Vendor extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <React.Fragment>
               
            <Navbarganesh
              text1="Add crops" Link1={`${this.props.match.path}/vendoraddcrops`}
              text2="Buy crops" Link2={`${this.props.match.path}/FeedComponent`}
              text3="View prices" Link3={`${this.props.match.path}/vendorviewprices`}
              text4="Minimum Support Price" Link4={`${this.props.match.path}/vendorshowmsp`}/> 
               <Switch>
                 
                 <Route  exact path={`${this.props.match.path}/vendoraddcrops`} component={vendoraddcrops}></Route>
                 <Route path={`${this.props.match.path}/FeedComponent`} component={FeedComponent}></Route>
                 <Route  exact path={`${this.props.match.path}/vendorviewprices`} component={vendorviewprices}></Route>
                 <Route path={`${this.props.match.path}/vendorshowmsp`} component={vendorshowmsp}></Route>

             </Switch>  

                    
         </React.Fragment>
        );

    }
}
export default Vendor