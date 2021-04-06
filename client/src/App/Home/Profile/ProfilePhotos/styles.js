import styled from 'styled-components';
import { color, shadows, units } from '../../../../Styles';

export const ProfilePhotosDiv = styled.div`
	width: calc(100% - ${units.pm} * 2);
	padding: ${units.pm};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const ProfilePhotosContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: ${units.ml};
	flex-wrap: wrap;
	justify-content: space-between;
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
