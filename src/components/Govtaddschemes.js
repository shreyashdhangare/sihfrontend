import React, {Component} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import Navbar from './Navbar'


class govtaddschemes extends Component{
    constructor(props){
        super(props);
        this.state={
            schemes:[
                {
          
                }

            ]
        }
         
    }


    render(){
        return(
            <div className="d-flex justify-content-center">
        <form className="col-7">
                <div class="form-row">
                    <div class="form-group col-md-12 " >
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Title"></input>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="">Start Date: </label>
                    <input type="date" class="form-control" id="inputPassword4" placeholder="Password"></input>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="">Expiry Date: </label>
                    <input type="date" class="form-control" id="inputPassword4" placeholder="Password"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Synopsis</label>
                    <textarea class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Details</label>
                    <textarea class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-5">
                    <label for="inputState">District</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"></input>
                    </div>
                </div>
                
            
                    
                    <button class="btn btn-primary mb-3" id="gridCheck">Upload File</button>
                    
                  
               <br/>
            
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                
            </div>
        )
    }
}
export default govtaddschemes