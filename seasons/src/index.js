import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	//this is specific to javascript
	/*constructor(props) {
		super(props);
		//initialize relevant value
		this.state = { lat: null, errorMessage: '' };
	}*/

	//this line is equivalent to the whole 5 lines above because babel will translate this line to other ES format
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		//console.log('My component was rendered to the screen');
		console.log('componentDidMount');
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message }),
			//never assign the value directly to this.state e.g. this.state.lat = position.coords.latitude after initialized
		);
	}

	componentDidUpdate() {
		//console.log('My component was just updated - it rerendered');
		console.log('componentDidUpdate');
	}

	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div> Error: {this.state.errorMessage}</div>;
		}
		if (this.state.lat && !this.state.errorMessage) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <div>loading</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
