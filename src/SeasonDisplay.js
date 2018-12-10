import React from 'react';
import "./SeasonDisplay.css";

const seasonConfig = {
	summer:{
		text: "Let's hit the beach",
		iconName: "sun"
	},
	winter:{
		text: "Brrr, it's chilly",
		iconName: "snowflake"
	}
}
//helper function
const getSeason = (lat, month) => {
	if(month > 2 && month < 9){
		return lat > 0 ? "summer" : "winter";
	}
	else{
		return lat > 0 ? "winter" : "summer";
	}
}
//main function
const SeasonDisplay = props => {
		const season = getSeason(props.lat, new Date().getMonth());
		const {text, iconName} = seasonConfig[season];
		return (<div className={`season-display ${season}`}>
			<i aria-hidden="true" className={`icon-left ${iconName} massive icon`} />
			<h1>{text}</h1>
			<i aria-hidden="true" className={`icon-right ${iconName} massive icon`} />
		</div>
		);
};

export default SeasonDisplay;
