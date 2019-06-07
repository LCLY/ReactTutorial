import React from 'react';

const ImageList = props => {
	/*
    they do the same thing
    const images = props.images.map((image) => {
		return <img alt={image.description} key={image.id} src={image.urls.regular} />;
    });
    
    const images = props.images.map(({description, id, urls}) => {
		return <img alt={description} key={id} src={urls.regular} />;
	});
    */

	const images = props.images.map(({ description, id, urls }) => {
		return <img alt={description} key={id} src={urls.regular} />;
	});
	return <div>{images}</div>;
};

export default ImageList;
