import styled from 'styled-components';
import { color } from '../../../../Styles';

export const FeedCardDiv = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	display: ${(props) => (props.page > props.index ? 'none' : 'block')};
	z-index: ${(props) => 50 - (props.index - props.page)};
	background-color: navajowhite;
`;
export const ProfilePictureDiv = styled.div`
	width: 100%;
	height: 70%;
`;
