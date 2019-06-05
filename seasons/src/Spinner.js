import React from 'react';

const Spinner = props => {
	return (
		<div class="ui active dimmer">
			<div class="ui big text loader">{props.message}</div>
		</div>
	);
};

//this is same as doing {props.message || 'Loading...'} just more elegant
Spinner.defaultProps = {
	message: 'Loading...',
};

export default Spinner;
