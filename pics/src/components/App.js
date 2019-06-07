import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends React.Component {
	//generally the term is submitted through the Search Bar component, it goes into the prop.onSubmit, back to this.onSearchSubmit and then get the term from the function below
	onSearchSubmit(term) {
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID 57e1fe643a74d96ba2ec915ea39670b3468aebf624ec02d3e65bb046058f3d05',
			},
		});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
