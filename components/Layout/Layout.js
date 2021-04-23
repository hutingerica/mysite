import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const meta = {
  siteTitle: "Erica Huang",
  description: "Erica's personal website",
  image: "/profile.svg",
  favIcon:"/favicon.ico"
}

export default function Layout({ children, home}) {
  return (
    <LayoutWrapper>
      <Head>
        <link rel="icon" href= {meta.favIcon}/>
        <meta name="description" content={meta.description}/>
        <meta property="og:image" content={meta.image}/>
        <meta name="og:title" content={meta.siteTitle}/>
      </Head>
      <>
        {home ? (
          <HomeHeader>
              <AvartaWrapper>
                <Image
                  priority
                  src="/profile.svg"
                  alt={meta.siteTitle}
                  height={55}
                  width={55}
                />
              </AvartaWrapper>
                <Title>Hey! I'm {meta.siteTitle}</Title>
                <Intro>An interaction designer loves front-end programming & 
                designs products and services that can play in strategies</Intro>
                <Link href='/'><a>Resume</a></Link>
                <Link href='/'><a>github</a></Link>
                <Link href='/'><a>LinkedIn</a></Link>
                <Link href='/'><a>Unsplash</a></Link>
          </HomeHeader>
        ) : (
          <PageHeader>
            <Image
              priority
              src="/profile.svg"
              alt={meta.siteTitle}
              height={30}
              width={30}
            />
            <Link href="/">
              <h5>{meta.siteTitle}</h5>
            </Link>
          </PageHeader>
        )}
      </>
      <main>{children}</main>
      {!home && (
        <BackhomeWrapper>
          <Link href="/">
            <LinkWrapper>← Back to home</LinkWrapper>
          </Link>
        </BackhomeWrapper>
      )}
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  max-width: 56rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`
const HomeHeader = styled.div`
  padding-bottom: 6rem;
  margin-bottom: 1rem;

  a{
    font-variation-settings: 'wght' 600;
    margin-right: .69rem;
    &:hover{
      color: hsl(145deg 64% 70% / 100%);;
    }
  }
`
const Title = styled.h1`
  margin: 1.38rem 0 1.38rem;
  letter-spacing: 0.05rem;
` 
const Intro = styled.h4`
  margin: 0;
  margin-bottom: 1.38rem;
  letter-spacing: -0.02rem;
  font-variation-settings: 'wght' 500;
`
const AvartaWrapper = styled.div`
  display: flex;
`
const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  h5{
    margin:0;
    margin-left:0.5rem;
    margin-bottom: 0;
    font-variation-settings: 'wght' 500;
    cursor: pointer;
  }
`
const LinkWrapper = styled.a`
  display: inline-block;
`
const BackhomeWrapper = styled.div`
  margin: 1rem 0;
`