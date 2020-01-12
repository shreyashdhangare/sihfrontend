import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class GetYield extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            gotData:"0",
            prediction:this.props.location.state.prediction
        }

    }
    
    // componentDidMount()
    // {
    //     //axios.get('http://192.168.43.148:8080/farmer/show/scheme/tags')
    //     //axios.get('https://jsonplaceholder.typicode.com/users')
    //     //axios.get('http://192.168.43.233:8080/farmer/show/farm',{params:{aadharid:this.state.aadharid}})
    //     .then(response => {  
    //         console.log(response)
    //     this.setState({posts:response.data,
    //                     gotData:"1"}) 
    //     }
    //     ) 
    //     .catch(
            
    //         error=>{ 
    //             this.setState({error:"No Schemes Found"})
    //             console.log(error) }
    //         )
    // }
    
    render() {
        const {posts} =this.state
        console.log(this.state.prediction+"dwefwefw3frw3rwr")
        return (
            <div>
                <h2>The predicted Yeild is :</h2>
                 <h3>{this.state.prediction}</h3> <h3>in quintals</h3>           
            </div>
        )
    }
}
