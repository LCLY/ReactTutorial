import React from 'react';
import faker from 'faker'; //get image from the faker library

//prop: get data from jsx
//props: getting the three instances we created, author(key):"name"(value)
const CommentDetail = props => {
	//{} to refer props because its javascript props.author to refer to the author object
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.avatarPic} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.timeAgo}</span>
				</div>
				<div className="text">{props.commentText}</div>
			</div>
		</div>
	);
};

export default CommentDetail;
