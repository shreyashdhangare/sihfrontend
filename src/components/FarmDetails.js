import React, { Component } from 'react'
import CropTile from './CropTile.js'
import {Link} from 'react-router-dom'
import axios from 'axios'
//import selectCropTile from './selectCropTile'

export default class FarmDetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             error:"",
             aadharid:this.props.aadharid,
             gotData:"0",
             farmid:this.props.match.params.farmid
        }
    }


    loadLocalData=()=>
    {
        try{
            const serializedState=localStorage.getItem("FarmDetailsState")
            if(serializedState===null)
                return undefined
            return serializedState  
        }
        catch(e){
            console.log(e)
            return undefined
        }
    };

     getCrops=()=>
    {
        console.log( "hellofrom axios" ) 
         axios.get('https://jsonplaceholder.typicode.com/users',{params:{aadharid:this.state.aadharid}})
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
        if(this.state.aadharid!==undefined)
        this.getCrops();
        console.log("mounted")
        let Currstate
        //try to load from local storage
        Currstate=this.loadLocalData()
        //save state to local storage
        if(Currstate===undefined)
        {
            try{
                const serializedState=JSON.stringify(this.state)
                localStorage.setItem('FarmDetailsState',serializedState)
                console.log("saved this state")
            }
            catch(e)
            {
                console.log(e)
            }
        }
        else{
            let latestState=JSON.parse(Currstate)
            console.log(latestState)
            console.log("this state was retrieved")
            if(this.state.aadharid===undefined)
            this.setState(latestState)
        }
    }
     
    


        render() {
            if(this.state.gotData==="0")
            this.getCrops()
            console.log(this.state)
            const {posts}=this.state
            const newTo = { 
                pathname: "/account/selectcrop/"+this.state.farmid
              };
        return (
            <div>
                <div> 

                <div className="mt">
                    <Link to={newTo} className="btn bg-blue-ui white read">ADD NEW CROP</Link> <br/><br/>
                    <Link to={{pathname:"/account/finance",MyFarmprops:{farmNum:posts.length}}} className="btn bg-blue-ui white read">MY FINANCE PAGE</Link> 
                    <br/><br/>
                    </div>  
                    
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    
                                    {
                                        posts.length ?
                                                posts.map(post=>
                                                <div className="col-md-4" key={post.id} >
                                                <CropTile cropid={post.id}/>
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
