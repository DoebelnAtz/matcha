import styled from 'styled-components';
import { color, units } from '../../../Styles';

export const BottomNavDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

export const BottomNavIconContainer = styled.div`
	width: 100%;
	display: flex;
	padding: ${units.pm} ${units.pm}
		calc(env(safe-area-inset-bottom) + ${units.pm}) ${units.pm};
`;

export const BottomNavIcon = styled.div`
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 50px;
	width: 50px;
	margin: auto;
`;
