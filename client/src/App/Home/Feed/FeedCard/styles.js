import styled from 'styled-components';
import { color } from '../../../../Styles';
import { animated } from 'react-spring';

export const FeedCardDiv = styled(animated.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	display: flex;
	user-select: none;
	touch-action: none;
	will-change: transform;
	box-shadow: ${(props) =>
		props.index === props.page ? '0px 0px 30px 2px gray' : 'none'};
	z-index: ${(props) => 50 - (props.index - props.page)};
	background-color: navajowhite;
`;
export const ProfilePictureDiv = styled.div`
	width: 300px;
	height: 300px;
	margin: 15% auto auto auto;
	position: relative;
	border: 2px solid rgba(255, 255, 255, 0.3);
	border-radius: 150px;
	overflow: hidden;
	z-index: 1;
`;
