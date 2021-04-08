import styled from 'styled-components';
import { color, cursor, shadows, units } from '../../../../../../Styles';

export const AddPhotoIcon = styled.div`
	height: 50px;
	width: 50px;
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: 50px auto;
	background-repeat: no-repeat;
	transition: all 0.2s ease-in-out;

	margin: auto;
`;

export const AddPhotoDiv = styled.div`
	width: calc(100% - 12px);
	height: 120px;
	${cursor.clickable};
	border: 6px solid ${color.gray200};
	margin-bottom: ${units.mxl};
	margin-top: ${units.ml};
	border-radius: ${units.rl};
	transition: all 0.2s ease-in-out;
	box-shadow: ${shadows.standOut};
	display: flex;
	justify-content: center;
	&:hover {
		box-shadow: ${shadows.standOut}, ${shadows.concave};
		& ${AddPhotoIcon} {
			transform: scale(0.98);
		}
	}
`;

export const HiddenFileInput = styled.input`
	display: none;
`;
