import React, { Component } from 'react'
import axios from 'axios';
export default class ViewAnswers extends Component {

    constructor(props) {
        super(props)
        
        this.state = ( {
             posts : []
               
        })
    }
    
     componentDidMount () {
         //axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:"123456789012"}})
         axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:"123456789012",type:"asd"}})
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
            <div>
                <div class="container">
                    <div class="row" style={{height:"3vh"}}></div>
                    <div class="row" >
                        <div class="col-lg-3"></div>
                        <div class="col-lg-6"><h2>Search for satisfactory answer here</h2></div>
                    </div>
                    <div class="row" style={{height:"5vh"}}></div>
                    <div class="row" style={{backgroundColor:"#d3d3d3"}}>
                       
                        <div class="col-lg-5">
                            <p style={{fontSize:"20px",padding:"10px"   }}>QUESTION : </p>
                        </div>
                    </div>


                    {
                        
                        posts.length ?
                        posts.map( posts => 
                                <div key = {posts.id}>
                                    <div class="row" style={{height:"5vh"}}></div>
                        <div class="row" style={{backgroundColor:"#d3d3d3"}}>
                           
                            <div class="col-lg-5">
                        <p style={{padding:"10px",fontSize:"20px"}}>{posts.title}</p>
                            </div>
                        </div>


                                </div> )  :
                        null    
                    }
                    </div>
                </div>
            
        )
    }
}
