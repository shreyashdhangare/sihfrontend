import React, { Component } from 'react'
import axios from 'axios'
import { Popover ,Pane,Text} from 'evergreen-ui'
import { Button } from 'reactstrap'
import SearchField from "react-search-field";



// {
//     "date": "2020-01-07",
//     "questionid": "15",
//     "question": "hi",
//     "upvotes": "0",
//     "time": "17:38:12.95363330",
//     "title": "hello",
//     "downvotes": "0",
//     "tags": "[hi, hi, helo, what, is, up, hi, hello, hi, hello, hi, hello, hi, hello, hi, hello]"
// }


export default class extends Component {

    constructor(props) {
        super(props)
        
        this.state = ( {
             posts : []
        })
    }
    
     componentDidMount () {
         axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:"123456789012"}})
         //axios.get('http://192.168.43.233:8080/forum/show/question',{params:{aadharid:"123456789012",type:"asd"}})
         .then(Response =>{
             console.log(Response)
             this.setState ({posts:Response.data})
         })
         .catch(error =>{
             console.log(error)
         })
     }

     changeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }




    render() {
        
        
        const {posts} = this.state

        return (
            <div>

                <div>
                
                <center>
                <SearchField
                placeholder="Search..."
                value={this.state.tags}
                onChange={this.changeHandler}
                searchText= ""
                classNames="test-class"
                />

                </center>
                <div>
                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Question</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Upvotes</th>
                                        <th scope="col">Downvotes</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Tags</th>
                                        </tr>
                                    </thead>

                                    </table>





                    {
                            
                        posts.length ?
                        posts.map( posts => 
                             <div key = {posts.id}>
                                 <center> 
                                    
                                    <div>  
                                    {/* <QuestionComponent/> */}
                                    <table className = "table">
                                    <thead>
                                        <tr className = 'container-fluid'>
                                        
                                        
                                        
                                        <Popover 
                                            content={
                                                <Pane
                                                width={240}
                                                height={240}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                flexDirection="column"
                                                >
                                              <Text>PopoverContent</Text>
                                            </Pane>
                                          }>
                                        <Button scope="col">{posts.question}</Button>
                                        </Popover>
                                        
                                        
                                        
                                        
                                        <th scope="col">{posts.title}</th>
                                        <th scope="col">{posts.upvotes}</th>
                                        <th scope="col">{posts.downvotes}</th>
                                        <th scope="col">{posts.date}</th>
                                        <th scope="col">{posts.tags}</th>
                                        </tr>
                                    </thead>
                                    </table>
                                    </div>



                                  </center>
                             </div> )  :
                        null    
                    }
                    </div>
                </div>

            </div>
        )
    }
}
