import Head from 'next/head'
import Image from 'next/Image'
import Link from 'next/link'
import styled from 'styled-components'

const name = "Erica Huang"
export const meta = {
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
            <Image
              priority
              src="/profile.svg"
              alt={meta.siteTitle}
              height={55}
              width={55}
            />
            <h1>{meta.siteTitle}</h1>
            <h3>An interaction designer loves front-end programming & 
              designs products and services that can play in strategies</h3>
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
            <a><h6>{meta.siteTitle}</h6></a>
            </Link>
          </PageHeader>
        )}
      </>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`
const HomeHeader = styled.div`
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: -0.05rem;
    margin: 0.5rem 0;
  }
  h3 {
    font-size: 1.5rem;
    line-height:1.2;
    margin: 0.5rem 0;
    font-variation-settings: 'wght' 450;
  }
`

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  h6{
    margin-left: 8px;
    margin-bottom: 0;
    color: hsl(222deg 22% 22% / 100%);

  }
`