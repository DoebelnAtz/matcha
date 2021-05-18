import styled from 'styled-components';
import { color, units } from '../../../Styles';

export const AvatarContainer = styled.div`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	overflow: hidden;
	border-radius: ${units.rm};
`;

export const AvatarPicture = styled.div`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 50px;
	width: 50px;
`;
