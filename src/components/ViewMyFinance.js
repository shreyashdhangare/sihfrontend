import React, { Component } from 'react'
import axios from 'axios';

import './resources/vendor/bootstrap/css/bootstrap.min.css'


export default class ViewMyFinance extends Component {
    constructor(props) {
        super(props)
        let tempState
        tempState=JSON.parse(localStorage.getItem("routeState"))
        this.state = ( {
             posts : [],
             aadharid:tempState.aadharid
        })
    }
    
     componentDidMount () {
         //axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:"123456789012"}})
         axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:this.state.aadharid,type:"asd"}})
         .then(Response =>{
             console.log(Response)
             this.setState ({posts:Response.data})
         })
         .catch(error =>{
             console.log(error)
         })
     }
 
    render() {
        console.log(this.state.aadharid+"is the aadahr idddddddddd")
        const {posts} = this.state
        return (
            <div class="container">
                <div class="row" style={{height:"2vh"}}></div>
                <div class="row" style={{height:"5vh"}}><h3><b>&emsp;&emsp;Keep a track of your incomes and expenditures</b></h3></div>
            <div class="container">
                {   
                    posts.length ?
                    posts.map( posts => 
                        <div key = {posts.id}>
                            <div class="row" style={{height:"3vh"}}></div>
                            <div class="row" style={{ backgroundColor:"#e0dede"}}>
                                <div class="col-lg-1"></div>
                                <div class="col-lg-6" style={{padding:"10px",fontSize:"20px"}}>{posts.title}</div>
                                <div class="col-lg-1"></div>
                                { 
                                    (posts.title === 'Income')
                                    ?  <div class="col-lg-4" style={{padding:"10px",color:"#009100",fontSize:"20px"}}><b>+&nbsp;&#x20b9;{posts.id}</b></div>    
                                    : <div class="col-lg-4" style={{padding:"10px",color:"#ff0000",fontSize:"20px"}}><b>-&nbsp;&#x20b9;{posts.id}</b></div>
                                }
                

                            </div>


                            </div> )  :
                    null    
                }
            </div>
            </div>
        )
    }
}
