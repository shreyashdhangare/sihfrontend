import React from "react";
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

const Form = props => (

	//<div className="limiter">
    //<div className="container-login100">
    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
	<form className="login100-form validate-form" onSubmit={props.getWeather}>

<label for="city">City Name:</label>
<div className="wrap-input100 rs1 validate-input">
   
		<input type="text" name="city" className="input100" placeholder="City..."/>
		<span className="focus-input100-1"></span>
        <span className="focus-input100-2"></span>
</div>
<label for="country">Country Name:</label>
<div className="wrap-input100 rs1 validate-input">
    
		<input type="text" name="country" className="input100" placeholder="Country..."/>
		<span className="focus-input100-1"></span>
        <span className="focus-input100-2"></span>
</div><br/>
		<button className="btn btn-primary">Get Weather</button>
	</form>
	</div>
	//</div>
	//	</div>
);

export default Form;