import React, { Component } from 'react'
import axios from 'axios';
import './resources/vendor/bootstrap/css/bootstrap.min.css'


export default class ViewWarning extends Component {

    constructor(props) {
        super(props)
        
        this.state = ( {
             posts : []
        })
    }
    
     componentDidMount () {
         //axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:"123456789012"}})
         axios.get('https://jsonplaceholder.typicode.com/posts?userId=1',{params:{aadharid:"123456789012",type:"asd"}})
         .then(Response =>{
             console.log(Response)
             this.setState ({posts:Response.data})
         })
         .catch(error =>{
             console.log(error)
         })
     }

    render() {
        const {posts} = this.state
        return (
            <div class="container-fluid" >
                <div class="row" style={{height:"10vh"}}></div>
                <div class="container"  >
                    <div class="row" style={{height:"7vh",backgroundColor:"#e0dede",borderRadius:"20px"}}>
                        <div class="col-lg-4"></div>
                        <div class="col-lg-5"><h3>Weather Warnings</h3></div>
                    </div>
                    <div class="row" style={{height:"1vh"}}></div>

                    
                    {
                        
                        posts.length ?
                        posts.map( posts => 
                                <div key = {posts.id}>
                 <div class="row" style={{backgroundColor:"#e0dede",borderRadius:"20px"}}><p style={{padding:"10px",color:"#d61c1f"}}>Warning 1 goes here</p></div>
                 <div class="row" style={{height:"1vh"}}></div>

                                </div> )  :
                        null    
                    }

                   
                </div>
                
                <div class="row" style={{height:"10vh"}}></div>
                <div class="container">
                    <div class="row" style={{height:"7vh",backgroundColor:"#e0dede",borderRadius:"20px"}}>
                        <div class="col-lg-4"></div>
                        <div class="col-lg-5"><h3>Pest Attack Warnings</h3></div>
                    </div>
                    <div class="row" style={{height:"1vh"}}></div>

                    {
                        
                        posts.length ?
                        posts.map( posts => 
                                <div key = {posts.id}>
                 <div class="row" style={{backgroundColor:"#e0dede",borderRadius:"20px"}}><p style={{padding:"10px",color:"#d61c1f"}}>Warning 1 goes here</p></div>
                 <div class="row" style={{height:"1vh"}}></div>

                                </div> )  :
                        null    
                    }

                </div>

                <div class="row" style={{height:"10vh"}}></div>
                <div class="container">
                    <div class="row" style={{height:"7vh",backgroundColor:"#e0dede",borderRadius:"20px"}}>
                        <div class="col-lg-4"></div>
                        <div class="col-lg-5"><h3>General Warnings</h3></div>
                    </div>
                    <div class="row" style={{height:"1vh"}}></div>

                    {
                        
                        posts.length ?
                        posts.map( posts => 
                                <div key = {posts.id}>
                 <div class="row" style={{backgroundColor:"#e0dede",borderRadius:"20px"}}><p style={{padding:"10px",color:"#d61c1f"}}>Warning 1 goes here</p></div>
                 <div class="row" style={{height:"1vh"}}></div>

                                </div> )  :
                        null    
                    }

                </div>
            </div>
        )
    }
}
