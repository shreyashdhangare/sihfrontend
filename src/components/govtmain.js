import React, {Component} from 'react'
import Chart from './Chart'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import Navbarganesh from './Navbarganesh'
import govtschemes from './govtschemes';
import government from './government';
import broadcast from './broadcast';
import govtmsp from './govtmsp'

class govtmain extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{}
        }
    }
    render(){
        return(

            <React.Fragment>
               
               <Navbarganesh
                 text1="Home" Link1={`${this.props.match.path}/government`}
                 text2="Schemes" Link2={`${this.props.match.path}/govtschemes`}
                 text3="Broadcast" Link3={`${this.props.match.path}/broadcast`}
                 text4="Minimum Support Price" Link4={`${this.props.match.path}/govtmsp`}/> 
                  <Switch>
                  <Route  exact path={`${this.props.match.path}/`} component={government}></Route>
                    <Route  exact path={`${this.props.match.path}/government`} component={government}></Route>
                    <Route path={`${this.props.match.path}/broadcast`} component={broadcast}></Route>
                    <Route  exact path={`${this.props.match.path}/govtschemes`} component={govtschemes}></Route>
                    <Route path={`${this.props.match.path}/govtmsp`} component={govtmsp}></Route>

                </Switch>  

                       
            </React.Fragment>
        );
    }
}
export default govtmain