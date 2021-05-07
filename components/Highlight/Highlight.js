import styled from 'styled-components'

export default function Highlight({children, width}){
  return(
    <Wrapper style={{'--width': width + '%'}}>
      <ContentSection>
        <Circle/>
        <h4>{children}</h4>
      </ContentSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-block;
  width: var(--width);
  @media(max-width:425px){
    display:block;
    width:100%;
  }
`
const ContentSection = styled.section`
  border: 1px dashed hsl(145deg 64% 70% / 50%);
  padding: 2rem;
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  margin:1rem;
  h4{
    margin:0;
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

