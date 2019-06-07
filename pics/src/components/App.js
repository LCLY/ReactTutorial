import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
	state = { images: [] };
	//generally the term is submitted through the Search Bar component, it goes into the prop.onSubmit, back to this.onSearchSubmit and then get the term from the function below
	//1 way to get response/result data
	/*onSearchSubmit(term) {
		axios
			.get('https://api.unsplash.com/search/photos', {
				params: { query: term },
				headers: {
					Authorization: 'Client-ID 57e1fe643a74d96ba2ec915ea39670b3468aebf624ec02d3e65bb046058f3d05',
				},
			})
			.then(response => {
				console.log(response.data.results);
			});
	}*/

	//another method: using async and await
	onSearchSubmit = async term => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term },
		});

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
