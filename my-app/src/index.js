import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*
1.The onClick prop on the built-in DOM <button> component tells React to set up a click event listener.
2.When the button is clicked, React will call the onClick event handler that is defined in Square’s render() method.
3.This event handler calls this.props.onClick(). The Square’s onClick prop was specified by the Board.
4.Since the Board passed onClick={() => this.handleClick(i)} to Square, the Square calls this.handleClick(i) when clicked.
5.We have not defined the handleClick() method yet, so our code crashes. If you click a square now, you should see a red error screen saying something like “this.handleClick is not a function”.*/

//renders button
//child component
class Square extends React.Component {
	render() {
		//passing props: flow of information
		return (
			<button
				className="square"
				onClick={() =>
					//auto update child component
					//this.setState({ value: "X" }
					this.props.onClick()
				}
			>
				{this.props.value}
			</button>
		);
	}
}

//render 9 squares
//Parent component
class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill,
		};
	}

	renderSquare(i) {
		return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
	}

	render() {
		const status = "Next player: X";

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
