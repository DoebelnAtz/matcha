import styled from 'styled-components';
import { color, font, shadows, units } from '../../../../Styles';

export const ProfilePhotosDiv = styled.div`
	width: calc(100% - ${units.pm} * 2);
	height: calc(100% - ${units.pm} * 2);
	padding: ${units.pm} calc(${units.pm}) ${units.pm} ${units.pm};
	display: flex;
	overflow: auto;
	flex-direction: column;
`;

export const ProfilePhotosPageTitle = styled.h2`
	color: ${color.primaryShade};
	margin: ${units.ml};
	${font.normal};
`;

export const AddPhotoDiv = styled.div`
	width: 40%;
	height: 120px;
	border: 6px solid ${color.gray200};
	border-radius: ${units.rl};
	${shadows.standOut};
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: 50px auto;
	background-repeat: no-repeat;
`;
