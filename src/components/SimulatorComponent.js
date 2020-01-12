import React, { Component } from "react";
import Sketch from "react-p5";
import {Button,TextInputField,Avatar} from 'evergreen-ui'

export default class SimulatorComponent extends Component {
    constructor(props) {
        super(props)
        let tempState
        //tempState=JSON.parse(localStorage.getItem("routeState"))
        this.state = {
            length : "",
            breadth : "",
            isset:"0"
        }

    }
  x = 50
  y = 50

  setup = (p5, parent) => {
    p5.createCanvas(this.state.length,this.state.breadth).parent(parent)
  }
  draw = p5 => {
    p5.background("#00ff00")
    // p5.ellipse(this.x, this.y, 70, 70)
    this.x++
  }

  changeHandler = (event) => {
    this.setState({[event.target.name] : event.target.value})
}


submitHandler = (event) =>{
    this.setState({isset:"1"})
  
}

  render()
  {
    console.log(this.state)
    const{length,breadth}=this.state
    if(this.state.isset==="1")
    return <Sketch setup={this.setup} draw={this.draw} />

    return (
        
        <div>
             
            <div className = 'container-fluid'>
                        <center>
                            <TextInputField
                                required
                                label = "Enter length"
                                type = "text"
                                placeholder="LENGTH"
                                name = "length"
                               value = {length}
                                onChange = {this.changeHandler}
                                width = "20%"
                            />
                        </center>
                    </div>


                    <div className = 'container-fluid'>
                        <center>
                            <TextInputField
                                required
                                label = "Enter Breadth"
                                type = "text"
                                placeholder="BREADTH"
                                name = "breadth"
                               value = {breadth}
                                onChange = {this.changeHandler}
                                width = "20%"
                            />
                        </center>
                    </div>

                    <center>
                    <Button marginRight={16}
                            appearance="primary"
                            type = "submit"
                            intent="success"
                            onClick = {this.submitHandler}
                            >SUBMIT
                    </Button>
                </center>

                
        </div>
    )
}
}