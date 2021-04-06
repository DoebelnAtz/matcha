import styled from 'styled-components';
import { color, shadows, units } from '../../../../../Styles';

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

export const HiddenFileInput = styled.input`
	display: none;
`;
