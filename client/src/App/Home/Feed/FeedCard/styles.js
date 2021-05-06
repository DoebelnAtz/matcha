import styled from 'styled-components';
import { color, font, units } from '../../../../Styles';
import { animated } from 'react-spring';

export const FeedCardDiv = styled(animated.div)`
	width: calc(100% - ${units.mm} * 2);
	height: calc(100% - ${units.mm}  - ${units.mxl});
	margin: ${units.mm} ${units.ml} ${units.mxl} ${units.mm};
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

export const ProfilePictureDiv = styled.div`
	width: 100%;
	height: calc(100%);
	position: relative;
	overflow: hidden;
	z-index: 50;
	border-radius: ${units.rm};

`;

const cardHeight = '70px'

export const FeedCardContentDiv = styled.div`
	display: flex;
	margin: auto;
	height: ${cardHeight};
	flex-shrink: 0;
	width: calc(100% - ${units.pm} * 2 - ${units.ms} * 2);
	padding: ${units.pm};
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: ${units.rs};
	flex-direction: column;
	position: relative;
  bottom: calc(${cardHeight} + ${units.pm} * 2 + ${units.ms});
  	z-index: 53;
	border: 1px solid rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(6px) saturate(160%) contrast(120%);
`;

export const FeedCardNameDiv = styled.div`
	margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const FeedCardNameSpan = styled.span`
	color: ${color.text};
	${font.normal};
	font-size: 28px;
  font-weight: 500;
  text-align: center;
`;

export const FeedCardAgeSpan = styled.span`
  color: ${color.text};
  ${font.normal};
  font-weight: 300;
  font-size: 24px;
  margin-top: ${units.ms};
  line-height: 20px;
  text-align: center;
`;

export const FeedCardBioDiv = styled.div`
	margin: 0 auto;
	padding: 15%;
`;

export const FeedCardBioParagraph = styled.p`
	font-size: 24px;
	${font.normal};
	padding: 0;
	margin: 0;
	color: ${color.text};
`;
