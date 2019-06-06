import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//functional component to show simple content without any logic behind
//class component show content that requires complicated logic, show data that changes overtime
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

	//helper function
	renderContent() {
		//if theres error message and theres no latitude
		if (this.state.errorMessage && !this.state.lat) {
			return <div> Error: {this.state.errorMessage}</div>;
		}
		//otherwise
		if (this.state.lat && !this.state.errorMessage) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		//if non is available, load the loading screen
		return <Spinner message="Please accept location request" />;
	}

	render() {
		return <div className="border red">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
