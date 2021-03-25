import styled from 'styled-components';
import { color } from '../../../Styles';

export const PictureDiv = styled.div`
	width: 100%;
	height: 100%;
`;

export const ImageDiv = styled.div`
	height: 100%;
	width: 100%;
	background: url(${(props) => props.src});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
`;
