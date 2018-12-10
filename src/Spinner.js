import React from "react";

const Spinner = props => {
	return(
		<div class='ui active transition visible dimmer'>
	      <div class='content'>
	        <div class='ui text loader'>{props.message}</div>
	      </div>
	    </div>
		);
};
//setting default props
Spinner.defaultProps = {
	message: "Loading..."
}

export default Spinner;