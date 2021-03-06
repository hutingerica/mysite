import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'

import StyledTippy from '../StyledTippy'

export default function Layout({ children, home}) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  const router = useRouter();
  const meta = {
    siteTitle: "Erica Huang",
    description: "A digital product designer enjoys digging into core problems, figuring out design strategy, creating clean interfaces, and bringing delightful solutions to people through technology.",
    image: "/meta-image.png",
    favIcon:"/favicon.ico",
    type:"website"
  };

  return (
    <LayoutWrapper>
      <Head>
        <link rel="icon" href= {meta.favIcon}/>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description}/>
        <link rel="canonical" href={`https://ericahuangdesign.com${router.asPath}`} />
        <meta property="og:url" content={`https://ericahuangdesign.com${router.asPath}`} />
        <meta name="og:title" content={`${meta.siteTitle}` + "- Designer, creator and introvert"}/>
        <meta property="og:image" content={meta.image}/>
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteTitle} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.siteTitle} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <>
        {home ? (
          <HomeWrapper>
              <HomeHeader>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 267"
                    fill="currentColor"
                    stroke="currentColor"
                >
                  <g transform="translate(0.000000,267.000000) scale(0.050000,-0.050000)" fill="currentColor" stroke="currentColor">
                    <path d="M2535 5252 c-70 -37 -199 -97 -286 -133 -198 -82 -297 -148 -404
    -272 -145 -166 -171 -189 -204 -176 -226 89 -591 28 -735 -125 -36 -37 -121
    -95 -190 -129 -81 -41 -185 -120 -291 -223 -178 -174 -205 -234 -105 -234 72
    0 73 -5 12 -108 -26 -45 -62 -130 -79 -189 -18 -58 -50 -136 -73 -173 -108
    -175 -203 -661 -167 -856 45 -244 168 -585 250 -691 l37 -48 17 47 c16 43 22
    39 114 -83 54 -71 151 -178 216 -239 66 -60 188 -175 272 -255 153 -144 196
    -173 174 -115 -34 88 335 -133 426 -255 66 -88 72 -91 106 -60 34 31 43 25
    162 -100 509 -534 1621 -921 2229 -775 767 184 1250 787 1220 1522 -10 220 -7
    243 27 264 42 27 50 94 11 94 -14 0 -36 -10 -49 -23 -17 -17 -29 -9 -47 35
    -59 145 -123 267 -196 378 l-80 120 79 6 c123 10 102 58 -32 75 -118 15 -126
    20 -241 160 -91 112 -82 122 87 92 251 -45 446 -187 723 -523 191 -231 283
    -288 364 -222 90 73 71 586 -32 827 -13 32 -8 33 41 15 118 -45 141 34 67 230
    -84 226 -301 488 -718 870 -47 42 -57 59 -30 50 394 -133 408 18 26 273 -277
    186 -387 239 -622 299 -123 31 -300 80 -394 108 -93 29 -222 57 -286 64 -223
    23 -142 62 176 85 l180 14 -80 36 c-44 20 -171 59 -283 88 -192 49 -203 55
    -200 102 4 64 -271 146 -427 129 -241 -27 -383 -57 -517 -110 -192 -76 -194
    -76 -113 51 113 176 79 196 -135 83z m536 -2233 c230 -199 733 -296 1249 -240
    l210 23 104 -116 c123 -136 123 -152 1 -169 -117 -17 -335 -114 -335 -150 0
    -38 22 -34 154 24 173 77 350 89 394 27 l33 -48 -176 -12 c-173 -11 -265 -43
    -265 -93 0 -30 64 -33 92 -5 30 30 193 47 314 31 109 -13 110 -14 172 -131
    135 -253 140 -320 22 -320 -43 0 -84 -10 -91 -22 -23 -37 36 -59 124 -46 l84
    12 14 -94 c137 -914 -756 -1740 -1711 -1583 -657 109 -1266 395 -1615 759
    -148 154 -148 158 -44 227 77 51 104 128 38 109 -254 -74 -464 79 -430 310 29
    188 198 304 410 280 214 -25 232 19 69 165 -280 249 -419 552 -306 665 42 42
    80 43 218 8 44 -11 57 -2 97 69 188 334 925 535 1174 320z"/>
                    <path d="M3095 2499 c-90 -22 -227 -90 -246 -120 -33 -53 28 -60 100 -11 98
    66 179 80 394 66 175 -11 217 3 136 47 -57 30 -293 42 -384 18z"/>
                    <path d="M3170 2281 c-94 -23 -190 -79 -190 -112 0 -38 16 -37 116 11 46 23
    138 44 205 48 129 8 151 17 130 51 -15 23 -168 25 -261 2z"/>
                    <path d="M4590 2194 c-130 -74 -117 -175 27 -213 198 -53 381 101 263 219 -55
    55 -187 52 -290 -6z m260 -74 c0 -37 -12 -52 -45 -56 -55 -8 -80 43 -44 87 37
    45 89 27 89 -31z"/>
                    <path d="M3243 2177 c-260 -46 -324 -233 -102 -300 233 -70 465 120 314 257
    -58 52 -105 62 -212 43z m185 -110 c14 -36 -20 -87 -58 -87 -47 0 -78 56 -50
    90 33 40 93 38 108 -3z"/>
                    <path d="M2440 1792 c0 -54 521 -247 600 -222 59 19 112 106 84 134 -17 17
                    -34 9 -65 -31 -51 -64 -63 -62 -372 59 -251 99 -247 98 -247 60z"/>
                    <path d="M3940 1776 c0 -17 36 -44 80 -61 106 -42 110 -104 10 -146 -85 -36
                    -91 -69 -12 -69 134 0 193 138 100 232 -59 58 -178 88 -178 44z"/>
                    <path d="M1713 1563 c-48 -53 -41 -117 18 -156 74 -48 114 -5 47 53 l-48 41
                    45 32 c25 18 45 40 45 49 0 32 -73 19 -107 -19z"/>
                    <path d="M4380 1045 c-91 -123 -164 -136 -266 -46 -112 99 -156 74 -63 -36
  117 -140 281 -119 388 49 54 85 62 128 25 128 -8 0 -46 -43 -84 -95z"/>
                  </g>
                </svg>
                <div>
                  <Link href='/cv'><a>CV</a></Link>
                  <ThemeButton
                  aria-label="Toggle Dark Mode"
                  type="button"
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                >
                  {mounted && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      {resolvedTheme === 'dark' ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      )}
                    </svg>
                  )}
                </ThemeButton>
                </div>
              </HomeHeader>
              <TextWrapper>
                <Title>Hey! I'm {meta.siteTitle}</Title>
                <Intro>
                  <p>
                  I am a digital product designer. I mostly make websites. Currently, I am building a <StyledTippy content="See more ???? " placement="top"><a href="/project/06-pdis-design-system">design system</a></StyledTippy> for Taiwanese government to bring an accessible, mobile-friendly website-production process. My everyday treat is to turn design practices into codes after learning Josh???s <a target="_blank" href="https://courses.joshwcomeau.com">CSS for JavaScript Developers</a> course. On the side, I helped develop an e-commerce website for my friend???s co-op cafe since COVID pandemic hit.
                  </p>
                  <p>
                  When I'm not digging into Figma or Visual Studio Code, you???ll find me exploring a bookstore or local farmer's market, cycling, walking, or foraging. As of late, I teamed up with my partner and created <StyledTippy content="coming soon ????" placement="top"><a href="/">1522 Collective</a></StyledTippy> to practice people-planet approaches through some experimental projects around <StyledTippy content="See project &Beyond Flavour ????" placement="top"><a href="/project/04-and-beyond-flavour">food</a></StyledTippy>, democracy, works and education.
                  </p>
                </Intro>
                <Links>
                  <a target="_blank" href="https://www.linkedin.com/in/ericahuangdesign/">LinkedIn</a>
                  <a href="mailto:hutingstudio@gmail.com">Email</a>
                  <a target="_blank" href= "https://github.com/hutingerica">github</a>
                  {/* <a target="_blank" href="https://unsplash.com/@ericaypp">Unsplash</a> */}
                </Links>
              </TextWrapper>
          </HomeWrapper>
        ) : (
          <PageHeader>
            <Link href="/">
              <HeaderWrapper>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 267"
                      fill="currentColor"
                      stroke="currentColor"
                  >
                    <g transform="translate(0.000000,267.000000) scale(0.050000,-0.050000)" fill="currentColor" stroke="currentColor">
                      <path d="M2535 5252 c-70 -37 -199 -97 -286 -133 -198 -82 -297 -148 -404
      -272 -145 -166 -171 -189 -204 -176 -226 89 -591 28 -735 -125 -36 -37 -121
      -95 -190 -129 -81 -41 -185 -120 -291 -223 -178 -174 -205 -234 -105 -234 72
      0 73 -5 12 -108 -26 -45 -62 -130 -79 -189 -18 -58 -50 -136 -73 -173 -108
      -175 -203 -661 -167 -856 45 -244 168 -585 250 -691 l37 -48 17 47 c16 43 22
      39 114 -83 54 -71 151 -178 216 -239 66 -60 188 -175 272 -255 153 -144 196
      -173 174 -115 -34 88 335 -133 426 -255 66 -88 72 -91 106 -60 34 31 43 25
      162 -100 509 -534 1621 -921 2229 -775 767 184 1250 787 1220 1522 -10 220 -7
      243 27 264 42 27 50 94 11 94 -14 0 -36 -10 -49 -23 -17 -17 -29 -9 -47 35
      -59 145 -123 267 -196 378 l-80 120 79 6 c123 10 102 58 -32 75 -118 15 -126
      20 -241 160 -91 112 -82 122 87 92 251 -45 446 -187 723 -523 191 -231 283
      -288 364 -222 90 73 71 586 -32 827 -13 32 -8 33 41 15 118 -45 141 34 67 230
      -84 226 -301 488 -718 870 -47 42 -57 59 -30 50 394 -133 408 18 26 273 -277
      186 -387 239 -622 299 -123 31 -300 80 -394 108 -93 29 -222 57 -286 64 -223
      23 -142 62 176 85 l180 14 -80 36 c-44 20 -171 59 -283 88 -192 49 -203 55
      -200 102 4 64 -271 146 -427 129 -241 -27 -383 -57 -517 -110 -192 -76 -194
      -76 -113 51 113 176 79 196 -135 83z m536 -2233 c230 -199 733 -296 1249 -240
      l210 23 104 -116 c123 -136 123 -152 1 -169 -117 -17 -335 -114 -335 -150 0
      -38 22 -34 154 24 173 77 350 89 394 27 l33 -48 -176 -12 c-173 -11 -265 -43
      -265 -93 0 -30 64 -33 92 -5 30 30 193 47 314 31 109 -13 110 -14 172 -131
      135 -253 140 -320 22 -320 -43 0 -84 -10 -91 -22 -23 -37 36 -59 124 -46 l84
      12 14 -94 c137 -914 -756 -1740 -1711 -1583 -657 109 -1266 395 -1615 759
      -148 154 -148 158 -44 227 77 51 104 128 38 109 -254 -74 -464 79 -430 310 29
      188 198 304 410 280 214 -25 232 19 69 165 -280 249 -419 552 -306 665 42 42
      80 43 218 8 44 -11 57 -2 97 69 188 334 925 535 1174 320z"/>
                      <path d="M3095 2499 c-90 -22 -227 -90 -246 -120 -33 -53 28 -60 100 -11 98
      66 179 80 394 66 175 -11 217 3 136 47 -57 30 -293 42 -384 18z"/>
                      <path d="M3170 2281 c-94 -23 -190 -79 -190 -112 0 -38 16 -37 116 11 46 23
      138 44 205 48 129 8 151 17 130 51 -15 23 -168 25 -261 2z"/>
                      <path d="M4590 2194 c-130 -74 -117 -175 27 -213 198 -53 381 101 263 219 -55
      55 -187 52 -290 -6z m260 -74 c0 -37 -12 -52 -45 -56 -55 -8 -80 43 -44 87 37
      45 89 27 89 -31z"/>
                      <path d="M3243 2177 c-260 -46 -324 -233 -102 -300 233 -70 465 120 314 257
      -58 52 -105 62 -212 43z m185 -110 c14 -36 -20 -87 -58 -87 -47 0 -78 56 -50
      90 33 40 93 38 108 -3z"/>
                      <path d="M2440 1792 c0 -54 521 -247 600 -222 59 19 112 106 84 134 -17 17
                      -34 9 -65 -31 -51 -64 -63 -62 -372 59 -251 99 -247 98 -247 60z"/>
                      <path d="M3940 1776 c0 -17 36 -44 80 -61 106 -42 110 -104 10 -146 -85 -36
                      -91 -69 -12 -69 134 0 193 138 100 232 -59 58 -178 88 -178 44z"/>
                      <path d="M1713 1563 c-48 -53 -41 -117 18 -156 74 -48 114 -5 47 53 l-48 41
                      45 32 c25 18 45 40 45 49 0 32 -73 19 -107 -19z"/>
                      <path d="M4380 1045 c-91 -123 -164 -136 -266 -46 -112 99 -156 74 -63 -36
    117 -140 281 -119 388 49 54 85 62 128 25 128 -8 0 -46 -43 -84 -95z"/>
                    </g>
                  </svg>
                <h5>{meta.siteTitle}</h5>
              </HeaderWrapper>
            </Link>
            <div>
                  <Link href='/cv'><a>CV</a></Link>
                  <ThemeButton
                  aria-label="Toggle Dark Mode"
                  type="button"
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                >
                  {mounted && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      {resolvedTheme === 'dark' ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      )}
                    </svg>
                  )}
                </ThemeButton>
                </div>
            </PageHeader>
        )}
      </>
      <main>{children}</main>
      {!home && (
        <BackhomeWrapper>
          <Link href="/">
            <LinkWrapper>??? Back to home</LinkWrapper>
          </Link>
        </BackhomeWrapper>
      )}
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  max-width: 64rem;
  padding: 0 1rem;
  margin: 0 auto 6rem;
`
const HomeWrapper = styled.div`
  padding-bottom: 6rem;
  margin-bottom: 1rem;
  svg {
      width: 6rem;
    }
  @media(max-width:425px){
    padding-bottom:1rem;
  }

`
const HomeHeader = styled.header`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width:768px){
    margin-top: 1rem;
  }
`
const TextWrapper = styled.div`
  display: inline-block;
  a{
      font-variation-settings: 'wght' 800;
      &:hover{
        color: hsl(145deg 64% 70% / 100%);
      }
    }
`
const Links = styled.div`
    a{
      margin-right: 0.69rem;
    }
`
const Title = styled.h1`
  margin: 1.38rem 0;
  letter-spacing: 0.05rem;
  @media(max-width:543px){
    margin: 1rem 0;
  }
  @media(max-width:425px){
    margin: .8rem 0;
  }

` 
const Intro = styled.div`
  p{
  margin: 0;
  margin-bottom: 1rem;
  letter-spacing: 0.02rem;
  white-space: pre-line;
  @media(max-width:425px){
    margin-bottom:.5rem;
  }
  }

`
// non-homepage
const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //sticky header
  padding: 3rem 1rem 1rem 1rem;
  margin: 0 -1rem;
  position: sticky;
  top: 0;
  backdrop-filter: saturate(30%) blur(5px);
  z-index:2;

  svg {
      width: 2.5rem;
  }
  h5{
    flex:1;
    margin:0;
    margin-left:0.5rem;
    margin-bottom: 0;
    font-variation-settings: 'wght' 500;
    cursor: pointer;
  }
  @media (max-width:768px){
    padding-top: 1rem;
  }
`
const HeaderWrapper = styled.a`
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 0.5px dashed transparent;
    color: inherit;
    opacity: .5;
  }
`
const LinkWrapper = styled.a`
  display: inline-block;
`
const BackhomeWrapper = styled.div`
  margin: 1rem 0;
`
// override svg style
const ThemeButton = styled.button`
  padding: .5rem;
  margin-left: 1rem;
  border-radius: .6rem .6rem 0;
  &:hover{
    cursor: pointer;
  }
  svg {
    width: 1.5rem;
    height: 1rem;
  }
`