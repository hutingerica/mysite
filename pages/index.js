import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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
        <h4>Selected Projects and Something Fun</h4>
        <Wrapper>
          {posts.map(({ slug, tag1, title, heroImage, subtitle }) => (
            <ListItem key={slug}>
              <Link href={`/project/${slug}`}>
                <ItemLink>
                    <ItemWrapper>
                      <ItemTitle>{title}</ItemTitle>
                      <ItemSubtitle>{subtitle}</ItemSubtitle>
                      <ImageWrapper>
                        <Image priority quality={100} src={`/photos/${heroImage}`} alt={heroImage} width={1000} height={710}/>
                      </ImageWrapper>
                      <ItemTagWrapper>
                        <ItemTag>{tag1}</ItemTag>
                      </ItemTagWrapper>
                    </ItemWrapper>
                </ItemLink>
              </Link>
            </ListItem>
          ))}
        </Wrapper>
      <Footer>
          <p>Erica Huang © 2021. All Rights Reserved.</p>
          <p>Made with ❤️ and tools : 
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
  flex-wrap: wrap;
  align-items: baseline;
  margin: 0 -1rem;

  @media(max-width: 799px){
    flex-direction:column;
    margin: 0;
  }
`
const ItemTag = styled.small`
    opacity: 0;
    letter-spacing: 0rem;
    padding: .25rem .5rem;
    margin-right: .125rem;
    color: hsl(0deg 0% 0% / 100%);
    background-color: hsl(145deg 64% 70% / 100%);
    border: 1px dashed hsl(0deg 0% 0% / 100%);
    font-variation-settings: 'wght' 500;
    transition: opacity .125s ease-in;
`
const ItemLink = styled.a`
  cursor: pointer;
  border-radius: 8px;
  border: none;
  display: block;
`
const ImageWrapper = styled.div`
  position: relative;
  width:100%;
`
const ListItem = styled.li`
  display: block;
  margin: 1rem 1rem;
  width: 46%;
  border-top: 12px solid hsl(0deg 0% 50% / 5%);
  padding-top:.5rem;
  transition: ease-in-out .25s border;

  @media(max-width: 799px){
    width:100%;
    margin:0;
    margin-bottom: 1.5rem;
  }

  &:hover {
    ${ItemTag}{
      opacity: 1;
    }
    ${ItemLink}{
      border: none;
      text-decoration: none;
    }

    border-color: hsl(145deg 64% 70% / 100%);
  }

`
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: .5rem;
  position: relative;

`
const ItemTitle = styled.h3`
    margin: 0;
    font-variation-settings: 'wght' 600;
`
const ItemSubtitle = styled.h4`
    font-variation-settings: 'wght' 400;
    margin-top: 1rem;
`
const ItemTagWrapper = styled.div`
  position: absolute;
  bottom:-.125rem;
  right:-.5rem;
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
    text-align: center;
    a {
      margin-left: .5rem;
      font-variation-settings: 'wght' 400;
    }
  }
`