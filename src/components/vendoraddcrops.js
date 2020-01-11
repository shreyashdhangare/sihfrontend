import React, {Component} from 'react'
// import Chart from './Chart'
import axios from 'axios'

class vendoraddcrops extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{}
        }
   
    }

        
    componentDidMount(){
       
    console.log(JSON.stringify(this.state));
    // console.log('here')


    }
    render(){
        return(
            
    <React.Fragment> 
        <form>
            <div class="row">
                <div class="col-sm-5 form-group">
                    <label for="name">Crop Name</label>
                    <input type="text" id="name" class="form-control"/>

                 </div>
                 <div class="col-sm-2 form-group">
                     <label for="amount">Amount</label>
                     <input type="number" id="amount" class="form-control"placeholder="in Rs" />
                 </div>
            </div>
            <div class="row">
                <div class="col-xs-11">
                    <button class="btn btn-success" type="submit">Add</button>
                    </div>
                    <div class="col-xs-11">

                     <button class="btn btn-danger" type="button">Delete </button>
                    <button class="btn btn-primary" type="button">Clear </button>
                </div>
            </div>
        </form>
   
      
       
          </React.Fragment>
         
          
        
      
            
            );
    }
}
export default vendoraddcrops;