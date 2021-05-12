import styled, { css } from 'styled-components';
import { color, cursor, shadows, units } from '../../../Styles';

const navColor = color.gray100;
const radiusSize = `28px`;
export const TopNavDiv = styled.div`
	width: 100%;
	height: 100%;
	background-color: transparent;
	display: flex;
	padding-bottom: calc(${units.pm} + env(safe-area-inset-bottom));

	&::before {
		content: '';
		position: absolute;
		transition: all 0.1s ease-in-out;

		background-color: transparent;
		bottom: calc(0px - calc(${radiusSize} * 2));
		height: calc(${radiusSize} * 2);
		left: 0;
		width: ${radiusSize};
		border-top-left-radius: ${radiusSize};
		box-shadow: 0 -${radiusSize} 0 0 ${navColor}; /* This is where the magic happens! */
	}

	&::after {
		content: '';
		position: absolute;
		transition: all 0.1s ease-in-out;

		background-color: transparent;
		bottom: calc(0px - calc(${radiusSize} * 2));
		right: 0;
		height: calc(${radiusSize} * 2);
		width: ${radiusSize};
		border-top-right-radius: ${radiusSize};
		box-shadow: 0 -${radiusSize} 0 0 ${navColor}; /* This is where the magic happens! */
	}
`;

export const TopNavIconContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
