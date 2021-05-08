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
