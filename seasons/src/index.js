import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	//this is specific to javascript
	constructor(props) {
		super(props);
		//initialize relevant value
		this.state = { lat: null };
	}

	render() {
		window.navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.log(err));
		return <div>Latitude: </div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
