import StyledTippy from '../StyledTippy'
import styled from 'styled-components'


export default function StyledTippywithText(content, children){
  return(
    <Wrapper>
      <StyledTippy content={content} placement="top" children={children}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline;
`