import React, {Component} from 'react';
import {Pie, Line , Bar} from 'react-chartjs-2';
import govtmsp from './govtmsp';

class Govtaddsmsp extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:props.chartData
        }
    }




    render(){
        return(
            <div >
                <div className="d-flex justify-content-center">
        <form className="col-12">
                <div class="form-row">
                    <div class="form-group col-md-3" >
                    <input type="text" class="form-control" id="Crop" placeholder="Crop"></input>
                    </div>
                    <div class="form-group col-md-3" >
                    <input type="text" class="form-control" id="Variety" placeholder="Variety"></input>
                    </div>
                    <div class="col-sm-2 form-group">
                     <input type="number" id="amount" placeholder="price in Rs" class="form-control" />
                     </div>
                   
                    <div class="form-group col-md-3" >
                    <input type="date" class="form-control" id="Date" ></input>
                    </div>
                   
                    
                </div>
            
               
                </form>
                
            </div> 
            </div>
        )
    }



    

  }
export default Govtaddsmsp