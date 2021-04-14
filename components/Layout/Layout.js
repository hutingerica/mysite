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

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Head>
        <link rel="icon" href= {meta.favIcon}/>
        <meta name="description" content={meta.description}/>
        <meta property="og:image" content={meta.image}/>
        <meta name="og:title" content={meta.siteTitle}/>
      </Head>

      {children}
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`