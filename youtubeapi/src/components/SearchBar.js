import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = event => {
		this.setState({ term: event.target.value });
	};

	//this is going to pass to a child component
	onFormSubmit = event => {
		event.preventDefault();
		//TODO: call callback from parent component
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label> Video Search</label>
						<input type="text" value={this.state.term} onChange={this.onInputChange} />
						{/*onInputChange: a callback function when there is an input*, another way is to do e => this.setState({term:e.target.value})*/}
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
