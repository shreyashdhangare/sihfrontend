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
                        <img className="card-img-top" src="https://www.nationalgeographic.com/content/dam/environment/photos/future_of_food/organic_farming_rough/01_organic_farming_i8860_20181003_11260.adapt.1900.1.jpg" alt=""/>
                        <div className="card-body">
                            <h2 className="card-title">Organic Food RSS Feeds</h2>
                            <p className="card-text">Organic Authority is the leading digital publication that's redefining what it means to live a conscious healthy lifestyle in America today. They obsessively cover the latest trends and organic food news, seasonal recipes, nutrition, wellness, natural beauty, and more. Organic Authority has all the tips and expert advice you need for delicious good living</p>
                            <a href="/account" className="btn btn-primary">Read More &rarr;</a>
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2017 by
                            <a href="/account">Start Bootstrap</a>
                        </div>
                        </div>

                        
                        <div className="card mb-4">
                        <img className="card-img-top" src="https://media.gettyimages.com/photos/indias-presidential-palace-at-sunset-picture-id923835828?s=2048x2048" alt=""/>
                        <div className="card-body">
                            <h2 className="card-title">Ministry wants update on grain procurement
                            </h2>
                            <p className="card-text">The food ministry has asked states to regularly update data on the amount of foodgrains purchased and the money disbursed to farmers along with their names to help it monitor and plan food procurement, and identify beneficiaries across the country.
                            </p>
                            <a href="/account" className="btn btn-primary">Read More &rarr;</a>
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2017 by
                            <a href="/account">Start Bootstrap</a>
                        </div>
                        </div>

                        
                        <div className="card mb-4">
                        <img className="card-img-top" src="https://img.etimg.com/thumb/msid-73151456,width-300,imgsize-355208,resizemode-4/8.jpg" alt=""/>
                        <div className="card-body">
                            <h2 className="card-title">Agriculture has key role in making India a USD 5 trillion economy: Telangana Governor
                                </h2>
                            <p className="card-text">Telangana Governor Tamilisai Soundararajn on Tuesday said that agriculture has a key role to play in helping the country achieve its goal of becoming a USD five trillion economy.
                            </p>
                            <a href="/account" className="btn btn-primary">Read More &rarr;</a>
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2017 by
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
