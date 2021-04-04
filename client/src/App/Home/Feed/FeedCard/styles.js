import styled from 'styled-components';
import { color, font, units } from '../../../../Styles';
import { animated } from 'react-spring';

export const FeedCardDiv = styled(animated.div)`
	width: calc(100% - ${units.mm} * 2);
	height: calc(100% - 100px - 80px - ${units.mm});
	margin: calc(80px + ${units.mm}) ${units.mm} 0 ${units.mm};
	position: absolute;
	top: 0;
	display: flex;
	flex-direction: column;
	user-select: none;
	overflow: visible;
	touch-action: none;
	will-change: transform;
	z-index: ${(props) => 50 - (props.index - props.page)};
`;

const profilePicSize = '400px';

export const ProfilePictureDiv = styled.div`
	width: 100%;
	height: calc(100%);
	position: relative;
	overflow: hidden;
	z-index: 50;
	border-radius: ${units.rl};

	flex-shrink: 0;
`;

export const FeedCardContentDiv = styled.div`
	display: flex;
	margin: 0 auto;
	height: 50px;
	flex-shrink: 0;
	width: calc(100% - ${units.pm} * 2 - ${units.ml} * 2);
	padding: ${units.pm};
	background-color: rgba(255, 255, 255, 0.75);
	border-radius: ${units.rl};
	flex-direction: column;
	position: relative;
	bottom: 65px;
	z-index: 51;
	backdrop-filter: blur(20px) saturate(130%) contrast(160%);
`;

export const FeedCardNameDiv = styled.div`
	margin: 0;
`;

export const FeedCardNameSpan = styled.span`
	color: ${color.text};
	${font.roboto};
	font-size: 28px;
	text-align: start;
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
