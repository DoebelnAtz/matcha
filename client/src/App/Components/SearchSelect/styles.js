import styled from 'styled-components';
import { color, components, cursor, font, units } from '../../../Styles';

export const SearchSelectDiv = styled.div`
	position: relative;
	${font.normal};
	color: ${color.primary700};
	font-size: 16px;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
`;

export const SearchContainer = styled.div`
	width: 100%;
	display: flex;
	transition: all 0.2s ease-in-out;

	background-color: ${color.primary100};
	height: 33px;
	border-radius: ${({ expanded }) =>
		!expanded ? units.rm : `${units.rm} ${units.rm} 0 0`};
`;

export const SearchIcon = styled.img`
	margin: auto ${units.ms} auto auto;
	height: calc(6px + ${(props) => props.height} * 0.1);
	width: 20px;
	user-select: none;
	transform: ${({ expanded }) =>
		!expanded ? 'rotate(0deg)' : 'rotate(90deg)'};
`;

export const OptionSearch = styled.input`
	${components.input};
	margin: 0;
	font-size: 16px;
	width: 120px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const OptionList = styled.div`
	position: ${({ modalOverflow }) => (modalOverflow ? 'fixed' : 'absolute')};
	width: 100%;
	background-color: ${color.primary100};
	z-index: 5;
	transition: opacity 0.3s ease-in-out;
	display: ${({ expanded }) => (expanded ? 'block' : 'none')};
	max-height: 200px;
	overflow-y: auto;
	overflow-x: hidden;
	border-radius: 0 0 ${units.rm} ${units.rm};
`;

export const Option = styled.div`
	${font.text};
	font-size: 14px;
	letter-spacing: 0.5px;
	font-weight: 300;
	color: ${color.primary700};
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	height: 28px;
	width: calc(100% - 8px);
	line-height: 28px;
	margin: 0 auto;
	padding: 0 10px;
	text-align: left;
	background-color: ${(props) =>
		props.highlighted ? color.tertiary : color.primary100};
	transition: background-color 0.05s;
	${cursor.clickable};
	&:hover {
		background-color: ${color.primary200};
	}
`;
