import styled from 'styled-components'
import Image from 'next/image'

export default function InsightThoughts({number, insight, children, width, picSrc}){
  return(
    <Wrapper style={{'--width': width + '%'}}>
      <ContentSection>
      <Circle/>
        <h2>{number}</h2>
        <h4>{insight}</h4>
        <h5>✍🏼 Observation</h5>
        <p>{children}</p>
        <PicWrapper>
          <Image
            alt={picSrc}
            src={`/photos/${picSrc}`}
            layout="intrinsic"
            layout="fill"
            objectFit="cover"
          />
        </PicWrapper>
      </ContentSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: var(--width);
  @media(max-width:425px){
    display:block;
    width:100%;
  }
`
const PicWrapper = styled.div`
  position: relative;
  height: 20rem;
  @media(max-width:768px){
    height:15rem;
  }
`
const ContentSection = styled.section`
  border: 2px solid hsl(145deg 64% 70% / 50%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  margin:1rem;
  h2,h4{
    margin:0;
  }
  p{
  margin-bottom:0;
  }
  h5{
    margin:1.8rem 0 .6rem;
  }

  @media(max-width:425px){
    padding:1.5rem;
    margin:0;
    margin-bottom:1rem;
  }
`
const Circle = styled.div`
  width:6rem;
  height:2rem;
  border-radius: 50px;
  background-color: hsl(145deg 64% 70% / 50%);
  position:absolute;
  top:-1rem;
  right:-2rem;
`

