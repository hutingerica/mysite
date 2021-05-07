import Image from 'next/image'
import styled from 'styled-components'

export default function HighlightwithPic({picSrc, children, picFlex, textFlex, bg, gap}){

  return(
    <FlexWrapper>
      <PicWrapper style={{'--flex': picFlex +'%', '--bg': bg }}>
        <Image
          alt={picSrc}
          src={`/photos/${picSrc}`}
          layout="intrinsic"
          layout="fill"
          objectFit="cover"
        />
      </PicWrapper>
      <Gap style={{ '--gap': gap +'rem' }}/>
      <TextWrapper style={{'--flex': textFlex}}>
        <ContentSection><h4>{children}</h4></ContentSection>
      </TextWrapper>
    </FlexWrapper>
  )
}

const FlexWrapper = styled.div`
  display: flex;
  padding: 1rem 0 2rem;
  width: 100%;
  @media(max-width:425px){
    display:block;
  }
`
const PicWrapper = styled.div`
  position: relative;
  background-color: var(--bg);
  flex:var(--flex);
  height: 20rem;
  @media(max-width:768px){
    height:15rem;
  }
`
const Gap = styled.div`
  width: var(--gap);
  @media(max-width:425px){
    height:1rem;
  }
`
const TextWrapper = styled.div`
  margin: 0 .5rem;
  flex:var(--flex);
  @media(max-width:425px){
    margin:0;
  }
`
const ContentSection = styled.section`
  border: 1px dashed hsl(145deg 64% 70% / 50%);
  padding: 2rem;
  margin: 0 auto;
  h4{
    margin:0;
  }
  @media(max-width:425px){
    padding:1.5rem;
    margin:0;
  }
`