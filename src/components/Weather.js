import React from "react";

const Weather = props => (



	<div >

{	
	// <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
    <table class="table">
    <tbody>     
      <tr class="table-primary">
        <td>Location</td>
        <td>{ props.city }, { props.country }</td>
        </tr>
      <tr class="table-info">
        <td>Temperature</td>
        <td>{ props.temperature }</td>
        </tr>
      <tr class="table-active">
        <td>Humidity</td>
        <td>{ props.humidity } </td>
        </tr>
      <tr class="table-secondary">
        <td>Conditions</td>
        <td>{ props.description }</td>
        </tr> 
    </tbody>
  </table>
  // </div>

}

	 
	</div>
);

export default Weather;