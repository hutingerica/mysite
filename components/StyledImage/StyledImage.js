import Image from 'next/image'
import styled from 'styled-components'

export default function StyledImage({caption1, caption2, objectFit, srcLeft, srcRight, flexLeft, flexRight, width, bg, gap}){

  return(
    <FlexWrapper style={{'--width': width + '%', '--bg': bg }}>
      <Wrapper style={{'--flex': flexLeft }}>
          <Image
            alt={srcLeft}
            src={`/photos/${srcLeft}`}
            layout="intrinsic"
            layout="fill"
            objectFit={objectFit}
          />
      </Wrapper>
      <Gap style={{ '--gap': gap +'rem' }}/>
      {flexRight ? (
      <Wrapper style={{'--flex': flexRight }}>
          <Image
            alt={srcRight}
            src={`/photos/${srcRight}`}
            layout="intrinsic"
            layout="fill"
            objectFit={objectFit}
          />
      </Wrapper>
      ): (
        <NoPic/>
      )}
    </FlexWrapper>
  )
}

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem 0 1rem;
  width: var(--width);
  @media(max-width:425px){
    display:block;
    padding: .5rem 0;

  }
`
const Wrapper = styled.div`
  position: relative;
  flex: var(--flex);
  height: 20rem;
  flex-basis:0;
  background-color: var(--bg);
  @media(max-width:768px){
    height:15rem;
  }
  @media(max-width:425px){
    display:block;
    height:12rem;
  }
`
const Gap = styled.div`
  width: var(--gap);
  height: 15rem;
  @media(max-width:425px){
    height:1rem;
  }
`
const NoPic = styled.div`
`