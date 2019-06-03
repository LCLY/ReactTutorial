import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; //get image from the faker library
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail
				author="Sam"
				timeAgo="Today at: 4PM"
				commentText="Hey hey hey"
				avatarPic={faker.image.avatar()}
			/>
			<CommentDetail
				author="Abu"
				timeAgo="Today at: 5PM"
				commentText="NANIDESUKA"
				avatarPic={faker.image.avatar()}
			/>
			<CommentDetail
				author="Suzu"
				timeAgo="Today at: 6PM"
				commentText="Testing 1 2 3"
				avatarPic={faker.image.avatar()}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
