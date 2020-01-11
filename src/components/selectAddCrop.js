import React, { Component } from 'react'
import Selectcroptile from './selectCropTile'
import axios from 'axios'
export default class selectAddCrop extends Component {

    state={
        posts:[],
        error:"",
        aadharid:this.props.aadharid,
        farmid:this.props.match.params.farmid
    }


    getCrops=()=>
    {
        console.log( "hellofrom axios" ) 
         axios.get('https://jsonplaceholder.typicode.com/users')
        //axios.get('http://192.168.43.233:8080/farmer/show/farm',{params:{aadharid:this.state.aadharid}})
        .then(response => {  
        this.setState({posts:response.data,
                        gotData:"1"}) 
        }
        ) 
        .catch(
            
            error=>{ 
                this.setState({error:"No Crops Found"})
                console.log(error) }
            )

    };

    componentDidMount()
    {
        this.getCrops()
    }

    render() {
        const {posts}=this.state
        return (
            <div>

<div> 

<div className="mt">
    </div>  
        <h3>Select crops to be added from below</h3>
        <br/>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row">
                    
                    {
                        posts.length ?
                                posts.map(post=>
                                <div className="col-md-4" key={post.id} >
                                <Selectcroptile cropid={post.id} farmid={this.props.match.params.farmid}/> 
                                </div>) 
                        :null
                    }



                </div>
            </div>
        </div>

        { this.state.error ? <div>{this.state.error}</div>:null}    
        
</div>


            </div>
        )
    }
}
