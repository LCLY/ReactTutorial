import React from 'react';
import VideoItem from '../components/VideoItem';
//functional component

//another way is to use props
/*const VideoList = (props) => {
	return <div>{props.videos.length}</div>;
}; */

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map(video => {
		return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
	});

	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
