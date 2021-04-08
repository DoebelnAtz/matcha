import styled from 'styled-components';
import { color, cursor, shadows, units } from '../../../../../../Styles';

export const ProfilePhotoDelete = styled.div`
	background-color: ${color.danger500}77;
	width: 80%;
	height: 0;
	margin: auto auto 0 auto;
	border-radius: ${units.rm} ${units.rm} 0 0;
	transition: height 0.2s ease-in-out;
	${cursor.clickable};
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: 30px auto;
	background-repeat: no-repeat;
	backdrop-filter: blur(6px);
`;

export const ProfilePhotoDiv = styled.div`
	height: 140px;

	margin-bottom: ${units.mxl};
	border: 6px solid ${color.gray200};
	border-radius: ${units.rl};
	box-shadow: ${shadows.standOut};
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	&:hover {
		& ${ProfilePhotoDelete} {
			height: 40px;
		}
	}
`;
