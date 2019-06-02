//Import React and ReactDOM libraries
import React from 'react'; //ES2015 Modules system
import ReactDOM from 'react-dom';

//CommonJS Modules use require import statement

//Create a react component
const App = () => {
	return <div> Hi there! </div>;
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
