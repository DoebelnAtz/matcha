import styled from 'styled-components';
import { color, font, shadows, units } from '../../../../../Styles';

export const DraggableDiv = styled.div`
	width: 100%;
	margin: ${units.mm} auto;
	height: 152px;
`;

export const PhotoManagerDroppable = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-content: center;
	will-change: contents;
	flex-shrink: 0;
	justify-content: space-between;
`;

export const ProfilePhotosContainer = styled.div`
	display: flex;
	width: 60%;

	margin: 0 auto;
	flex-direction: column;
`;
