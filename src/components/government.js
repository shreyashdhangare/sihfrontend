import React, {Component} from 'react'
import Chart from './Chart'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Navbar'

import govtschemes from './govtschemes';


class government extends Component{
    constructor(){
        super();
        this.state={
            chartData:{},
            produceData:{},
            priceData:{}
        }
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }



   async componentDidMount(){
       
         this.getChartData();
         this.getProduceData();
         this.getPrices();
        console.log(JSON.stringify(this.state));
        // console.log('here')

    }

    getChartData(){
        axios.get('http://localhost:8080/govt/show/crop/produce',{params:{aadharid:'123456789012'}})
        .then(response => {
            // this.data=response.data;
            console.log(JSON.stringify(response.data[0].name))
            this.setState({
                chartData:{
                    labels: [ response.data[0].name, response.data[1].name,response.data[2].name,response.data[3].name,
                    response.data[4].name,response.data[5].name],
                datasets:[
                    {
                        label:'Produce in quintals',
                        data:[
                            response.data[0].produce,
                            response.data[1].produce,
                            response.data[2].produce,
                            response.data[3].produce,
                            response.data[4].produce,
                            response.data[5].produce
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(255,206,86,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(152,102,255,0.6)',
                            'rgba(255,159,64,0.6)'
                        ]
                    }
                ]
                }
            })    
        });
        console.log(JSON.stringify(this.data));
    }



    getPrices(){
        axios.get('http://localhost:8080/govt/show/crop/prices',{params:{aadharid:'123456789012'}})
        .then(response => {
            // this.data=response.data;
            console.log(JSON.stringify(response.data[0].name))
            this.setState({
                priceData:{
                    labels: [ response.data[0].name, response.data[1].name,response.data[2].name,response.data[3].name,
                    response.data[4].name,response.data[5].name],
                datasets:[
                    {
                        label:'Price in Rs',
                        data:[
                            response.data[0].price,
                            response.data[1].price,
                            response.data[2].price,
                            response.data[3].price,
                            response.data[4].price,
                            response.data[5].price
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(255,206,86,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(152,102,255,0.6)',
                            'rgba(255,159,64,0.6)'
                        ]
                    }
                ]
                }
            })    
        });
        console.log(JSON.stringify(this.data));
    }



    

    getProduceData(){
    axios.get('http://localhost:8080/govt/show/cropdata',{params:{aadharid:'123456789012'}})
    .then(response => {
        // this.data=response.data;
        console.log(JSON.stringify(response.data[0].name))
        this.setState({
            produceData:{
                labels: [ response.data[0].name, response.data[1].name,response.data[2].name,response.data[3].name,
                response.data[4].name,response.data[5].name],
            datasets:[
                {
                    label:'Area in acres',
                    data:[
                        response.data[0].area,
                        response.data[1].area,
                        response.data[2].area,
                        response.data[3].area,
                        response.data[4].area,
                        response.data[5].area
                    ],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(75,192,192,0.6)',
                        'rgba(152,102,255,0.6)',
                        'rgba(255,159,64,0.6)'
                    ]
                }
            ]
            }
        })    
    });
    console.log(JSON.stringify(this.data));
}

// this.setState({
//         chartData:{
//             labels: ['Boston', 'Worcester','Springfield','Lowell',
//         'Cambridge','New Bedford'],
//         datasets:[
//             {
//                 label:'Population',
//                 data:[
//                     617545,
//                     123456,
//                     234567,
//                     12345,
//                     789054,
//                     245678
//                 ],
//                 backgroundColor:[
//                     'rgba(255,99,132,0.6)',
//                     'rgba(54,162,235,0.6)',
//                     'rgba(255,206,86,0.6)',
//                     'rgba(75,192,192,0.6)',
//                     'rgba(152,102,255,0.6)',
//                     'rgba(255,159,64,0.6)'
//                 ]
//             }
//         ]
//         }
//     })


    render(){
        return(
            
    <React.Fragment> 
   
      
        
      
           <div className="row">
        <div className="col-md-6">
            {Object.keys(this.state.chartData).length &&
              <Chart
                chartData={this.state.chartData}
                legendPosition="bottom"
                text="Crop Produce"
              />
             }
             </div>


             <div className="col-md-6">
            {Object.keys(this.state.produceData).length &&
              <Chart
                chartData={this.state.produceData}
                legendPosition="bottom"
                text="Crop Area"
              />
             }
             </div>


             
             <div className="col-md-6">
            {Object.keys(this.state.priceData).length &&
              <Chart
                chartData={this.state.priceData}
                legendPosition="bottom"
                text="Crop Price"
              />
             }
             </div>


                
             <div className="col-md-6">
            {Object.keys(this.state.priceData).length &&
              <Chart
                chartData={this.state.priceData}
                legendPosition="bottom"
                text="Rainfall"
              />
             }
             </div>


       
          </div>

          </React.Fragment>
         
          
        
      
            
            );
    }
}
export default government;