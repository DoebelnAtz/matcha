import styled, { css } from 'styled-components';
import Color from 'color';

const baseColor = '#ffffff';

export const colorAdjust = {
	darken: (color, amount) => Color(color).darken(amount).hex(),
	lighten: (color, amount) => Color(color).lighten(amount).hex(),
	rgba: (color, opacity) => Color(color).alpha(opacity).string(),
};

const palette2 = {
	primary100: `#FDEDED`,
	primary200: `#f3A5A7`,
	primary300: `#EC6F73`,
	primary400: `#E3262D`,
	primary500: `#B5171D`,
	primary700: `#6C0E11`,
	primary900: `#240506`,
	gray100: `#FCFCFC`,
	gray200: `#f0f0f0`,
	gray300: `#e6e6e6`,
	gray400: `#dcdcdc`,
	gray500: `#bebebe`,
	gray700: `#686868`,
	gray900: `#464646`,
	danger100: `#FDECEC`,
	danger200: `#F9B4B5`,
	danger300: `#F68E90`,
	danger400: `#F15558`,
	danger500: `#EE2E31`,
	danger700: `#840B0D`,
	danger900: `#130202`,
};

const palette = {
	primary: `#B5171D`,
	secondary: '#17B5AF',
	gray: `#bebebe`,
	success: '#6BAB90',
	danger100: `#FDECEC`,
	danger200: `#F9B4B5`,
	danger300: `#F68E90`,
	danger400: `#F15558`,
	danger500: `#EE2E31`,
	danger700: `#840B0D`,
	danger900: `#130202`,
};

const paletteShades = {
	primary100: colorAdjust.lighten(palette.primary, 1.4),
	primary200: colorAdjust.lighten(palette.primary, 1.2),
	primary300: colorAdjust.lighten(palette.primary, 0.8),
	primary400: colorAdjust.lighten(palette.primary, 0.4),
	primary500: palette.primary,
	primary700: colorAdjust.darken(palette.primary, 0.4),
	primary900: colorAdjust.darken(palette.primary, 0.8),
	secondary100: colorAdjust.lighten(palette.secondary, 1.4),
	secondary200: colorAdjust.lighten(palette.secondary, 1.0),
	secondary300: colorAdjust.lighten(palette.secondary, 0.6),
	secondary400: colorAdjust.lighten(palette.secondary, 0.4),
	secondary500: palette.secondary,
	secondary700: colorAdjust.darken(palette.secondary, 0.4),
	secondary900: colorAdjust.darken(palette.secondary, 0.8),
	gray100: colorAdjust.lighten(palette.gray, 0.3),
	gray200: colorAdjust.lighten(palette.gray, 0.24),
	gray300: colorAdjust.lighten(palette.gray, 0.15),
	gray400: colorAdjust.lighten(palette.gray, 0.1),
	gray500: palette.gray,
	gray600: colorAdjust.darken(palette.gray, 0.1),
	gray700: colorAdjust.darken(palette.gray, 0.4),
	gray900: colorAdjust.darken(palette.gray, 0.8),
	success100: colorAdjust.lighten(palette.success, 0.5),
	success200: colorAdjust.lighten(palette.success, 0.4),
	success300: colorAdjust.lighten(palette.success, 0.3),
	success400: colorAdjust.lighten(palette.success, 0.2),
	success500: palette.success,
	success700: colorAdjust.darken(palette.success, 0.4),
	success900: colorAdjust.darken(palette.success, 0.8),
	danger100: `#FDECEC`,
	danger200: `#F9B4B5`,
	danger300: `#F68E90`,
	danger400: `#F15558`,
	danger500: `#EE2E31`,
	danger700: `#840B0D`,
	danger900: `#130202`,
};

export const modeSwitch = (light, dark) => {
	return css`
		${({ state }) => (state ? light : dark)}
	`;
};

export const color = {
	...paletteShades,
	primary: paletteShades.primary500,
	primaryShade: paletteShades.primary700,
	secondary: paletteShades.secondary500,
	secondaryShade: colorAdjust.darken('#FF684F', 0.1),
	tertiary: '#FFE8D8',
	tertiaryShade: colorAdjust.darken('#FFE8D8', 0.1),
	text: paletteShades.primary900,
};

export const units = {
	ms: '12px',
	mm: '18px',
	ml: '28px',
	mxl: '34px',
	rs: '8px',
	rm: '14px',
	rl: '28px',
	ps: '10px',
	pm: '16px',
	pl: '26px',
	tablet: '1000px',
	mobile: '600px',
};

export const font = {
	normal: css`
		font-family: 'Quicksand', sans-serif;
	`,
	logo: css`
		font-family: 'Leckerli One', cursive;
	`,
	title: css`
		font-size: 36px;
		letter-spacing: 2px;
	`,
	text: css`
		font-size: 20px;
		font-family: roboto-regular, sans-serif;
		letter-spacing: 0.5px;
		color: ${color.primary};
	`,
	error: css`
		font-size: 18px;
		font-family: din-condensed-bold, sans-serif;
		color: red !important;
	`,
	link: css`
		text-decoration: none;
		&:hover {
			color: ${colorAdjust.darken(color.tertiary, 0.2)};
		}
	`,
};

export const shadows = {
	standOut: `
		-4px -4px 14px 4px #ffffff, 4px 4px 14px 4px #00000060
	`,
	concave: `
		inset -2px -2px 8px 2px #ffffff,
			inset 2px 2px 8px 2px #00000040
	`,
};

export const layout = {
	row: css`
		display: flex;
		flex-wrap: wrap;
	`,
	scrollPadding: css`
		padding: 0 0 0 ${units.pm};
		width: calc(100% - ${units.pm});
	`,
	col: css`
		flex-basis: 0;
		flex-grow: 1;
		max-width: 100%;
	`,
	centered: css`
		margin-left: auto;
		margin-right: auto;
	`,
};

export const modal = {
	inside: css`
		position: absolute;
		left: 20%;
		right: 20%;
		top: 15%;
		max-height: 80vh;
		padding: ${units.margin};
		border: 5px solid ${color.gray300};
		border-radius: 2px;
		margin: auto;
		background: ${color.gray300};
		overflow: auto;
		z-index: 10;
		${layout.col};
	`,
	outside: css`
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 11;
	`,
};

export const cursor = {
	clickable: css`
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		cursor: pointer;
	`,
	draggable: css`
		cursor: grab;
		user-select: none;
	`,
	dragging: css`
		cursor: grabbing;
	`,
	notAllowed: css`
		cursor: not-allowed;
		user-select: none;
	`,
};

export const backgroundImage = (src, size) => {
	return css`
		background-image: url(${src});
		background-size: ${size};
		background-position: center;
		background-repeat: no-repeat;
	`;
};

export const components = {
	input: css`
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		${font.normal};
		color: ${color.primary700};
		width: calc(100% - ${units.ps} * 2);
		padding: 4px ${units.ps};
		text-align: start;
		margin: ${units.mm} 0 0 0;
		border-radius: ${units.rm};
		font-size: 20px;
		border: none;
		text-overflow: ellipsis;
		overflow: hidden;
		background-color: ${color.primary100};
		white-space: nowrap;
		&:focus {
			outline: none;
		}
	`,
	labeledInput: css`
		${font.normal};
		font-size: 20px;
		color: ${color.primary};
		display: flex;
		flex-direction: column;
		margin: 10px 0;
		& input {
			font-size: 16px;
			border-radius: 0;
			${font.RCReg};
			box-shadow: none;
			background-color: ${color.tertiary};
			border: none;
			caret-color: ${color.primary};
			caret-shape: block;
			color: ${color.primary};
			padding: 2px 6px;
		}
		& input:focus {
			outline: none;
		}
	`,
	radioInput: css``,
	labeledRadioInput: css``,
	labeledTextArea: css`
		${font.normal};
		font-size: 20px;
		color: ${color.primary};
		display: flex;
		flex-direction: column;
		margin: 10px 0;
		& textarea {
			font-size: 16px;
			border-radius: 0;
			resize: vertical;
			${font.normal};
			box-shadow: none;
			background-color: ${color.tertiary};
			border: none;
			caret-color: ${color.primary};
			caret-shape: block;
			color: ${color.primary};
			padding: 2px 6px;
		}
		& textarea:focus {
			outline: none;
		}
	`,
	button: css`
		padding: 4px ${units.pl};
		letter-spacing: 1px;
		text-transform: uppercase;
		font-size: 20px;
		${font.normal};
		background-color: ${color.primary100};
		${cursor.clickable};
		border-radius: ${units.rm};
		border: none;
		transition: background-color 0.1s;
		color: ${color.primary700};
		&:focus {
			outline: none;
		}
		&:hover {
			background-color: ${color.primary200};
		}
		&:disabled {
			color: ${color.primary}90;
			border-color: ${color.primary}90;
			${cursor.notAllowed};
		}
		&:disabled:hover {
			color: ${color.primary}90;
			border-color: ${color.primary}90;
			${cursor.notAllowed};
			background-color: white;
		}
	`,
};
