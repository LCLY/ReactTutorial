import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; //get image from the faker library
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="Today at: 4PM"
					commentText="Hey hey hey"
					avatarPic={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Abu"
					timeAgo="Today at: 5PM"
					commentText="NANIDESUKA"
					avatarPic={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Suzu"
					timeAgo="Today at: 6PM"
					commentText="Testing 1 2 3"
					avatarPic={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
