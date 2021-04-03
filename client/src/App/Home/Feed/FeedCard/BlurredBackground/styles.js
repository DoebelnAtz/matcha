import styled from 'styled-components';
import { color } from '../../../../../Styles';

export const BlurredBackgroundDiv = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	&:before {
		background-color: rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(10px) saturate(100%) contrast(45%)
			brightness(130%);
		content: '';
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 1;
	}
`;
