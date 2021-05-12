import styled, { css } from 'styled-components';
import { color, layout, units } from '../../Styles';

export const HomeDiv = styled.div`
	width: 100%;
	margin: auto;
	height: 100%;
	display: flex;
	overflow: hidden;
`;

const topNavSize = '60px';
const bottomNavSize = '50px';

export const ViewContainerDiv = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
	margin: ${topNavSize} auto
		calc(${bottomNavSize} + env(safe-area-inset-bottom)) auto;
	background-color: ${color.gray300};
`;

export const HomeTopNav = styled.div`
	height: ${topNavSize};
	width: calc(100%);
	margin: 0;
	background-color: ${color.gray100};
	position: absolute;
	backdrop-filter: blur(10px) contrast(80%) saturate(130%);
	top: 0;
	z-index: 55;
`;
export const HomeBottomNav = styled.div`
	height: calc(${bottomNavSize} + env(safe-area-inset-bottom));
	width: calc(100%);
	background-color: transparent;
	position: absolute;
	bottom: 0;
	z-index: 55;
`;
