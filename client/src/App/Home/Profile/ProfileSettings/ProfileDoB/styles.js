import styled from 'styled-components';
import { color, font, units } from '../../../../../Styles';

export const ProfileDobDiv = styled.div`
	width: calc(100% - ${units.ps} * 2);
	display: flex;
	flex-direction: column;
	padding: ${units.pm} ${units.ps};
	border-bottom: 2px solid ${color.primary}40;
`;

export const ProfileDobTitleContainer = styled.div`
	width: 100%;
	display: flex;
`;

export const ProfileDobLabel = styled.span`
	font-size: 20px;
	flex-shrink: 0;
	margin: auto 0 0 0;
	${font.normal};
`;

export const ProfileDobSelectorContainer = styled.div`
	width: 100%;
	display: flex;
`;
