import React, {Component} from 'react'
// import Chart from './Chart'
import axios from 'axios'
import Govtaddmsp from './Govtaddmsp'

class govtmsp extends Component{
    constructor(props){
        super(props);
        this.state={
            loopActive: false,
            croppost:[{
                aadharid:'1234567890',
                crop:'',
                variety:'',
                price:'',
                date:''
            }],

            msp: [
                {
                    "date": "2020-01-01",
                    "variety": "hybrid",
                    "price": "2550",
                    "name": "jowar"
                }
             ]
        }
        this.onToggleLoop = this.onToggleLoop.bind(this);
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

   
    }

    handleChange(event) {
        this.setState({croppost: event.target.value});
      }
      
  handleSubmit(event) {
      console.log(this.state.croppost)
    alert('A name was submitted: ' + this.state.croppost);
    event.preventDefault();
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

        //  submitHandler =(e) =>{ 
        //     e.preventDefault() ;
        //     console.log(this.state.croppost[0])
        //     axios.post('http://localhost:8080/govt/upload/msp',this.state.croppost[0])
        //     .then(response => { console.log(response)})
        //     .catch(error => { console.log(error)})
        // }
    
        // handleType = (event) =>{   this.setState({croppost:event.target.value})    }    
        // handleWarning = (event) =>{   this.setState({warning:event.target.value})    }   



render(){
    const {crop,variety,price,date}=this.state.croppost

    return(

        <div>
            <br/>
          <div className="d-flex justify-content-center">
        <form className="col-md-12" onSubmit={this.handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-3 " >
                    <input type="text" class="form-control" id="crop" value={this.state.croppost.crop} onChange={this.handleChange} placeholder="Crop"></input>
                    </div>
                    <div class="form-group col-md-3">
                    <input type="text" class="form-control" id="variety" value={this.state.croppost.variety} onChange={this.handleChange} placeholder="variety"></input>
                    </div>
                    <div class="col-sm-2 form-group">
                     <input type="number" id="price" placeholder="in Rs" value={this.state.croppost.price} onChange={this.handleChange} class="form-control" />
                 </div>
                    <div class="form-group col-md-2">
                    <input type="date" class="form-control" value={this.state.croppost.date} onChange={this.handleChange} id="date" ></input>
                    </div>
                 <div class="form-group col-md-2">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>

                </div>
                </form>
                
            </div>
<div>
            <h1 id='title' style={{textAlign:"center",fontSize:"20px"}} >Minimum Support Price</h1>
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

onToggleLoop(event) {
    // "this is undefined??" <--- here
    this.setState({loopActive: !this.state.loopActive})
    console.log(this.state.loopActive)
}
}
export default govtmsp