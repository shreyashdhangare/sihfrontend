import React, {Component} from 'react'
// import Chart from './Chart'
import axios from 'axios'

class vendorbuycrops extends Component{
    constructor(props){
        super(props);
        this.state={
            students: [
                { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
                { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
             ]
        }
   
    }

        
    componentDidMount(){
       
    console.log(JSON.stringify(this.state));
    // console.log('here')


    }
    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#4CAF50",color:"white"}} key={index}>{key.toUpperCase()}</th>
        })
     }
    renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, name, age, email } = student //destructuring
           return (
               
              <tr key={id} style={{border:"1px solid #ddd",padding:"8px"}}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
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
        <div>
            <h1 id='title' style={{textAlign:"center",fontSize:"20px"}} >React Dynamic Table</h1>
            <table id='students'style={{textAlign:"center",fontFamily:"Arial,Helvetica,sans-serif,sans-serif",borderCollapse:"collapse",border:"3px solid #ddd",width:"100%"}}>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      

   
      
       
          </React.Fragment>
         
          
        
      
            
            );
    }
}
export default vendorbuycrops;