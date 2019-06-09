//this is to show one image by itself
import React from 'react';
class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { span: 0 };
		//createRef gives access to a single DOM element
		//used to replaced document.querySelector('img')
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		console.log(this.imageRef);
		console.log(this.imageRef.current.clientHeight); //this line would just show 0 because we fetch the data too early
		this.imageRef.current.addEventListener('load', this.setSpans); //callback setSpans after load
	}

	setSpans = () => {
		console.log(this.imageRef.current.clientHeight); //after loading, the callback function will be able to retrieve data
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState({ spans });
	};

	render() {
		const { description, urls } = this.props.image; //with this line, we can remove the this.props.image. from this.props.image.description
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;
