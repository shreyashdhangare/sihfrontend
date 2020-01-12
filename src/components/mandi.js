import React, {Component} from 'react'
// import Chart from './Chart'
import axios from 'axios'
import Govtaddmsp from './Govtaddmsp'

class mandi extends Component{
    constructor(props){
        super(props);
        this.state={
            msp:[
                {
                    "timestamp": "1578764103",
                    "state": "Andhra Pradesh",
                    "district": "Chittor",
                    "market": "Mulakalacheruvu",
                    "commodity": "Tomato",
                    "variety": "Local",
                    "arrival_date": "11/01/2020",
                    "min_price": "500",
                    "max_price": "700",
                    "modal_price": "600"
                }
            ],
        }
        console.log("here")

    }
       
        componentDidMount(){
            console.log("here")
            axios.get('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=100')
             .then(Response =>{
                 console.log(Response.data)
                 this.setState ({msp:Response.data.records})
                 console.log(this.state.msp)
             })
             .catch(error =>{
                 console.log(error)
             })
    
        
            }
            renderTableHeader() {
                let header = Object.keys(this.state.msp[0])
                return header.map((key, index) => {
                   return <th style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#4CAF50",color:"white"}} key={index}>{key.toUpperCase()}</th>
                })
             }
            renderTableData() {
                return this.state.msp.map((m, index) => {
                   const { timestamp,state, district, market, commodity,variety,arrival_date,min_price,max_price,modal_price } = m //destructuring
                   return (
                       
                      <tr key={commodity} style={{border:"1px solid #ddd",padding:"8px"}}>
                         <td>{timestamp}</td>
                         <td>{state}</td>
                          <td>{district}</td>
                          <td>{market}</td>
                          <td>{commodity}</td>
                          <td>{variety}</td>

                          <td>{arrival_date}</td>
                          <td>{min_price}</td>
                         <td>{max_price}</td>
                         <td>{modal_price}</td>
                      </tr>
                   )
                })
             }

   
    render(){
        return(
            <div>
            <div>
            <h1 id='title' style={{textAlign:"center",fontSize:"20px"}} >Mandi</h1>
            <table id='students'style={{textAlign:"center",fontFamily:"Arial,Helvetica,sans-serif,sans-serif",borderCollapse:"collapse",border:"3px solid #ddd",width:"100%"}}>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
            </div>
        )
    }
}
export default mandi