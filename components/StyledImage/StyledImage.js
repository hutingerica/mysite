import Image from 'next/image'
import styled from 'styled-components'

export default function StyledImage({src, width, height, bg}){

  return(
    < Wrapper style={{'--width': width + '%', '--height': height + 'px', '--bg': bg }}>
      <Image
        alt={src}
        src={`/photos/${src}`}
        layout="fill"
        objectFit="cover"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  height: var(--height);
  margin: 0 auto;
  background-color: var(--bg);

`