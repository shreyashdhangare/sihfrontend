import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class GetYield extends Component {
    
    state={
        gotData:"0",
        prediction:this.props.state.prediction
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
        return (
            <div>
                
                <div className="card my-4">
                        <h5 className="card-header">Prediction</h5>
                        <div className="card-body">
                            
                        <div className="row-lg-2">
                                    <div className="col-lg-6">

                                   
                                <ul className="list-unstyled mb-0">
                                    <li>{posts.username}</li>
                                </ul>
                                    </div>
                                </div>
                           
                        </div>
                        </div>


            </div>
        )
    }
}
