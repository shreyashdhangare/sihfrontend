import React, {Component} from 'react'
// import Chart from './Chart'
import axios from 'axios'

class govtmsp extends Component{
    constructor(props){
        super(props);
        this.state={
            msp: [
                {
                    "date": "2020-01-01",
                    "variety": "hybrid",
                    "price": "2550",
                    "name": "jowar"
                }
             ]
        }
   
    }
   
       
        componentDidMount(){
            axios.get('http://localhost:8080/api/show/msp',{params:{aadharid:"123456789012"}})
             .then(Response =>{
                 console.log(Response.data)
                 this.setState ({msp:Response.data})
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
               const { date, variety, price, name } = m //destructuring
               return (
                   
                  <tr key={name} style={{border:"1px solid #ddd",padding:"8px"}}>
                     <td>{date}</td>
                     <td>{variety}</td>
                     <td>{price}</td>
                     <td>{name}</td>
                  </tr>
               )
            })
         }
render(){
    return(
<div>
            <h1 id='title' style={{textAlign:"center",fontSize:"20px"}} >Maximum Support Price</h1>
            <table id='students'style={{textAlign:"center",fontFamily:"Arial,Helvetica,sans-serif,sans-serif",borderCollapse:"collapse",border:"3px solid #ddd",width:"100%"}}>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
    )
}
}
export default govtmsp