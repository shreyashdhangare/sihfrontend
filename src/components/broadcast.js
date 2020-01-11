import React,{Component} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import modal from '../../node_modules/bootstrap/js/src/modal'
class broadcast extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div><div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                    <form className="login100-form validate-form" onSubmit={this.submitHandler}>
                        <span className="login100-form-title p-b-33">
                            Broadcast
                        </span>
                        <div className="d-flex justify-content-center">
        <form className="col-12">
                <div class="form-row">
                    <div class="form-group col-md-12 " >
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Title"></input>
                    </div>
                   
                </div>
                <div class="form-group">
                    <label for="inputAddress">Message</label>
                    <textarea class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                
                <div class="form-row">
                    <div class="form-group col-md-12">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-12 " >
                    <label for="title">District</label>
                    <input type="text" class="form-control" id="title" placeholder="Title"></input>
                    </div>
                    <div class="form-group col-md-12 " >
                    <label for="title">Taluka</label>
                    <input type="text" class="form-control" id="title" placeholder="Title"></input>
                    </div>

                    <div class="form-group col-md-12">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"></input>
                    </div>
                </div>
                
            
                    
                  
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                
            </div>

                       
                        <div className="text-center">
                        </div>
                    </form>
                </div>
            </div>
        </div></div>
        );
    }
}
export default broadcast
