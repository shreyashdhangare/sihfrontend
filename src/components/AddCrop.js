import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class AddCrop extends Component {

    constructor(props) {
        super(props)
            console.log("inaddfarrrmm")
            console.log(props)
            this.state = {
                aadharid:this.props.aadharid,
                farmid:this.props.match.params.farmid,
                cropid:this.props.match.params.cropid,
                sowingDate:'',
                harvestDate:'',
                season:'',
                type:'',
                sentData:"0"
                //FarmNum:props.location.MyFarmprops.farmNum+1
            }
    }


    submitHandler =(e) =>{ 
        e.preventDefault() ;
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => { console.log(response)
               this.setState({sentData:"1"})
        })
        .catch(error => { console.log(error)})
    }
    changeHandler = (event) =>{   this.setState({[event.target.name]:event.target.value})    }

    
    render() {
        const newTo = { 
            pathname: "/account/selectcrop/"+this.state.farmid
          };
        const {type,sowingDate,harvestDate,season}=this.state
        if(this.state.sentData==="1")
        return <Redirect to={newTo}/> 
    
        return (
           
            <div>
                <form  onSubmit={this.submitHandler} >
                

                <div className="form-group">
                <label className="col-md-4 control-label">Sowing Date</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="sowingDate" value={sowingDate} onChange={this.changeHandler} placeholder="Sowing Date" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>


                <div className="form-group">
                <label className="col-md-4 control-label">Harvest Date</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="harvestDate" value={harvestDate} onChange={this.changeHandler} placeholder="Harvest Date" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>


                <div className="form-group">
                <label className="col-md-4 control-label">Season</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Season" value={season} onChange={this.changeHandler} placeholder="Season" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>


                <div className="form-group">
                <label className="col-md-4 control-label">Type</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="type" value={type} onChange={this.changeHandler} placeholder="Type" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>
                <div className="mt"> <button className="btn bg-blue-ui white read" type="submit">Submit</button> </div>
                </form>

            </div>
        )
    }
}
