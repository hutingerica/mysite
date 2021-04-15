import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

import styled from 'styled-components'

export default function Home() {
  return (
    <Layout home>
    <Wrapper>
      <Head>
        <title>Erica Huang</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read {''}
          <Link href="posts/first-project" >
            <a>this project</a>
          </Link>
        </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </Wrapper>
    </Layout>
)}

const Wrapper = styled.div`
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
`