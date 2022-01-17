import styled from 'styled-components'

export default function MDXLayout({children, frontMatter}){
  return (
    <BlogLayout>
      <BriefContainer>
        <ProjectTitle>{frontMatter.title}</ProjectTitle>
        <Tags>
          <Read>{frontMatter.subtitle}</Read>
          <Read>{frontMatter.readingTime.text}</Read>
        </Tags>
        <SummaryWrapper>
        <SummaryTag>About {frontMatter.title}</SummaryTag>
        <Summary>{frontMatter.summary}</Summary>
        </SummaryWrapper>
      </BriefContainer>
      {/* <StyledImage src={frontMatter.inerHeroImage} width={100} height={600}/> */}
      <ContentLayout>{children}</ContentLayout>
    </BlogLayout>
  )
}
const Read = styled.div`
  min-width: fit-content;
`
 const Tags = styled.div`
  color: hsl(0deg 0% 80% / 100%);
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media(max-width:620px){
    flex-direction:column;
  }
 `
 const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
 `
 const SummaryTag = styled.h6`
  background-color: hsl(145deg 64% 50% / 50%);
  border-radius: .8rem;
  padding: .25rem .8rem 1rem;
  max-width: max-content;
  margin: .5rem 1rem;
  margin-bottom:-.8rem;
  font-variation-settings: 'wght' 700;

 `
 const Summary = styled.section`
  width: 100%;
  border: 1px dashed hsl(145deg 64% 70% / 50%);
  padding: 1rem;
  margin: 1rem;
  align-self: center;
  margin-top:0;
  border-radius: .8rem .8rem 0 .8rem;
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