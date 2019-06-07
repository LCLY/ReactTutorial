import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };
	//gets called when anyone change inside of input
	/*onInputChange(event) {
		//console.log(event.target.value);
	}*/

	onFormSubmit = event => {
		//prevent the form to submit automatically anad submit the page
		event.preventDefault();
		//this is to send the data back to parent
		this.props.onSubmit(this.state.term);
		console.log(this.state.term);
	};

	//there should not be () in onInputChange since its a callback function,
	//meaning it should only be called in certain situation if add () it will always be called every render

	//onChange is a special name, use for changed text/input
	//there are onClick, onSubmit
	//onChange- user change text, onClick - user click, onSubmit - user submit form

	//Event handler Syntax
	//Syntax 1: onChange = {this.onInputChange}
	//Syntax 2: onChange={event => console.log(event.target.value)}
	//Syntax 2 will not require another method such as onInputChange which is more elegant

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label> Image Search </label>
						{/*<input type="text" onChange={this.onInputChange} />*/}
						<input
							type="text"
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
						{/* this.state.term will overwrite the value of the input so the input box will show the string*/}
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
