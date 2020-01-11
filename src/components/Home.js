import React, { Component } from 'react'
import BlogpostComponent from './BlogpostComponent'
import NavTiles from './NavTiles'
export default class Home extends Component {
    render(props) {
        return (
            <div>
                <div>
                    
                </div>
               <div>
                   <NavTiles/>
                    <BlogpostComponent/>
                </div>
            </div>
        )
    }
}
