import styled from 'styled-components';
import { color, font, units } from '../../../../Styles';

export const ResultCardContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	background-color: ${color.gray200};
	margin-bottom: ${units.mm};
	border-radius: ${units.rm};
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

export const ResultCardContentContainer = styled.div`
	width: calc(100% - ${units.ps} * 2 - 50px);
	height: calc(100% - ${units.ps} * 2);
	display: flex;
	padding: ${units.ps};
`;

export const ResultCardNameDiv = styled.div`
	display: flex;
`;

export const ResultCardName = styled.span`
	${font.normal};
	line-height: 18px;
	font-size: 18px;
	color: ${color.text};
`;
