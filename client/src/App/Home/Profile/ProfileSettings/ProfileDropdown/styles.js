import styled from 'styled-components';
import { color, font, units } from '../../../../../Styles';

export const ProfileDropdownDiv = styled.div`
	width: calc(100% - ${units.ps} * 2);
	display: flex;
	flex-direction: column;
	padding: ${units.pm} ${units.ps};
	border-bottom: 2px solid ${color.primary}40;
`;

export const ProfileDropdownTitleContainer = styled.div`
	width: 100%;
	display: flex;
`;

export const ProfileDropdownLabel = styled.span`
	font-size: 20px;
	flex-shrink: 0;
	margin: auto 0 0 0;
	${font.normal};
`;

export const ProfileDropdownContainer = styled.div`
	width: 100%;
	margin-top: ${units.mm};
	display: flex;
`;
