import styled from 'styled-components';
import { color, layout, units } from '../../Styles';

export const HomeDiv = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: auto;
	height: 100%;
	background-color: beige;
	display: flex;
	overflow: hidden;
	box-shadow: inset 0px 0px 10px 2px darkgoldenrod;
`;

export const HomeContainerDiv = styled.div`
	height: 100%;
	width: 100%;
	max-width: 375px;
	max-height: 812px;
	margin: auto;
	overflow: hidden;
	background-color: ${color.gray200};
	display: flex;
	position: relative;
`;
export const ViewContainerDiv = styled.div`
	width: 100%;
	height: calc(100% - 80px - 100px);
	margin: auto;
	background-color: red;
`;

export const HomeTopNav = styled.div`
	height: 80px;
	width: calc(100% - ${units.mm} * 2);
	margin: 0 ${units.mm};
	background-color: ${color.gray200};
	position: absolute;
	backdrop-filter: blur(10px) contrast(80%) saturate(130%);
	top: 0;
	z-index: 26;
`;

export const HomeBottomNav = styled.div`
	height: 100px;
	width: 100%;
	background-color: ${color.gray200};
	position: absolute;
	backdrop-filter: blur(10px) contrast(80%) saturate(130%);
	bottom: 0;
	z-index: 51;
`;
