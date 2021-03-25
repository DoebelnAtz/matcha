import React from 'react';
import { ImageDiv, PictureDiv } from './styles';

const Picture = ({ pic }) => {
	return (
		<PictureDiv>
			<ImageDiv src={pic.url} />
		</PictureDiv>
	);
};

export default Picture;
