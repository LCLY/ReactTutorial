import React from 'react';

class SearchBar extends React.Component {
	//gets called when anyone change inside of input
	onInputChange(event) {
		//console.log(event.target.value);
	}

	//there should not be () in onInputChange since its a callback function,
	//meaning it should only be called in certain situation if add () it will always be called every render

	//onChange is a special name, use for change duh
	//there are onClick, onSubmit
	//onChange- user change text, onClick - user click, onSubmit - user submit form

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label> Image Search </label>
						<input type="text" onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
