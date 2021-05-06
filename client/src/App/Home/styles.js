import styled from 'styled-components';
import { color, layout, units } from '../../Styles';

export const HomeDiv = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: auto;
	height: 100%;
	display: flex;
	overflow: hidden;
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
	flex-shrink: 0;
`;

const topNavSize = '80px';
const bottomNavSize = '80px';

export const ViewContainerDiv = styled.div`
	width: 100%;
	height: calc(
		100% -  ${bottomNavSize} - env(safe-area-inset-bottom)
	);
	margin: 0 auto auto auto;
	background-color: ${color.gray400};
`;

export const HomeTopNav = styled.div`
	height: ${topNavSize};
	width: calc(100% - ${units.mm} * 2);
	margin: 0 ${units.mm};
	background-color: ${color.gray200};
	position: absolute;
	backdrop-filter: blur(10px) contrast(80%) saturate(130%);
	top: 0;
	z-index: 26;
`;

export const HomeBottomNav = styled.div`
	height: calc(${bottomNavSize} + env(safe-area-inset-bottom));
	width: calc(100%);
	background-color: ${color.gray300};
	position: absolute;
	bottom: 0;
	z-index: 51;
`;
