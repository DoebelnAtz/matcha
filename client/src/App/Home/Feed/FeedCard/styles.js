import styled, { css } from 'styled-components';
import { color, font, units } from '../../../../Styles';
import { animated } from 'react-spring';

export const FeedCardDiv = styled(animated.div)`
	-webkit-transform: translate3d(0, 0, 0);
	-webkit-transform-style: preserve-3d;
	height: calc(100% - ${units.mm} - 50px);
	margin: ${units.mm} ${units.ml} ${units.mxl} ${units.mm};
	position: absolute;
	top: 0;
	display: flex;
	flex-direction: column;
	user-select: none;
	overflow: visible;
	transition: width 0.4s ease-in-out, margin 0.4s ease-in-out,
		height 0.4s ease-in-out;
	touch-action: none;
	will-change: transform;
	z-index: ${(props) => 50 - (props.index - props.page)};
	${({ expanded }) =>
		expanded
			? css`
					width: 100%;
					margin: 0;
					height: calc(100%);
			  `
			: css`
					width: calc(100% - ${units.mm} * 2);
			  `}
`;

export const ProfilePictureDiv = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	border-radius: calc(${units.rl} - ${units.mm});
`;

const cardHeight = ({ expanded }) => (expanded ? '200px' : '70px');

export const FeedCardContentDiv = styled(animated.div)`
	display: flex;
	margin: auto auto ${units.ms} auto;
	transition: all 0.5s ease-in-out;
	flex-shrink: 0;
	width: calc(100% - ${units.pm} * 2 - ${units.ms} * 2);
	padding: ${units.pm};
	border-radius: ${units.rs};
	flex-direction: column;
	position: relative;
	overflow: hidden;
	z-index: 53;
	border: 1px solid rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(8px) saturate(80%) contrast(130%);
	${({ expanded }) =>
		expanded
			? css`
					background-color: rgba(255, 255, 255, 0.85);
					border-radius: ${units.rs} ${units.rs}
						calc(${units.rl} - ${units.ms})
						calc(${units.rl} - ${units.ms});
			  `
			: css`
					background-color: rgba(255, 255, 255, 0.6);
			  `}
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
