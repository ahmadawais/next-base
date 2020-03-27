import { css, Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import fonts from './fonts';

const GlobalCSS = () => (
	<Global
		styles={css`
${emotionNormalize}
${fonts}
*,
*:after,
*:before {
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

html {
	font-size: 62.5%;
	font-size: 10px;
	height: 100%;
	min-height: 100%;
	box-sizing: border-box;
}

body {
	font: 400 11px/1.4 sans-serif;
	background: #f7f7f7;
	color: #292929;
	margin: 0;
	height: 100%;
	min-height: 100%;
	word-break: break-word;
	-webkit-word-break: break-word;

}

.clear:before,
.clear:after {
	content: ' ';
	display: table;
}

.clear:after {
	clear: both;
}

.clear {
	*zoom: 1;
}

img {
	max-width: 100%;
	vertical-align: bottom;
	vertical-align: baseline;
	height: auto;
}
hr {
	border: 0;
	border: 0;
	height: 1px;
	background: linear-gradient(
		to right,
		rgba(227, 231, 235, 0.1) 0px,
		rgba(227, 231, 235, 0.6) 50%,
		rgba(227, 231, 235, 0.1) 100%
	);
}

p {
	font: 400 1.8rem/1.45 'Recoleta', Georgia, sans-serif;
	font-weight: 400;
	font-size: 1.8rem;
}

.screen-reader-text {
	clip: rect(1px, 1px, 1px, 1px);
	position: absolute !important;
	height: 1px;
	width: 1px;
	overflow: hidden;
	word-wrap: normal !important;
}
.screen-reader-text:focus {
	border-radius: 2px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
	clip: auto !important;
	display: block;
	font-size: 13px;
	letter-spacing: 0px;
	font-weight: 700;
	line-height: 16px;
	text-transform: uppercase;
	text-decoration: none;
	background-color: #fff;
	color: #00a2b8 !important;
	border: none;
	height: auto;
	left: 8px;
	padding: 16px 32px;
	top: 8px;
	width: auto;
	z-index: 100000;
}
pre {
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 1.6em;
	max-width: 100%;
	overflow: auto;
	padding: 24px;
	margin-top: 24px;
	margin-bottom: 24px;
}
code,
kbd,
tt,
var {
	font-family: Monaco, Consolas, 'Andale Mono', 'DejaVu Sans Mono', monospace;
	font-size: 16px;
	padding: 2px 4px;
}
::selection {
	/* background: ${props => props.theme.ct}; */
}

h1, h2, h3, h4, h5 {
	font-family: Georgia, sans-serif;
	font-weight: black;
	font-style: normal;
	margin: 0;
}

h1 {
	font-size: 5rem;
	font-weight: 900;
}

h2 {
	font-size: 3rem;
	font-weight: 900;
}

h3 {
	font-size: 2rem;
	font-weight: 300;
}
`}
	/>
);

export default GlobalCSS;
