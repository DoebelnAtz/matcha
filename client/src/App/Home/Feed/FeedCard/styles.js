import styled from 'styled-components';
import { color, font, units } from '../../../../Styles';
import { animated } from 'react-spring';

export const FeedCardDiv = styled(animated.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	border-radius: ${units.rm};
	display: flex;
	flex-direction: column;
	user-select: none;
	border-radius: ${units.rm};
	overflow: hidden;
	touch-action: none;
	will-change: transform;
	box-shadow: ${(props) =>
		props.index === props.page ? '0px 0px 30px 2px gray' : 'none'};
	z-index: ${(props) => 50 - (props.index - props.page)};
`;

const profilePicSize = '400px';

export const ProfilePictureDiv = styled.div`
	width: 100%;
	height: calc(100% - 100px - 150px);
	position: relative;
	margin-top: 80px;
	border-radius: 20px;
	overflow: hidden;
	z-index: 100;
`;

export const FeedCardContentDiv = styled.div`
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	position: relative;
	z-index: 1;
`;

export const FeedCardNameDiv = styled.div`
	margin: 0 auto;
`;

export const FeedCardNameSpan = styled.span`
	color: ${color.primaryShade};
	${font.roboto};
	font-size: 38px;
`;

export const FeedCardBioDiv = styled.div`
	margin: 0 auto;
	padding: 15%;
`;

export const FeedCardBioParagraph = styled.p`
	font-size: 24px;
	${font.roboto};
	padding: 0;
	margin: 0;
	color: ${color.text};
`;
