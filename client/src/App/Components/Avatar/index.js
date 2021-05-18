import React from 'react';
import { AvatarContainer, AvatarPicture } from './styles';

const Avatar = ({ src, height = '50px', width = '50px' }) => {
	return (
		<AvatarContainer height={height} width={width}>
			<AvatarPicture src={src} height={height} width={width} />
		</AvatarContainer>
	);
};

export default Avatar;
