import React, { Component } from 'react'
import axios from 'axios'
import { Popover ,Pane,Text} from 'evergreen-ui'
import { Button } from 'reactstrap'
import ReactSearchBox from 'react-search-box'

// import SearchField from "react-search-field";



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
             posts : [
                 {
                     "date":"no",
                     "questionid":"1",
                     "question":"1",
                     "upvotes":"1",
                     "title":"cvb",
                     "time":"a",
                     "downvotes":"s",
                     "tags":"x"
                 }
             ]
        })
    }
    
   
     componentDidMount () {
         //axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:"123456789012"}})
         axios.get('http://192.168.43.148:8080/forum/show/question',{params:{aadharid:"123456789012",type:"asd"}})
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



    componentDidMount () {
        //axios.get('https://jsonplaceholder.typicode.com/posts',{params:{aadharid:"123456789012"}})
        axios.get('http://192.168.43.148:8080/forum/show/question',{params:{aadharid:"123456789012",type:"asd"}})
        .then(Response =>{
            console.log(Response)
            this.setState ({posts:Response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }
        renderTableHeader() {
            let header = Object.keys(this.state.posts[0])
            return header.map((key, index) => {
               return <th style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#25BAFF",color:"white"}} key={index}>{key.toUpperCase()}</th>
            })
         }

        renderTableData() {
            return this.state.posts.map((post, index) => {
               const { date, questionid,question, upvotes,time, title,downvotes,tags } = post //destructuring
               return (
                   
                  <tr key={questionid} style={{border:"1px solid #ddd",padding:"8px"}}>
                     <td>{date}</td>
                     <td>{questionid}</td>

                    {/* <td>{question}</td> */}

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
                                         <Button scope="col">{question}</Button>
                                        </Popover>









                     <td>{upvotes}</td>
                     <td>{time}</td>

                     <td>{title}</td>
                     <td>{downvotes}</td>
                     <td>{tags}</td>

                  </tr>
               )
            })
         }





    render(){
        return(
    <div>
        
                 <div>
                
                            
                </div>

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
    //             <SearchField/>
    //             </center>
    //             <div>
    //             <table class="table">
    //                                 <thead>
    //                                     <tr >
    //                                     <th scope="col">Question</th>
    //                                     <th scope="col">Title</th>
    //                                     <th scope="col">Upvotes</th>
    //                                     <th scope="col">Downvotes</th>
    //                                     <th scope="col">Date</th>
    //                                     <th scope="col">Tags</th>
    //                                     </tr>
    //                                 </thead>

    //                                 </table>





    //                 {
                            
    //                     posts.length ?
    //                     posts.map( posts => 
    //                          <div key = {posts.id}>
    //                              <center> 
                                    
    //                                 <div>  
    //                                 {/* <QuestionComponent/> */}
    //                                 <table className = "table">
    //                                 <thead>
    //                                     <tr className = 'container-fluid'>
                                        
                                        
                                        
    //                                     <Popover 
    //                                         content={
    //                                             <Pane
    //                                             width={240}
    //                                             height={240}
    //                                             display="flex"
    //                                             alignItems="center"
    //                                             justifyContent="center"
    //                                             flexDirection="column"
    //                                             >
    //                                           <Text>PopoverContent</Text>
    //                                         </Pane>
    //                                       }>
    //                                     <Button scope="col">{posts.question}</Button>
    //                                     </Popover>
                                        
                                        
                                        
                                        
    //                                     <th scope="col">{posts.title}</th>
    //                                     <th scope="col">{posts.upvotes}</th>
    //                                     <th scope="col">{posts.downvotes}</th>
    //                                     <th scope="col">{posts.date}</th>
    //                                     <th scope="col">{posts.tags}</th>
    //                                     </tr>
    //                                 </thead>
    //                                 </table>
    //                                 </div>



    //                               </center>
    //                          </div> )  :
    //                     null    
    //                 }
    //                 </div>
    //             </div>

    //         </div>
    //     )
    // }
}
