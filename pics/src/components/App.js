import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
	//generally the term is submitted through the Search Bar component, it goes into the prop.onSubmit, back to this.onSearchSubmit and then get the term from the function below
	onSearchSubmit(term) {
		console.log(term);
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
