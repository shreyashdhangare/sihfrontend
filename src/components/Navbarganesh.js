import React, { Component } from 'react'
import './resources/css/navbar.css'
import {Link} from 'react-router-dom'
class Navbarganesh extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    static defaultProps={
        Link1:"/account/home",
        Link3:"/account/myfarm",
        Link2:"/",
        Link4:"/",
        text1:"Home",
        text2:"Feed",
        text3:"My Farm",
        text4:"My finance",


        displayLegend:true,
        legendPosition:'right'
    }

    render() {
        return (
            <div>
                <div className="topnav">
                     <Link to={this.props.Link1}>{this.props.text1}</Link>
                    <Link to={this.props.Link2}>{this.props.text2}</Link>
                    <Link to={this.props.Link3}>{this.props.text3}</Link>
                    <Link to={this.props.Link4}>{this.props.text4}</Link>
                </div>
            </div>
        )
    }
}
export default Navbarganesh
