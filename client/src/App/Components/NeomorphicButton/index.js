import React from 'react';
import { ButtonDiv } from './styles';

const NeomorphicButton = ({
	height = '50px',
	width = '50px',
	onClick,
	children,
	style,
}) => {
	return (
		<ButtonDiv
			width={width}
			height={height}
			onClick={onClick}
			style={style}
		>
			{children}
		</ButtonDiv>
	);
};

export default NeomorphicButton;
