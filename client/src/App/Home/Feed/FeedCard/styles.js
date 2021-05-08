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
	position: absolute;
	overflow: hidden;
	border-radius: ${units.rm};

`;

const cardHeight = ({expanded}) => expanded ? '200px' : '70px'

export const FeedCardContentDiv = styled(animated.div)`
	display: flex;
	margin: auto auto ${units.ms} auto;
  	transition: all 0.5s ease-in-out;
	//height: ${cardHeight};
	flex-shrink: 0;
	width: calc(100% - ${units.pm} * 2 - ${units.ms} * 2);
	padding: ${units.pm};
	background-color: ${({expanded}) => expanded ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.7)'} ;
	border-radius: ${units.rs};
	flex-direction: column;
	position: relative;
  overflow: hidden;
  	z-index: 53;
	border: 1px solid rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(6px) saturate(160%) contrast(120%);
`;

export const FeedCardContainerDiv = styled.div`
    display: flex;
  flex-direction: column;
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
  line-height: 28px;
  text-align: center;
`;

export const FeedCardAgeSpan = styled.span`
  color: ${color.gray700};
  ${font.normal};
  font-weight: 300;
  font-size: 20px;
  margin-top: ${units.mm};
  line-height: 20px;
  text-align: center;
`;

export const FeedCardBioDiv = styled.div`
	margin: 0 auto;
	padding: 15%;
`;

export const FeedCardTagDiv = styled.div`
    display: flex;
  flex-wrap: wrap;
  width: calc(100% - ${units.pm} * 2);
  padding: 0 ${units.pm};
  margin-top: ${units.ml};
`;

export const FeedCardTag = styled.div`
    background-color: ${color.primary200};
  height: 20px;
  margin: 0 ${units.ms} ${units.ms} 0;
  display: flex;
  padding: 4px ${units.pm};
  border-radius: ${units.rm};
`;

export const FeedCardTagName = styled.span`
    color: ${color.primary700};
  font-size: 16px;
  ${font.normal};
  font-weight: 300;
  margin: auto;
`;

export const FeedCardBioParagraph = styled.p`
	font-size: 16px;
	${font.normal};
	
  	border-width: 2px 0 2px 0;
  	border-style: solid;
  	border-color: ${color.primary}30;
  	padding: ${units.pm} 0;
	margin: ${units.ml} ${units.pm} 0 ${units.pm};
  
	color: ${color.text};
`;
