import styled from 'styled-components';
import { color, font, units } from '../../../../../Styles';

export const ProfileInputDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: ${units.pm} 0;
	border-bottom: 2px solid ${color.primary}40;
`;

export const ProfileInputTitleContainer = styled.div`
	width: 100%;
	display: flex;
`;

export const ProfileInputLabel = styled.label`
	font-size: 20px;
	flex-shrink: 0;
	padding-left: ${units.ps};
	margin: auto 0 0 0;
	${font.normal};
`;

export const ProfileInputEdit = styled.button`
	height: 26px;
	width: 50px;
	margin: auto 0 0 0;
	flex-shrink: 0;
	padding: 0 ${units.ps};
	background-image: url(${({ src }) => src});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 20px;
	border: none;
	background-color: transparent;
	&:focus {
		outline: none;
	}
`;

export const ProfileInputInput = styled.input`
	${font.normal};
	color: ${color.primary700};
	width: calc(100% - ${units.ps} * 2);
	padding: 4px ${units.ps};
	text-align: start;
	margin: ${units.mm} 0 0 0;
	border-radius: ${units.rm};
	font-size: 20px;
	border: none;
	flex-shrink: 1;
	flex-grow: 1;
	text-overflow: ellipsis;
	overflow: hidden;
	background-color: ${color.primary100};
	white-space: nowrap;
	&:focus {
		outline: none;
	}
`;
