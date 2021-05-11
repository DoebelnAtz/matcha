import styled from 'styled-components';
import {
	backgroundImage,
	color,
	components,
	cursor,
	font,
	units,
} from '../../../../../Styles';

export const ProfileTagsDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: ${units.pm} 0 4px 0;
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

export const DeleteTagDiv = styled.div`
	width: 0px;
	height: 100%;
	margin: auto auto auto 0;
	border-radius: ${units.rm};
	transition: all 0.3s ease-in-out 0.4s, background-color 0.3s ease-in-out 0s;
	${({ src }) => backgroundImage(src, '20px')};
	background-color: ${color.primary400}70;
	${cursor.clickable};
	&:hover {
		background-color: ${color.primary400}aa;
	}
`;

export const ProfileTagDiv = styled.div`
	height: 24px;
	display: flex;
	user-select: none;
	-moz-user-select: none;
	padding: 4px ${units.pm};
	background-color: ${color.primary200};
	color: ${color.primary700};
	text-align: center;
	margin-right: ${units.mm};
	border-radius: ${units.rm};
	margin-bottom: ${units.ms};
	line-height: 24px;
	${font.normal};
	&:hover {
		& ${DeleteTagDiv} {
			width: 50px;
			margin: auto auto auto ${units.pm};
		}
	}
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
