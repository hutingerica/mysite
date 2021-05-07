import {createGlobalStyle} from 'styled-components'

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
ul {
	list-style: none;
}
ol {
  margin-left:1rem;
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

//Themeing variables
:root {
  --bg: hsl(0deg 0% 98% / 100%);
  --fg: hsl(0deg 0% 22% / 100%);
  --ag: hsl(0deg 0% 22% / 100%);
  --sbg: hsl(145deg 64% 96% / 100%);
  --sbg-hover: hsl(145deg 64% 96% / 30%);
  --hbg: hsl(0deg 0% 98% / 95%);
}
  [data-theme="dark"] {
    --fg: hsl(0deg 15% 90% / 100%);
    --bg: hsl(0deg 0% 22% / 100%);
    --ag: hsl(0deg 15% 90% / 90%);
    --sbg: hsl(145deg 64% 5% / 100%);
    --sbg-hover: hsl(145deg 64% 5% / 30%);
    --hbg: hsl(0deg 0% 22% / 95%);
  }

body {
  font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: subpixel-antialiased;
  font-feature-settings: 'case' 1, 'cpsp' 1, 'dlig' 1, 'cv01' 1, 'cv02',
    'cv03' 1, 'cv04' 1;
  font-variation-settings: 'wght' 500;
  font-variant: common-ligatures contextual;
  line-height: 1.75;
  color: var(--fg);
  background-color: var(--bg);
}

::selection{
    color: var(--bg);
    background: var(--fg);
}
header {
  background-color: var(--hbg);
}
footer {
  color: var(--fg);
}

section {
  color: var(--fg);
  background-color: var(--sbg);
}

button {
  color: var(--fg);
  background-color: var(--bg);
  border:none;
  transition: ease-in-out color 100ms, ease-in-out background-color 100ms;

  &:hover{
    color: var(--bg);
    background-color: var(--fg);
  }
}

p {
  margin-bottom: 1rem;
  letter-spacing: 0.02rem;
  white-space: pre-line;
  @media(max-width:543px){
    margin-bottom: .5rem;
  }
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
  color: var(--ag);
  font-variation-settings: 'wght' 800;
  text-decoration: none;
  letter-spacing:0.02rem;
  cursor: pointer;
  border-bottom: 0.5px dashed transparent;
  transition: ease-in color 100ms, ease-in border-bottom 200ms;
}
a:hover {
  border-bottom: 1px dashed hsl(145deg 64% 70% / 100%);
  color: hsl(145deg 64% 70% / 100%);
}
strong {
  font-variation-settings: 'wght' 750;
}
blockquote {
  padding-left:1rem;
  margin-left:.25rem;
  margin-bottom:4rem;
  color: var(--fg);
  border-left: .25rem solid var(--fg);
  ul {
    list-style: circle;
    margin-left:1rem;
  }
  ol {
    list-style: lower-alpha;
    margin-left:1rem;
  }
}
blockquote>:first-child {
  margin-top: 0;
}
blockquote>:last-child {
  margin-bottom: 0;
}
code {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  color: var(--bg);
  background-color: var(--fg);
  border-radius: 3px;
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

@media (max-width: 543px){

  h1, h2, h3, h4, h5 {
  margin: 2.4rem 0 1rem;
  font-variation-settings: 'wght' 800;
  letter-spacing: -0.04rem;
  line-height: 1.3;
}
  h1{
    font-size: 2.441rem;
  }
  h2 {
    font-size: 1.953rem;
}
  h3 {
    font-size: 1.563rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1.15rem;
  }
  small {
    font-size: 1rem;
  }
}

@media (max-width: 425px){

  h1, h2, h3, h4, h5 {
  margin: 1.9rem 0 .8rem;
  font-variation-settings: 'wght' 800;
  letter-spacing: -0.04rem;
  line-height: 1.3;
}
  h1{
    font-size: 1.953rem;
  }
  h2 {
    font-size: 1.563rem;
}
  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1.15rem;
  }

  h5 {
    font-size: 1rem;
  }
  small {
    font-size: 1rem;
  }
}
`
export default GlobalStyles