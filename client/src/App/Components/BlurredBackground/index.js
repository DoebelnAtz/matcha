import React from 'react';
import { Blurhash } from 'react-blurhash';
import { BlurredBackgroundDiv } from './styles';

const BlurredBackground = ({ hash, height, width }) => {
	return (
		<BlurredBackgroundDiv id={'blurred-background'}>
			<Blurhash
				hash={hash}
				width={width || '100%'}
				height={height || '100%'}
			/>
		</BlurredBackgroundDiv>
	);
};

export default BlurredBackground;
