import styled from 'styled-components';
import { color, cursor, shadows, units } from '../../../../../Styles';

export const AddPhotoDiv = styled.div`
	width: 40%;
	height: 120px;
	${cursor.clickable};
	border: 6px solid ${color.gray200};
	margin-bottom: ${units.mxl};
	border-radius: ${units.rl};
	${shadows.standOut};
	display: flex;
	justify-content: center;
	&:hover {
		${shadows.concave};
	}
`;

export const AddPhotoIcon = styled.div`
	height: 50px;
	width: 50px;
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: 50px auto;
	background-repeat: no-repeat;
	margin: auto;
`;

export const HiddenFileInput = styled.input`
	display: none;
`;
