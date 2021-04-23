import {createGlobalStyle, creatGlobalStyles} from 'styled-components'

const GlobalStyles = createGlobalStyle`
/*CSS Reset*/
/* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 License: none (public domain)*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html{
font-size: 100%;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

@font-face {
  font-family: 'Inter var';
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url(/fonts/Inter-roman.latin.var.woff2) format('woff2');
}
@font-face {
  font-family: 'Inter var';
  font-style: italic;
  font-weight: 100 900;
  font-display: block;
  src: url(/fonts/Inter-italic.latin.var.woff2) format('woff2');
  font-named-instance: 'Italic';
}

body {
  font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: subpixel-antialiased;
  font-feature-settings: 'case' 1, 'cpsp' 1, 'dlig' 1, 'cv01' 1, 'cv02',
    'cv03' 1, 'cv04' 1;
  font-variation-settings: 'wght' 400;
  font-variant: common-ligatures contextual;
  line-height: 1.75;
  background-color: hsl(0deg 0% 99% / 100%);
  color: hsl(0deg 0% 22% / 100%);
}

p {
  margin-bottom: 1rem;
  letter-spacing: 0.02rem;
}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-variation-settings: 'wght' 800;
  letter-spacing: -0.04rem;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}
h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

small {
  font-size: 0.8rem;
}

a {
  color: hsl(0deg 0% 50% / 70%);
  text-decoration: none;
  font-variation-settings: 'wght' 800;
  letter-spacing:0.05rem;
  cursor: pointer;
  border-bottom: 0.5px dashed transparent;
}

a:hover {
  color: hsl(145deg 64% 70% / 100%);
  border-bottom: 1px dashed hsl(145deg 64% 70% / 100%);
}

img {
  max-width: 100%;
  display: block;
}

@media screen and (min-device-pixel-ratio: 1.5),
  screen and (min-resolution: 1.5dppx) {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

details summary {
  cursor: pointer;
}

`
export default GlobalStyles