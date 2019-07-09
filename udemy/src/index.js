//Import React and ReactDOM libraries
import React from 'react'; //ES2015 Modules system
import ReactDOM from 'react-dom';

//CommonJS Modules use require import statement

//Create a react component
//in JSX use className instead of class
const App = () => {
	return (
		<div>
			<label className="label" for="name">
				Enter name:
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}> Submit </button>
		</div>
	);
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
