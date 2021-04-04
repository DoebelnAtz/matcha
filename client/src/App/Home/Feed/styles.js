import styled from 'styled-components';
import { color, layout } from '../../../Styles';

export const FeedDiv = styled.div`
	height: 100%;
	width: 100%;
	max-width: 375px;
	max-height: 812px;
	margin: auto;
	overflow: hidden;
	position: relative;
`;

export const FeedBlurredContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(30px) saturate(100%) contrast(45%) brightness(130%);
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	z-index: 25;
`;
