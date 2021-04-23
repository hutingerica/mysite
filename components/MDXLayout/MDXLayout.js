import styled from 'styled-components'
import Link from 'next/link'

export default function MDXLayout({children, frontMatter}){
  return (
    <BlogLayout>
      <BriefContainer>
        <ProjectTitle>{frontMatter.title}</ProjectTitle>
        <Tags>
          <Read>{frontMatter.readingTime.text}</Read>
        </Tags>
        <SummaryWrapper>
        <SummaryTag>Project Summary</SummaryTag>
        <Summary>{frontMatter.description}</Summary>
        </SummaryWrapper>
      </BriefContainer>
      <ContentLayout>{children}</ContentLayout>
    </BlogLayout>
  )
}
const Read = styled.div`
  min-width: max-content;
`
 const Tags = styled.div`
  color: hsl(0deg 0% 80% / 100%);
  display: flex;
  justify-content: flex-start;
 `
 const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
 `
 const SummaryTag = styled.h6`
  background-color: hsl(145deg 64% 50% / 50%);
  border-radius: 6px;
  padding: .25rem .5rem .5rem;
  max-width: max-content;
  margin: 0.5rem;
  margin-bottom:-.5rem;
  margin-right: 2rem;
  font-variation-settings: 'wght' 700;

 `
 const Summary = styled.section`
  width: 100%;
  border: 1px dashed hsl(145deg 64% 70% / 50%);
  padding: 1rem;
  margin: 1rem;
  align-self: center;
  margin-top:0;
  border-radius: 6px;
 `
 const BriefContainer = styled.div`
  margin-bottom: 2rem;
 `
 const BlogLayout = styled.div`
 `
 const ProjectTitle = styled.h1`
 `

 const ContentLayout = styled.div`
 `