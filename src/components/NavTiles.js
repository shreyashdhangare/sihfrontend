import React, { Component } from 'react'
import './resources/vendor/bootstrap/css/bootstrap.min.css'
import './resources/css/homebackgrd.css'
export default class NavTiles extends Component {
    render() {
        return (
            <div>

<div className="container">
                <header className="jumbotron my-4 homebackgrd" >
                <h1 className="display-3" style={{color:"white"}}>Krishi Kalyan</h1>
                
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
                        <a href="/account/getrecommend" className="btn btn-primary">Get recommendations</a>
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
                        <a href="/account/weather" className="btn btn-primary">Check Weather</a>
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
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Rose-Rust-1.jpg/1200px-Rose-Rust-1.jpg" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Disease Identification</h4>
                        <p className="card-text">
                                        Post the photos of the infected 
                                        or diseased area and get expert 
                                        advice for the problems... 
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account" className="btn btn-primary">Identify Disease</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5FcDBANcbQwHqUtQh-9vk7s0ifNmLh1Mh5UxcUVgNnc1oxqY&s" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Mandi</h4>
                        <p className="card-text">
                                        Here you can directly check the current 
                                        prices of your produce and get the best
                                        price for your produce....

                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account/myfarm" className="btn btn-primary">Go to Mandi</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4Lzfij_zG2yuBUesz-Ojc5WI1UNgOqCEaYThjDO4TT1TqacJXA&s" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Fertilizer Recommendations</h4>
                        <p className="card-text">
                                        If you don't have the idea about which is
                                        the best fertilizer which suit your crop and 
                                        land. We are here for you...
                                                 
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account" className="btn btn-primary">fertilizer Recommendations</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="data:image/jpeg;base64,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  " alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">E-Commerce Portal</h4>
                        <p className="card-text">
                                                Not sure where to sell the produce
                                                and buy fertilizers
                                                Don't worry we have it all set.
                                                you can get all the solution for your
                                                problems here... 
                                    
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account/feed" className="btn btn-primary">Go to Portal</a>
                    </div>
                    </div>
                </div>

                </div>
                

                </div>

                
            </div>
        )
    }
}
