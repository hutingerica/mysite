import styled from 'styled-components'
import ReactPlayer from 'react-player'

export default function VideoPlayer({src}){
  return(
    <PlayerWrapper>
      <Player 
        url={src} 
        width='100%'
        height='100%'
      />
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin-bottom: 2rem;
`
const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`