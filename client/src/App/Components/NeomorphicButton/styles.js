import styled from 'styled-components';
import { color, cursor, units } from '../../../Styles';

export const ButtonDiv = styled.div`
	padding: ${units.ps};
	margin: auto;
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	border-radius: 50%;
	display: flex;
	-webkit-transform-style: preserve-3d;

	background-color: ${color.gray200};
	${cursor.clickable};
	transition: all 0.15s ease-in-out;

	box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.3),
		-6px -6px 10px 2px rgba(255, 255, 255, 0.5),
		inset 2px 2px 10px 0px rgba(0, 0, 0, 0.05),
		inset -2px -2px 10px 0px rgba(255, 255, 255, 0.2);
	&:hover {
		box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.2),
			-4px -4px 10px 2px rgba(255, 255, 255, 0.5),
			inset 3px 3px 10px 0px rgba(0, 0, 0, 0.1),
			inset -3px -3px 10px 0px rgba(255, 255, 255, 0.5);
		& > div {
			transform: scale(0.98);
		}
	}
	& > div {
		margin: auto;
	}
	border: 1px solid ${color.gray300};
`;
