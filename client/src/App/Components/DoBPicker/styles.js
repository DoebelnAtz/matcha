import styled from 'styled-components';
import { color, font, units } from '../../../Styles';

export const DoBSelectorContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

export const DoBTimeContainer = styled.div`
	font-size: 16px;
	${color.text};
	display: flex;
	flex-direction: column;
	${font.normal};
	margin: ${units.mm} ${units.ms} 0 0;
	&:last-child {
		margin: ${units.mm} 0 0 0;
	}
`;

export const DropDownContainer = styled.div`
	margin-top: ${units.ms};
`;

export const DoBSelect = styled.select`
	margin: ${units.ms} 0;
	${font.normal};
	font-weight: 300;
	font-size: 16px;
	border: none;

	background-color: ${color.primary100};
	border-radius: ${units.rm};
	padding: 2px 6px;
	&:focus {
		outline: none;
	}
`;

export const DoBSelectOption = styled.option``;
