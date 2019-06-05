import React from 'react';

//create objects
const SeasonConfig = {
	summer: {
		text: 'It is super hot here',
		iconName: 'sun',
	},
	winter: {
		text: 'It is chilly here',
		iconName: 'snowflake',
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = props => {
	//console.log('lat:' + props.lat);
	//get the latitude and month and then assign to season
	//month will be in integer form: 0-11, jan-dec

	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = SeasonConfig[season];
	//all these are moved to the objects above
	/*const text = season === 'winter' ? 'It is chilly here' : 'It is super hot here';
	const icon = season === 'winter' ? 'snowflake' : 'sun';*/
	return (
		<div>
			<i className={`${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
