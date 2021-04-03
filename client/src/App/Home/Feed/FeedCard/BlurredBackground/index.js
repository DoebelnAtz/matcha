import React from 'react';
import { Blurhash } from 'react-blurhash';
import { BlurredBackgroundDiv } from './styles';

const BlurredBackground = ({ hash }) => {
	return (
		<BlurredBackgroundDiv>
			<Blurhash hash={hash} width={'100%'} height={'100%'} />
		</BlurredBackgroundDiv>
	);
};

export default BlurredBackground;
