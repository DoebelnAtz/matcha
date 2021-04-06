import styled, { css } from 'styled-components';
import { color, cursor, shadows, units } from '../../../Styles';

export const BottomNavDiv = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${color.gray200};
	display: flex;
	${shadows.standOut};
	border-radius: ${units.rl};
`;

export const BottomNavIconContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: ${units.ps} ${units.ps} ${units.ps} ${units.ps};
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

export const BottomNavIcon = styled.div`
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 44px;
	width: 44px;
	margin: auto;
`;
