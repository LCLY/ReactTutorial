import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; //get image from the faker library
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail author="Sam" />
			<CommentDetail author="Abu" />
			<CommentDetail author="What" />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
