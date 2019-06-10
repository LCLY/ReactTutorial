import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
	state = { videos: [], selectedVideo: null };
	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		this.setState({ videos: response.data.items });
	};

	//a callback function
	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoDetail video={this.state.selectedVideo} /> {/*single video that is selected*/}
				<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} /> {/*array of videos*/}
			</div>
		);
	}
}

export default App;
