import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Schemes extends Component {
    
    state={
        gotData:"0",
        posts:[]
    }
    componentDidMount()
    {
       //axios.get('http://192.168.43.233:8080/farmer/show/scheme/tags')
        axios.get('https://jsonplaceholder.typicode.com/users')
        //axios.get('http://192.168.43.233:8080/farmer/show/farm',{params:{aadharid:this.state.aadharid}})
        .then(response => {  
            console.log(response)
        this.setState({posts:response.data,
                        gotData:"1"}) 
        }
        ) 
        .catch(
            
            error=>{ 
                this.setState({error:"No Schemes Found"})
                console.log(error) }
            )
    }
    
    render() {
        const {posts} =this.state
        return (
            <div>
                
                <div className="card my-4">
                        <h5 className="card-header">Govt Scheme Categories</h5>
                        <div className="card-body">
                            
                        <div className="row-lg-2">
                                    <div className="col-lg-6">

                                   
                                <ul className="list-unstyled mb-0">
                                    {posts.map(tagarr=> 
                                    
                                       <Link to={{pathname:"/account/scheme-info/"+tagarr.tag}} key={tagarr.id}><li key={tagarr.id}>{tagarr.name}</li></Link> 
                                    
                                        )}
                                </ul>
                                    </div>
                                </div>
                           
                        </div>
                        </div>


            </div>
        )
    }
}
