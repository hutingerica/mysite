import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function FirstProject (){
  return (
  <Layout>
    <Head>
        <title>First Project</title>
    </Head>
    <h2>First Project</h2>
    <p>First ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst ProjectFirst Project</p>
    <Link href="/">
      <a>Back to home</a>
    </Link>
  </Layout>
  )
}