//this is to show one image by itself
import React from 'react';
class ImageCard extends React.Component {
	render() {
		const { description, urls } = this.props.image; //with this line, we can remove the this.props.image. from this.props.image.description
		return (
			<div>
				<img alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;
