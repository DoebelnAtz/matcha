import styled, { css } from 'styled-components';
import { color, cursor, shadows, units } from '../../../Styles';

export const BottomNavDiv = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${color.gray400};
	display: flex;
	padding-bottom: calc(${units.pm} + env(safe-area-inset-bottom));
`;

export const BottomNavIconContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const BottomNavIconDiv = styled.div`
	padding: 0 ${units.pl};
	display: flex;
	${cursor.clickable};
	width: 100%;
	transition: all 0.1s ease-in-out;
	${(props) =>
		props.active
			? css`
					box-shadow: inset 2px 2px 10px 2px rgba(0, 0, 0, 0.15),
						inset -2px -2px 10px 2px rgba(255, 255, 255, 0.9);
			  `
			: css`
					box-shadow: inset 1px 1px 10px 2px rgba(0, 0, 0, 0.1),
						inset -1px -1px 10px 2px rgba(255, 255, 255, 0.8);
			  `};
	&:hover {
		box-shadow: inset 3px 3px 10px 2px rgba(0, 0, 0, 0.2),
			inset -3px -3px 10px 2px rgba(255, 255, 255, 1);
		& > div {
			transform: scale(0.98);
		}
	}
	&:nth-child(1n) {
		border-radius: 0;
	}
	&:first-child {
		border-radius: ${units.rm} 0 0 ${units.rm};
	}
	&:last-child {
		border-radius: 0 ${units.rm} ${units.rm} 0;
	}
`;

export const BottomNavHomeIconContainer = styled.div`
	width: 80px;
	height: 80px;
	flex-shrink: 0;
	display: flex;
	border-radius: 40px;
	background-color: ${color.gray400};
	position: absolute;
	bottom: 10px;
`;

export const BottomNavHomeIcon = styled.div`
	width: 60px;
	height: 60px;
	margin: auto;
	background-color: ${color.gray200};
	border-radius: 30px;
	${cursor.clickable};
	box-shadow: ${shadows.standOut};
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: 44px;
	background-repeat: no-repeat;
	transition: all 0.15s ease-in-out;
	&:hover {
		box-shadow: ${shadows.standOut}, ${shadows.concave};
	}
`;

const navColor = color.gray200;

export const BottomNavProfileIcon = styled.div`
	width: 50%;
	height: calc(50px + env(safe-area-inset-bottom));
	margin-top: auto;
	background-color: ${navColor};
	border-right: 2px solid ${color.gray400};
	${cursor.clickable};
	transition: all 0.1s ease-in-out;
	background-image: url(${(props) => props.src});
	background-position: 40% 50%;
	background-size: 34px;
	background-repeat: no-repeat;
	&:hover {
		background-color: ${color.gray300};
		&::before {
			box-shadow: 0 25px 0 0 ${color.gray300}; /* This is where the magic happens! */
		}
	}
	&::before {
		content: '';
		position: absolute;
		transition: all 0.1s ease-in-out;

		background-color: transparent;
		bottom: 50px;
		height: 50px;
		width: 25px;
		border-bottom-left-radius: 25px;
		box-shadow: 0 25px 0 0 ${navColor}; /* This is where the magic happens! */
	}
`;

export const BottomNavSearchIcon = styled.div`
	width: 50%;
	height: calc(50px + env(safe-area-inset-bottom));
	margin-top: auto;
	background-color: ${navColor};
	border-left: 2px solid ${color.gray400};
	transition: all 0.1s ease-in-out;

	background-image: url(${(props) => props.src});
	background-position: 60% 50%;
	background-size: 34px;
	background-repeat: no-repeat;
	&:hover {
		background-color: ${color.gray300};
		&::after {
			box-shadow: 0 25px 0 0 ${color.gray300}; /* This is where the magic happens! */
		}
	}
	&::after {
		content: '';
		position: absolute;
		transition: all 0.1s ease-in-out;

		background-color: transparent;
		bottom: 50px;
		right: 0;
		height: 50px;
		width: 25px;
		border-bottom-right-radius: 25px;
		box-shadow: 0 25px 0 0 ${navColor}; /* This is where the magic happens! */
	}
`;

export const BottomNavIcon = styled.div`
	height: 44px;
	width: 44px;
	margin: auto;
`;
