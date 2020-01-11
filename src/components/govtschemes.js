import React, {Component} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import Navbar from './Navbar'
import Govtaddschemes from './Govtaddschemes';


class govtschemes extends Component{
    constructor(props){
        super(props);
        this.state={
            loopActive: false,

            schemes:[
                {
                    
                        "id":"0",
                        "tag":"hi"
                    
                }

            ]
        }
        this.onToggleLoop = this.onToggleLoop.bind(this);
         
    }

    componentDidMount(){
        axios.get('http://localhost:8080/farmer/show/scheme/tags',{params:{state:"goa"}})
         .then(Response =>{
             console.log(Response.data)
             this.setState ({schemes:Response.data})
         })
         .catch(error =>{
             console.log(error)
         })

    
        }

        renderTableHeader() {
            let header = Object.keys(this.state.schemes[0])
            return header.map((key, index) => {
               return <th style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#4CAF50",color:"white"}} key={index}>{key.toUpperCase()}</th>
            })
         }

        renderTableData() {
            return this.state.schemes.map((scheme, index) => {
               const { id,tag } = scheme //destructuring
               return (
                   
                  <tr key={id} style={{border:"1px solid #ddd",padding:"8px"}}>
                    <td>{id}</td>
                     <td>{tag}</td>
                  

                  </tr>
               )
            })
         }


    render(){
        console.log(this.state.isclicked)
        if(this.state.loopActive===true)
        return <Govtaddschemes/>
        return( 
            
            
    <React.Fragment>

               <button type="submit" onClick={this.onToggleLoop}  className="btn btn-primary">Add New Scheme</button>
                

                    
                    
                 <div>

                <h1 id='title' style={{textAlign:"center",fontSize:"20px"}} >React Dynamic Table</h1>
                <table id='posts'style={{textAlign:"center",fontFamily:"Arial,Helvetica,sans-serif,sans-serif",borderCollapse:"collapse",border:"3px solid #ddd",width:"100%"}}>
                <tbody>
                <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
                </table>
                </div>

                {/* <form className>
                <div class="form-row">
                    <div class="form-group col-md-4 " >
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Title"></input>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="">Password</label>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="Password"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Info</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Detail Info</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputState">District</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State</label>
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
                <div class="form-group">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form> */}


        </React.Fragment>
        );
}


onToggleLoop(event) {
    // "this is undefined??" <--- here
    this.setState({loopActive: !this.state.loopActive})
    console.log(this.state.loopActive)
  }
}
export default govtschemes