import styled, { css } from 'styled-components';
import { color, cursor, font, shadows, units } from '../../../Styles';

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

export const TopNavLogoDiv = styled.div`
	display: flex;
`;

export const TopNavLogo = styled.h1`
	margin: auto;
	padding: 0;
	user-select: none;
	-moz-user-select: none;
	cursor: auto;
	background: rgb(181, 23, 29);
	background: linear-gradient(
		116deg,
		${color.primary500} 0%,
		${color.primary700} 100%
	);
	${font.logo};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const TopNavIconContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
