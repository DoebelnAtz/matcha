import styled, { css } from 'styled-components';
import { color, cursor, shadows, units } from '../../../Styles';

export const BottomNavDiv = styled.div`
	width: 100%;
	height: 100%;
	background-color: transparent;
	display: flex;
	position: relative;
	z-index: 55;
	-webkit-transform-style: preserve-3d;
	-webkit-transform: translate3d(0, 0, 0);
`;

export const BottomNavIconContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding-bottom: env(safe-area-inset-bottom);
`;
const radiusSize = `28px`;

export const BottomNavHomeIconContainer = styled.div`
	width: 142px;
	height: 68px;
	flex-shrink: 0;
	display: flex;
	z-index: 103;
	border-radius: ${units.rm};
	background: linear-gradient(0deg, ${color.gray300} 50%, transparent 50%);
	position: absolute;
	bottom: calc(16px + env(safe-area-inset-bottom));
`;

export const BottomNavHomeIcon = styled.div`
	width: 50px;
	height: 100%;
	border-radius: 30px;
	${cursor.clickable};
	background-image: url(${(props) => props.src});
	background-position: 50% 40%;
	background-size: 34px;
	margin: auto;
	background-repeat: no-repeat;
`;

const navColor = color.gray100;

export const BottomNavProfileIcon = styled.div`
	width: 50%;
	height: calc(50px + env(safe-area-inset-bottom));
	margin-top: auto;
	background-color: ${navColor};
	border-right: 2px solid ${color.gray300};
	${cursor.clickable};
	transition: all 0.1s ease-in-out;
	background-image: url(${(props) => props.src});
	background-position: 30% 50%;
	background-size: 34px;
	z-index: 2;
	position: relative;
	background-repeat: no-repeat;
	&:hover {
		background-color: ${color.gray200};
		&::before {
			box-shadow: 0 ${radiusSize} 0 0 ${color.gray200}; /* This is where the magic happens! */
		}
	}
	&::before {
		content: '';
		position: absolute;
		transition: all 0.1s ease-in-out;

		background-color: transparent;
		bottom: calc(50px + env(safe-area-inset-bottom));
		height: calc(${radiusSize} * 2);
		width: ${radiusSize};
		border-bottom-left-radius: ${radiusSize};
		box-shadow: 0 ${radiusSize} 0 0 ${navColor}; /* This is where the magic happens! */
	}
`;

export const BottomNavSearchIcon = styled.div`
	width: 50%;
	height: calc(50px + env(safe-area-inset-bottom));
	margin-top: auto;
	background-color: ${navColor};
	border-left: 2px solid ${color.gray300};
	transition: all 0.1s ease-in-out;
	${cursor.clickable};
	background-image: url(${(props) => props.src});
	background-position: 70% 50%;
	background-size: 34px;
	background-repeat: no-repeat;
	&:hover {
		background-color: ${color.gray200};
		&::after {
			box-shadow: 0 25px 0 0 ${color.gray200}; /* This is where the magic happens! */
		}
	}
	&::after {
		content: '';
		position: absolute;
		transition: all 0.1s ease-in-out;
		background-color: transparent;
		bottom: calc(50px + env(safe-area-inset-bottom));
		right: 0;
		height: calc(${radiusSize} * 2);
		width: ${radiusSize};
		border-bottom-right-radius: ${radiusSize};
		box-shadow: 0 ${radiusSize} 0 0 ${navColor}; /* This is where the magic happens! */
	}
`;

export const BottomNavIcon = styled.div`
	height: 44px;
	width: 44px;
	margin: auto;
`;
