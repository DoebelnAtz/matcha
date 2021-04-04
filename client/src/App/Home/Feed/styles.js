import styled from 'styled-components';
import { color, units } from '../../../Styles';

export const FeedDiv = styled.div`
	height: 100%;
	width: 100%;
	max-width: 375px;
	max-height: 812px;
	margin: auto;
	overflow: hidden;
	background-color: ${color.gray100};
	flex-direction: column;
	display: flex;
	position: relative;
`;

export const FeedBlurredTop = styled.div`
	height: 80px;
	width: calc(100% - ${units.mm} * 2);
	margin: 0 ${units.mm};
	background-color: ${color.gray100};
	position: absolute;
	backdrop-filter: blur(10px) contrast(80%) saturate(130%);
	top: 0;
	z-index: 26;
`;

export const FeedBlurredBottom = styled.div`
	height: 100px;
	width: 100%;
	background-color: ${color.gray100};
	position: absolute;
	backdrop-filter: blur(10px) contrast(80%) saturate(130%);
	bottom: 0;
	z-index: 51;
`;

export const FeedBlurredTopCutout = styled.div`
	width: 100%;
	height: 20px;
	border-radius: 20px 20px 0 0;
	position: absolute;
	background-color: gray;

	top: 80px;
`;
