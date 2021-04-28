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
        <title>Erica Huang - Designer, creator and introvert</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
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

      <Footer>
          <p>© 2020-present Erica Huang. All Rights Reserved.</p>
          <p>Made with
            <a target="_blank" href="https://nextjs.org">Next.js</a>
            <a target="_blank" href="https://mdxjs.com">MDX</a>
            <a target="_blank" href="https://www.styled-components.com">Styled-Component</a>
            <a target="_blank" href="https://vercel.com">Vercel</a>
          </p>
      </Footer>
    </Layout>
)}

const Wrapper = styled.ul`
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
    color: hsl(0deg 0% 50% / 100%);
    background-color: hsl(0deg 0% 80% / 20%);
    border-radius: 4px;
    font-variation-settings: 'wght' 500;
`
const ItemTitle = styled.h4`
    margin: 0;
    font-variation-settings: 'wght' 600;
`

const ItemLink = styled.a`
  cursor: pointer;
  margin-left: -1rem;
  padding: .5rem 1rem;
  border-radius: 8px;
  border: none;
  display: inline-block;

  &:hover {
    border: none;
    text-decoration: none;

    ${ItemTag} {
    background-color: hsl(145deg 64% 70% / 100%);
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
  margin-top: 4rem;
  font-size: .8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0rem;

  p{
    margin:0;
  }

  a {
    margin-left: .5rem;
    font-variation-settings: 'wght' 400;
  }
`