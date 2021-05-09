import styled from 'styled-components';
import { color, components, font, units } from '../../../../../Styles';

export const ProfileTagsDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: ${units.pm} 0;
	border-bottom: 2px solid ${color.primary}40;
`;

export const ProfileTagTitleContainer = styled.div`
	width: 100%;
	display: flex;
`;

export const ProfileTagLabel = styled.label`
	font-size: 20px;
	flex-shrink: 0;
	padding-left: ${units.ps};
	margin: auto 0 0 0;
	${font.normal};
`;

export const ProfileTagsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: ${units.mm};
`;

export const ProfileTagDiv = styled.div`
	height: 24px;
	padding: 4px ${units.pm};
	background-color: ${color.primary200};
	color: ${color.primary700};
	text-align: center;
	margin-right: ${units.mm};
	border-radius: ${units.rm};
	line-height: 24px;
	${font.normal};
`;

export const ProfileAddTagDiv = styled.div`
	width: 100%;
	display: flex;
	margin-top: ${units.mm};
`;

export const ProfileAddTagButton = styled.button`
	${components.button};
	font-size: 18px;
	height: 33px;
	margin-top: auto;
	margin-left: auto;
	text-transform: lowercase;
`;

export const ProfileTagInput = styled.input`
	${components.input};

	width: calc(100% - 160px);
`;
