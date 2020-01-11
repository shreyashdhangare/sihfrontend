import React, { Component } from 'react'
import './resources/vendor/bootstrap/css/bootstrap.min.css'
import Schemes from './Schemes'
export default class BlogpostComponent extends Component {
    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">

                    
                    <div className="col-md-8">

                        <h1 className="my-4">News Feed<br/>
                       <small> <h3>Check out latest farming content</h3></small> 
                        </h1>

                        
                        <div className="card mb-4">
                        <img className="card-img-top" src="http://placehold.it/750x300" alt=""/>
                        <div className="card-body">
                            <h2 className="card-title">Post Title</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a href="/account" className="btn btn-primary">Read More &rarr;</a>
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2017 by
                            <a href="/account">Start Bootstrap</a>
                        </div>
                        </div>

                        
                        <div className="card mb-4">
                        <img className="card-img-top" src="http://placehold.it/750x300" alt=""/>
                        <div className="card-body">
                            <h2 className="card-title">Post Title</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a href="/account" className="btn btn-primary">Read More &rarr;</a>
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2017 by
                            <a href="/account">Start Bootstrap</a>
                        </div>
                        </div>

                        
                        <div className="card mb-4">
                        <img className="card-img-top" src="http://placehold.it/750x300" alt=""/>
                        <div className="card-body">
                            <h2 className="card-title">Post Title</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a href="/account" className="btn btn-primary">Read More &rarr;</a>
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2017 by
                            <a href="/account">Start Bootstrap</a>
                        </div>
                        </div>

                        
                        <ul className="pagination justify-content-center mb-4">
                        <li className="page-item">
                            <a className="page-link" href="/account">&larr; Older</a>
                        </li>
                        <li className="page-item disabled">
                            <a className="page-link" href="/account">Newer &rarr;</a>
                        </li>
                        </ul>

                    </div>

                   
                    <div className="col-md-4">

                        
                        <div className="card my-4">
                        <h5 className="card-header">Search</h5>
                        <div className="card-body">
                            <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..."/>
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button">Go!</button>
                            </span>
                            </div>
                        </div>
                        </div>

                        
                        <div className="card my-4">
                        <h5 className="card-header">Content Categories</h5>
                        <div className="card-body">
                            <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="/account">Pestisides</a>
                                </li>
                                <li>
                                    <a href="/account">Fertilizers</a>
                                </li>
                                <li>
                                    <a href="/account">Crop Diseasess</a>
                                </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="/account">Weather</a>
                                </li>
                                <li>
                                    <a href="/account">Schemes</a>
                                </li>
                                <li>
                                    <a href="/account">Equipment</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>

                        
                       <Schemes/>

                    </div>

                    </div>
                    

                    </div>
                    
            </div>
        )
    }
}
