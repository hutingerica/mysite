import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllFilesFrontMatter } from '../lib/mdx'

import styled from 'styled-components'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('project')

  return { props: { posts } }
}
export default function Home({posts}) {
  return (
    <Layout home>
      <Head>
        <title>Erica Huang</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main>
        <h4>Selected Projects and Experiements</h4>
        <Wrapper>
          {posts.map(({ slug, tag1, tag2 , title , description }) => (
            <ListItem key={slug}>
              <Link href={`/project/${slug}`}>
                <ItemLink>
                    <ItemWrapper>
                      <ItemTitle>{title}</ItemTitle>
                      <ItemTag>{tag1}</ItemTag>
                      <ItemTag>{tag2}</ItemTag>
                    </ItemWrapper>
                    <Description>{description}</Description>
                </ItemLink>
              </Link>
            </ListItem>
          ))}
        </Wrapper>
      </main>

      <Footer>
          Made with 
            <a target="_blank" href="https://nextjs.org">Next.js</a>
            <a target="_blank" href="https://mdxjs.com">MDX</a>
            <a target="_blank" href="https://www.styled-components.com">Styled-Component</a>
            <a target="_blank" href="https://vercel.com">Vercel</a>
      </Footer>
    </Layout>
)}

const Wrapper = styled.ul`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
const ListItem = styled.li`
  width: 100%;
  margin: 0;
`
const ItemTag = styled.small`
    letter-spacing: 0rem;
    padding: 0 .25rem;
    margin-left: 1rem;
    color: hsl(0deg 0% 60% / 100%);
    background-color: hsl(0deg 0% 70% / 10%);
    border-radius: 4px;
    font-variation-settings: 'wght' 500;
`
const ItemTitle = styled.h4`
    margin: 0;
    font-variation-settings: 'wght' 500;
`

const ItemLink = styled.a`
  color: hsl(0deg 0% 22% / 100%);
  cursor: pointer;
  margin-left: -1rem;
  padding: .5rem 1rem;
  border-radius: 8px;
  border: none;
  display: inline-block;

  &:hover {
    border: none;
    text-decoration: none;
    color: hsl(0deg 0% 22% / 60%);

    ${ItemTag} {
    background-color: hsl(145deg 64% 70% / 100%);
    color: hsl(145deg 64% 100% / 100%);
    }
    ${ItemTitle} {
      color: hsl(145deg 64% 70% / 100%);
    }
  }
`
const Description = styled.p`
  font-variation-settings: 'wght' 400;

`
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .5rem;
`
const Footer = styled.footer`
  text-align: center;
  letter-spacing: 0rem;
  color: hsl(0deg 0% 0% / 100%);

  a {
    margin-left: .5rem;
    font-variation-settings: 'wght' 400;
  }
`