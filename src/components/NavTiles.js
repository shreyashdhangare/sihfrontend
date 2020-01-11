import React, { Component } from 'react'
import './resources/vendor/bootstrap/css/bootstrap.min.css'
import './resources/css/homebackgrd.css'
export default class NavTiles extends Component {
    render() {
        return (
            <div>

<div className="container">
                <header className="jumbotron my-4 homebackgrd" >
                <h1 className="display-3" style={{color:"white"}}>Krishi Rocks!</h1>
                
                <p className="lead" style={{color:"white"}} >Find Help in Agriculture | Get Crop Recommendations</p>
                </header>

                
                <div className="row text-center">

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="https://storage.googleapis.com/cgiarorg/2019/08/072477a0-28ef-42cf-98e1-bf26389a5064-Photo-from-Daksin.jpg" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Crop Recommendations</h4>
                        <p className="card-text">Not sure which crops to plant?
                        Use our crop recommender  to find out maximum yeild of your crops
                        and get best crop recommendations for your farm 
                        personalized to your needs
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account" className="btn btn-primary">Get recommendations</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClnksJr4HWjsNoliQCWh2jwXiVyg1U3CdgtoiB2GZ1ZnL2AQd&s" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Manage Farms & Finance</h4>
                        <p className="card-text">Use our website to track all your farm details.
                                                Add and track crops,track pesticides,fertilizers
                                                and farming equipment,track finance of each farm 
                                                and much more.

                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account/myfarm" className="btn btn-primary">Go to My Farms</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="http://cloud.millenniumpost.in/19286J9IrPZ66bkCNjx95BycZ8VHZePAjxyJN9146596/farmerjpg.jpg" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Weather Prediction</h4>
                        <p className="card-text">Get probable weather data of upcoming week.
                                                 Get notified about all weather changes and 
                                                 reports daily.
                                                 
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account" className="btn btn-primary">Check Weather</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="https://media.istockphoto.com/photos/old-farmer-holding-digital-tablet-picture-id547133100?k=6&m=547133100&s=612x612&w=0&h=k04yy7iGC6Y5j4OxPEKppn1Kv0rSoPe3czZL7IzJhko=" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Get Expert Advice</h4>
                        <p className="card-text">Use our Question & Answers forum to
                                                ask and get answers of all your questions.
                                                Get in touch with experts and get proper 
                                                guidance and informed advice.
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account/feed" className="btn btn-primary">Go to QnA forum</a>
                    </div>
                    </div>
                </div>

                </div>

                <div className="row text-center">

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="https://storage.googleapis.com/cgiarorg/2019/08/072477a0-28ef-42cf-98e1-bf26389a5064-Photo-from-Daksin.jpg" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Crop Recommendations</h4>
                        <p className="card-text">Not sure which crops to plant?
                        Use our crop recommender  to find out maximum yeild of your crops
                        and get best crop recommendations for your farm 
                        personalized to your needs
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account" className="btn btn-primary">Get recommendations</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClnksJr4HWjsNoliQCWh2jwXiVyg1U3CdgtoiB2GZ1ZnL2AQd&s" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Manage Farms & Finance</h4>
                        <p className="card-text">Use our website to track all your farm details.
                                                Add and track crops,track pesticides,fertilizers
                                                and farming equipment,track finance of each farm 
                                                and much more.

                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account/myfarm" className="btn btn-primary">Go to My Farms</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="http://cloud.millenniumpost.in/19286J9IrPZ66bkCNjx95BycZ8VHZePAjxyJN9146596/farmerjpg.jpg" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Weather Prediction</h4>
                        <p className="card-text">Get probable weather data of upcoming week.
                                                 Get notified about all weather changes and 
                                                 reports daily.
                                                 
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account" className="btn btn-primary">Check Weather</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="https://media.istockphoto.com/photos/old-farmer-holding-digital-tablet-picture-id547133100?k=6&m=547133100&s=612x612&w=0&h=k04yy7iGC6Y5j4OxPEKppn1Kv0rSoPe3czZL7IzJhko=" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Get Expert Advice</h4>
                        <p className="card-text">Use our Question & Answers forum to
                                                ask and get answers of all your questions.
                                                Get in touch with experts and get proper 
                                                guidance and informed advice.
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account/feed" className="btn btn-primary">Go to QnA forum</a>
                    </div>
                    </div>
                </div>

                </div>
                

                </div>

                
            </div>
        )
    }
}
