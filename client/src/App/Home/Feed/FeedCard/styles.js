import styled from 'styled-components';
import { color } from '../../../../Styles';
import { animated } from 'react-spring';

export const FeedCardDiv = styled(animated.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	user-select: none;
	touch-action: none;
	will-change: transform;
	box-shadow: 0px 0px 30px 2px gray;
	z-index: ${(props) => 50 - (props.index - props.page)};
	background-color: navajowhite;
`;
export const ProfilePictureDiv = styled.div`
	width: 100%;
	height: 70%;
`;
