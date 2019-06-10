import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('buildings'); //default term
	}

	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	//a callback function
	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						{/*eleven out of sixteen columns*/}
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} /> {/*single video that is selected*/}
						</div>
						{/*five out of sixteen columns*/}
						<div className="five wide column">
							<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />{' '}
							{/*array of videos*/}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
