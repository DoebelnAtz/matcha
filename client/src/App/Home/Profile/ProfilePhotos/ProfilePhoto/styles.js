import styled from 'styled-components';
import { color, shadows, units } from '../../../../../Styles';

export const ProfilePhotoDiv = styled.div`
	width: 40%;
	height: 120px;
	margin-bottom: ${units.mxl};
	border: 6px solid ${color.gray200};
	border-radius: ${units.rl};
	${shadows.standOut};
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;
