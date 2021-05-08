import styled from 'styled-components';

import {
	colorAdjust,
	components,
	cursor,
	font,
	color,
	units,
} from '../../../Styles';

export const DropdownDiv = styled.div`
	position: relative;
	${font.normal};
	color: ${color.primary700};
	font-size: 16px;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
`;

export const DropDownIcon = styled.img`
	margin: auto 0 auto auto;
	height: calc(6px + ${(props) => props.height} * 0.1);
	width: 16px;
	transform: ${({ expanded }) =>
		!expanded ? 'rotate(0deg)' : 'rotate(90deg)'};
	transition: all 0.2s ease-in-out;
`;

export const CurrentOption = styled.div`
	padding: 0 10px;
	height: ${(props) => props.height};
	font-size: 16px;
	transition: all 0.2s ease-in-out;
	border-radius: ${({ expanded }) =>
		!expanded ? units.rm : `${units.rm} ${units.rm} 0 0`};
	${cursor.clickable};
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	background-color: ${color.primary100};
	text-transform: uppercase;
	display: flex;
	text-align: center;
	& span {
		vertical-align: middle;
		line-height: ${(props) => props.height};
		margin: auto 0;
	}
`;

export const DropDownList = styled.div`
	position: ${({ modalOverflow }) => (modalOverflow ? 'fixed' : 'absolute')};
	width: calc(${({ width }) => width} - 2px);
	background-color: ${color.primary100};
	z-index: 5;
	max-height: 200px;
	overflow-y: auto;
	overflow-x: hidden;
	border-radius: 0 0 ${units.rm} ${units.rm};
`;

export const SearchInput = styled.input`
	${components.input};
	width: calc(100% - 16px);
	margin: 2px 2px;
	text-transform: uppercase;
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
