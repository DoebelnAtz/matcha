import styled from 'styled-components';
import { color, cursor, font, layout, shadows, units } from '../../../Styles';

export const ProfileDiv = styled.div`
	${layout.scrollPadding};
	height: 100%;
	display: flex;
	position: relative;
	touch-action: none;
	-ms-touch-action: none;
	flex-direction: column;
	overflow-y: scroll;
`;

export const ProfileContainer = styled.div`
	overflow-y: hidden;
`;

const profilePicSize = '220px';
const frameSize = '80px';

export const ProfilePictureContainer = styled.div`
	width: 100%;
	height: calc((${profilePicSize} + ${frameSize}) / 2);
	border-bottom: 2px solid ${color.primary};
	margin-top: ${units.ml};
	display: flex;
`;

export const BlurredBackgroundDiv = styled.div`
	height: calc(${profilePicSize} + ${frameSize});
	width: calc(${profilePicSize} + ${frameSize});
	position: absolute;
	z-index: 3;
	&:after {
		background: radial-gradient(
			circle,
			${color.gray400}22 50%,
			${color.gray400}66 60%,
			${color.gray400}ff 69%
		);
		backdrop-filter: blur(1px);
		content: '';
		position: absolute;
		top: 0;
		z-index: 4;
		height: calc(${profilePicSize} + ${frameSize});
		width: calc(${profilePicSize} + ${frameSize});
	}
`;

export const ProfilePictureDiv = styled.div`
	height: calc(${profilePicSize} + ${frameSize});
	width: calc(${profilePicSize} + ${frameSize});
	border-radius: calc((${profilePicSize} + ${frameSize}) / 2);
	display: flex;
	position: relative;
	overflow: hidden;
	z-index: 14;
	backdrop-filter: blur(0px);
	margin: auto;
`;

export const ProfilePictureImage = styled.div`
	height: ${profilePicSize};
	width: ${profilePicSize};
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: calc(${profilePicSize} / 2);
	margin: auto;
	position: relative;
	z-index: 4;
	box-shadow: -4px -4px 14px 4px #55555560, 4px 4px 14px 4px #00000060;
`;

export const ProfilePageContentContainer = styled.div`
	width: 100%;
	display: flex;
	margin-top: calc((${profilePicSize} + ${frameSize}) / 2 + ${units.mm});
	flex-direction: column;
`;

export const ProfilePageNameDiv = styled.div`
	width: 100%;
	height: 34px;
	text-align: center;
`;

export const ProfilePageNameSpan = styled.span`
	${font.normal};
	font-size: 32px;
	font-weight: 700;
	color: ${color.primary700};
`;

export const ProfilePageOptionContainer = styled.div`
	display: flex;
	margin: ${units.mm} auto 50px auto;

	width: 100%;
`;

export const ProfilePageOptionButtonDiv = styled.div`
	padding: ${units.ps};
	margin: ${units.mm} auto;
	border-radius: 50%;
	background-color: ${color.gray300};
	${cursor.clickable};
	transition: all 0.1s ease-in-out;

	box-shadow: 4px 4px 10px 6px rgba(0, 0, 0, 0.2),
		-4px -4px 10px 6px rgba(255, 255, 255, 1),
		inset 2px 2px 10px 2px rgba(0, 0, 0, 0.1),
		inset -2px -2px 10px 2px rgba(255, 255, 255, 1);
	&:hover {
		box-shadow: 4px 4px 10px 6px rgba(0, 0, 0, 0.2),
			-4px -4px 10px 6px rgba(255, 255, 255, 1),
			inset 3px 3px 10px 2px rgba(0, 0, 0, 0.2),
			inset -3px -3px 10px 2px rgba(255, 255, 255, 1);
		& > div {
			transform: scale(0.98);
		}
	}
	border: 1px solid ${color.gray300};
`;

export const ProfilePageButton = styled.div`
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: 46px;
	background-repeat: no-repeat;
	width: 50px;
	height: 50px;
`;
