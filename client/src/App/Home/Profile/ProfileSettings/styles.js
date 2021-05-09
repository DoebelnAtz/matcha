import styled from 'styled-components';
import { color, components, font, units } from '../../../../Styles';

export const ProfileSettingsDiv = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
`;

export const ProfileSettingsContainer = styled.div`
	width: calc(100% - ${units.pm} * 2);
	padding: ${units.pm};
	display: flex;
	flex-direction: column;
`;

export const ProfileNameDiv = styled.div`
	width: 100%;
`;

export const ProfileEmailDiv = styled.div`
	width: 100%;
`;

export const ProfileLastnameDiv = styled.div`
	width: 100%;
`;

export const ProfileGenderDiv = styled.div`
	width: 100%;
`;

export const ProfilePreferenceDiv = styled.div`
	width: 100%;
`;

export const ProfileDoBDiv = styled.div`
	width: 100%;
`;
export const ProfileBioDiv = styled.div`
	width: 100%;
`;

export const ProfileTagsDiv = styled.div`
	width: 100%;
`;

export const ProfileSettingsButtonContainer = styled.div`
	width: 100%;
	display: flex;
	margin-top: ${units.mm};
	margin-bottom: ${units.ml};
`;

export const ProfileSettingsSaveButton = styled.button`
	${components.button};
`;

export const ProfileSettingsDiscardButton = styled.button`
	${components.button};
	margin-right: auto;
	background-color: ${color.gray500};
	color: ${color.gray900};
	&:hover {
		background-color: ${color.gray600};
	}
`;
