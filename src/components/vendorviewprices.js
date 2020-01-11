import React, {Component} from 'react'
// import Chart from './Chart'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Popover ,Pane,Text ,SearchInput} from 'evergreen-ui'
import { Button } from 'reactstrap'
import ReactSearchBox from 'react-search-box'
import SearchField from "react-search-field";

class vendorviewprices extends Component{
    constructor(props){
        super(props);
        this.state={
            posts: [
                {
                    "crop": "No Crops",
                    "price": "No Crops",
                    "state": "No Crops",
                    "district": "No Crops",
                    "taluka": "No Crops",
                    "town": "No Crops",
                    "date": "No Crops"
                }
            ]
        }
   
    }
     componentDidMount(){
        axios.get('http://localhost:8080/vendor/show/prices',{params:{aadharid:"123456789012",type:"1234"}})
         .then(Response =>{
             console.log(Response.data)
             this.setState ({posts:Response.data})
         })
         .catch(error =>{
             console.log(error)
         })

    
        }

        renderTableHeader() {
            let header = Object.keys(this.state.posts[0])
            return header.map((key, index) => {
               return <th style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#4CAF50",color:"white"}} key={index}>{key.toUpperCase()}</th>
            })
         }

        renderTableData() {
            return this.state.posts.map((post, index) => {
               const { crop, price, state, district,taluka,town,date } = post //destructuring
               return (
                   
                  <tr key={crop} style={{border:"1px solid #ddd",padding:"8px"}}>
                     <td>{date}</td>
                     <td>{town}</td>
                     <td>{price}</td>
                     <td>{district}</td>
                     <td>{taluka}</td>
                     <td>{state}</td>
                     <td>{crop}</td>

                  </tr>
               )
            })
         }



         render(){
            return(
        <div>

                    <h1 id='title' style={{textAlign:"center",fontSize:"20px"}} >React Dynamic Table</h1>
                    <table id='posts'style={{textAlign:"center",fontFamily:"Arial,Helvetica,sans-serif,sans-serif",borderCollapse:"collapse",border:"3px solid #ddd",width:"100%"}}>
                       <tbody>
                       <tr>{this.renderTableHeader()}</tr>
                          {this.renderTableData()}
                       </tbody>
                    </table>
                 </div>
            )
        }
      
// render() {
        
        
//     const {posts} = this.state

//     return (
//         <div>

//             <div>
            
//             <center>
//             <SearchField
//             placeholder="Search..."
//             value={this.state.tags}
//             onChange={this.changeHandler}
//             searchText= ""
//             classNames="test-class"
//             />

//             </center>
//             <div>
//             <table class="table">
//                                     <tr style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#4CAF50",color:"white"}} >
//                                     <th scope="col">Crop</th>
//                                     <th scope="col">Price</th>
//                                     <th scope="col">State</th>
//                                     <th scope="col">district</th>
//                                     <th scope="col">Taluka</th>
//                                     <th scope="col">Town</th>
//                                     <th scope="col">Date</th>
//                                     </tr>


//                 {
                        
//                     posts.length ?
//                     posts.map( posts => 
//                          <div key = {posts.crop}>
//                              <center> 
                                
//                                 <div>  
//                                 {/* <QuestionComponent/> */}
//                                     <tr className = 'container-fluid'>
//                                      <th scope="col">{posts.crop}</th>
//                                     <th scope="col">{posts.price}</th>
//                                     <th scope="col">{posts.state}</th>
//                                     <th scope="col">{posts.district}</th>
//                                     <th scope="col">{posts.taluka}</th>
//                                     <th scope="col">{posts.town}</th>
//                                     <th scope="col">{posts.date}</th>

//                                     </tr>
//                                 </div>
//                               </center>
//                          </div> )  :
//                     null    
//                 }
//                                                 </table>

//                 </div>
//             </div>
        
        
        
//         </div>
//     )
// }
}
export default vendorviewprices