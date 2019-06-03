//Import React and ReactDOM libraries
import React from 'react'; //ES2015 Modules system
import ReactDOM from 'react-dom';

//CommonJS Modules use require import statement

//Create a react component

function test() {
	return 'CLICK THIS!';
} //can be used in jsx

//in JSX use className instead of class
const App = () => {
	const buttonText = 'Click Me!';
	const jsObject = { text: 'object' };
	return (
		<div>
			<label className="label" htmlFor="name">
				Enter name:
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}> {jsObject.text} </button>
		</div>
	);
};

//curly braces in JSX return to refer to function or variable outside

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
