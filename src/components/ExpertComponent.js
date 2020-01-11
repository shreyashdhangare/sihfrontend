import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import './resources/css/navbar.css'
import './resources/css/navbar.css'
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

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));
export default class ExpertComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = ( {
         posts : []
    })
}

 componentDidMount () {
     //axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:"123456789012"}})
     axios.get('http://192.168.43.148:8080/forum/show/question',{params:{aadharid:"123456789012",type:"my"}})
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
    // const newTo={
    //   pathname:"/accountexpert/answerquestion"+this.state.qid;
    // }
    // const handleChange = event => {
    //   setValue(event.target.value);
    // };

    // const classes = useStyles();
    // const [value, setValue] = React.useState('Controlled');
  
      return (

        
          <div>

                   {posts.length ? 
                 posts.map( posts => 
                        <div key = {posts.id}>
                            
              <Container style={{ backgroundColor:"#e0dede",borderRadius:"10px",borderWidth:"20px",borderColor:"black   "}}>
                <Row style={{height:"2vh"}}>  </Row>
                  <Container style={{ backgroundColor:"#ffffff",borderRadius:"10px" }}>
                    <Row >
                      <Col xs="1"></Col>
                        <p style={{fontSize:"20px" , fontColour:"#ffffff",padding:"5px"}}>{posts.question}</p>
                      <Col xs="1"></Col>
                    </Row>
                  </Container>
                <Row style={{height:"2vh"}}>  </Row>
              
                <Row style={{height:"6vh"}}>
                  <Col sm="3"></Col>
                  {/* <Popover
                    bringFocusInside
                    content={
                      <Pane
                        width={320}
                        height={320}
                        paddingX={40}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                      >
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                multiline
                                rowsMax="4"
                                value={value}
                                onChange={handleChange}
                                variant="outlined"
                              />
                        <br/>
                        <Button>Submit</Button>
                      </Pane>
                    }
                  >
                    <Button style={{ marginTop:"5px",padding:"10px" ,borderRadius:"10px"}}>Answer this question</Button>
                  </Popover> */}
                  <Col sm="4"><Link to={"/accountexpert/answerquestion"}> <button style={{backgroundColor: "#4CAF50" , marginTop:"5px",padding:"10px" ,borderRadius:"10px"}}><b style={{color:"#ffffff"}}>Answer this question</b></button></Link></Col>  
                  
                  <Col><Link to={"/accountexpert/viewanswers"}><button style={{backgroundColor: "#4CAF50" , marginTop:"5px",padding:"10px" ,borderRadius:"10px"}}><b style={{color:"#ffffff"}}>View Answers</b></button></Link></Col>
                </Row>
              
                <Row style={{height:"3vh"}}>  </Row>
              </Container>
                <Row style={{height:"2vh"}}>  </Row>   
                        </div> )  :
                      null    
                    } 

          </div>
      )
  }
}
