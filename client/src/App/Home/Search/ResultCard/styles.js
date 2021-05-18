import styled from 'styled-components';
import { color, font, units } from '../../../../Styles';

export const ResultCardContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	background-color: ${color.gray200};
	margin-bottom: ${units.mm};
`;

export const ResultCardPicture = styled.div`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	height: 50px;
	width: 50px;
	border-radius: ${units.rm};
`;

export const ResultCardNameDiv = styled.div`
	display: flex;
	margin-left: ${units.mm};
`;

export const ResultCardName = styled.span`
	${font.normal};
	font-size: 18px;
	color: ${color.text};
`;
