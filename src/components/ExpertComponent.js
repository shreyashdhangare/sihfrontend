import React, { Component,useState } from 'react'
//  import Component1 from "@reactions/component";
import {Link} from 'react-router-dom'
import './resources/css/navbar.css'
import {SideSheet,Paragraph,Button} from 'evergreen-ui'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/vendor/bootstrap/css/bootstrap.min.css'
import './resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './resources/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import './resources/vendor/animate/animate.css'
import './resources/vendor/css-hamburgers/hamburgers.min.css'
import './resources/vendor/animsition/css/animsition.min.css'
import './resources/vendor/select2/select2.min.css'
import './resources/vendor/daterangepicker/daterangepicker.css'
import './resources/css/util.css'
import './resources/css/main.css'

import { Container, Row, Col } from 'reactstrap';
// import Popup from "reactjs-popup";

export default class ExpertComponent extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = ( {
         posts : []
    })
}

 componentDidMount () {
     //axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:"123456789012"}})
     axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:"123456789012",type:"asd"}})
     .then(Response =>{
         console.log(Response)
         this.setState ({posts:Response.data})
     })
     .catch(error =>{
         console.log(error)
     })
 }
  
 
  render() {
    const {posts} = this.state
 
      return (

          <div>
               <div className="topnav" style={{position:"sticky"}}>
                  <Link to="/accountexpert">Home</Link>
                  <Link to="/issuewarning">Issue Warning</Link>
                  <Link to="/">View Warning</Link>
                
                  <Link to="/signinexpert"><button style={{fontSize:"17px",color:"#ffffff",align:"right"}}><i class="fa fa-sign-out"></i></button></Link>
                  
              </div><br/> 

              
             
              
              {/* <Popup trigger={<button>Answer question</button>} position="top left">
              {close => (
                <div>
                  <input type="textarea"/>
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                </div>
              )}
            </Popup> */}
              
              
                       
                   {posts.length ? 
                 posts.map( posts => 
                        <div key = {posts.id}>
                            
                            <Container style={{ backgroundColor:"#f5f2f2",borderRadius:"10px"}}>
                <Row style={{height:"2vh"}}>  </Row>
                  <Container style={{ backgroundColor:"#ffffff",borderRadius:"10px" }}>
                    <Row >
                      <Col xs="1"></Col>
                 <p style={{fontSize:"20px" , fontColour:"#ffffff",padding:"5px"}} >{posts.title}</p>
                      <Col xs="1"></Col>
                    </Row>
                  </Container>
                <Row style={{height:"2vh"}}>  </Row>
              
                <Row style={{height:"6vh"}}>
                  <Col sm="3"></Col>
                  <Col sm="4"><button style={{backgroundColor: "#4272d7" , marginTop:"5px",padding:"10px" ,borderRadius:"10px"}}><b style={{color:"#ffffff"}}>Answer this question</b></button></Col>
                  <Col><button style={{backgroundColor: "#4272d7" , marginTop:"5px",padding:"10px" ,borderRadius:"10px"}}><b style={{color:"#ffffff"}}>View Answers</b></button></Col>
                </Row>
              
                <Row style={{height:"2vh"}}>  </Row>
              </Container>
              <Row style={{height:"2vh"}}>  </Row>   
                        </div> )  :
                  null    
                              } 
          
          {/* <Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <React.Fragment>
      <SideSheet
        // position={Position.TOP}
        isShown={state.isShown}
        onCloseComplete={() => setState({ isShown: false })}
      >
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
      <Button onClick={() => setState({ isShown: true })}>
        Show Basic Side Sheet
      </Button>
    </React.Fragment>
  )}
</Component> */}
  
 
          </div>
      )
  }
}
