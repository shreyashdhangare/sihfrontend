import React, { Component } from 'react'
import FeedComponent from './FeedComponent'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap'
export default class Feed extends Component {
    render() {
        return (
            <div>
                
                <Button outline color="primary">  <Link to="/account/postquestion">ADD NEW QUESTION</Link> </Button>  
                    
                 <FeedComponent/>
            </div>
        )
    }
}
