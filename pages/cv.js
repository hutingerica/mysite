import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'

export default function Resume(){
  
  return(
    <Layout>
      <Head>
        <title>Curriculum Vitae - Erica Huang</title>
      </Head>
      <Title>Erica Huang</Title>
      <Role>Digital Product Designer</Role>
      <SectionWrapper>
        <p>
        User research and service design specialist with experience delivering end-to-end services, facilitating team workshops and championing human-centred design. Erica enjoys digging into core problems, figuring out both design and business strategy, creating prototypes, and bringing delightful solutions to people.
        </p>
      </SectionWrapper>
      <Subtitle>Work</Subtitle>
      <ul>
        <ListItem>
          <Date>Jan 2020 - Present</Date>
          <Details>
            <Subtitle>Digital Product Designer</Subtitle>
            <p>Freelance (UK)</p>
            <p>
              Mostly made websites and design systems. Built UI prototypes, user experience journey maps to ensure that end-to-end digital service delivery is constantly iterating to be more user-centred. Lately, practised a <a target="_blank" href="https://space10.com/beyond-human-centered-design/">people-planet design</a> approach through projects' topics around food, democracy, works and education.
            </p>
          </Details>
        </ListItem>
        <ListItem>
          <Date>Dec 2018 - Dec 2019</Date>
          <Details>
            <Subtitle>Service Designer</Subtitle>
            <p>King's Cross Bun (UK)</p>
            <p>
              Developed co-working toolkits with project organiser to help team members in King’s Cross Bun brainstorm and make decisions on long-term project strategies. The goal is to connect producers, customers, academics, and our planet with food, and the result of design are toolkits including stakeholders analysis, project journey maps, project blueprints and etc.
            </p>
          </Details>
        </ListItem>
        <ListItem>
          <Date>Sep 2016 - Sep 2018</Date>
          <Details>
            <Subtitle>Student Service Designer </Subtitle>
            <p>Na-Ba Primary School (Taiwan), CERN (Switzerland), PepsiCo (UK), Islington Council (UK), NASA (US)</p>
            <p>
              As a student service designer at Royal College of Art, worked in agile at scale to manage projects with clients from both industry and public sector. Built prototypes, developed experience maps, and conducted user research to ensure that the result is constantly iterating to be more user-centered whilst responding to clients' needs.
            </p>
          </Details>
        </ListItem>
        <ListItem>
          <Date>Sep 2015 - Sep 2016</Date>
          <Details>
            <Subtitle>Science Teacher / Designer</Subtitle>
            <p>Na-Ba Primary School (Taiwan) </p>
            <p>
              Delivered science lessons to pupils. Built a new learning process that merges with design thinking elements. Helped pupils practice user research, develop user journeys and built <a target="_blank" href="https://www.youtube.com/watch?v=Scf1AIf8I6Q">prototypes</a> that won the finalist in the 4th Sony Creative Science Award competing over 200 pupil teams.
            </p>
          </Details>
        </ListItem>
        <ListItem>
          <Date>Apr 2014 - Apr 2015</Date>
          <Details>
            <Subtitle>User Researcher</Subtitle>
            <p>Microprogram (Taiwan) </p>
            <p>
              Conducted user research for the accessible and inclusive design of a public bike self-rental service. The findings were used in future iterations of screen design on the bike. Facilitated internal co-creation workshops for prototyping new screen touchpoints and creating journey maps within data ecosystems.
            </p>
          </Details>
        </ListItem>
      </ul>

      <Subtitle>Education</Subtitle>
      <ul>
        <ListItem>
          <Date>Sep 2016 - Sep 2018</Date>
          <Details>
            <Subtitle>MA Service Design</Subtitle>
            <p>Royal College of Art (UK)</p>
          </Details>
        </ListItem>
        <ListItem>
          <Date>Sep 2009 - Sep 2013</Date>
          <Details>
            <Subtitle>BSc Quantitative Finance</Subtitle>
            <p>National Tsing-Hua University (Taiwan)</p>
          </Details>
        </ListItem>
      </ul>
      <Subtitle>Qualifications</Subtitle>
      <ul>
      <ListItem>
          <Date>April 2021</Date>
          <Details>
            <Subtitle>Figma for UI/UX Design</Subtitle>
            <p>Simon Lin</p>
          </Details>
        </ListItem>
        <ListItem>
          <Date>Dec 2020</Date>
          <Details>
            <Subtitle>Foundation HTML, CSS + Javascript / React.js</Subtitle>
            <p>SuperHi</p>
          </Details>
        </ListItem>
      </ul>
      <Subtitle>Voluntary</Subtitle>
      <ul>
        <ListItem>
          <Date>Sep 2016 - Sep 2018</Date>
          <Details>
            <Subtitle>Event Assistant</Subtitle>
            <p>We Make The City (Netherland)</p>
            <p>
              Helped design foot traffic and front desk registration for audiences participating in We Make The City which is one of the largest city festivals in Europe, taking place from 17 to 23 June 2019, celebrating urban living whilst addressing important urban issues in the metropolitan region of Amsterdam.
            </p>
          </Details>
        </ListItem>
        <ListItem>
          <Date>June 2012 - June 2013</Date>
          <Details>
            <Subtitle>Head of Design / Event Manager</Subtitle>
            <p>TEDxNTHU (Taiwan)</p>
            <p>
              Designed curation experience for the first annual event in 2013, with more than 300 audiences participating. Managed event day logistics and developed a script and timeline for the event day that is given to the team to ensure that curation is constantly delivering whilst resolving unexpected problems as soon as possible.
            </p>
          </Details>
        </ListItem>
      </ul>
      <Subtitle>Skillset</Subtitle>
      <TagLists>
        <TagItem>Digital Interaction Strategy</TagItem>
        <TagItem>User Research</TagItem>
        <TagItem>Rapid Prototype</TagItem>
        <TagItem>UX and UI Design</TagItem>
        <TagItem>Journey Mapping</TagItem>
        <TagItem>Service Blueprinting</TagItem>
        <TagItem>Stakeholder Engagement</TagItem>
        <TagItem>Team Workshop Facilitation</TagItem>
        <TagItem>Information Architecture</TagItem>
        <TagItem>JAMstack</TagItem>
        <TagItem>Headless CMS</TagItem>
        <TagItem>HTML/CSS/Javascript</TagItem>
        <TagItem>(Beginner) React/Next.js</TagItem>
        <TagItem>MDX</TagItem>
        <TagItem>Styled-Component</TagItem>
      </TagLists>

      <Subtitle>Toolset</Subtitle>
      <TagLists>
        <TagItem>Figma</TagItem>
        <TagItem>Adobe Creative Suite</TagItem>
        <TagItem>Affinity Suite</TagItem>
        <TagItem>GitHub</TagItem>
        <TagItem>Slack</TagItem>
        <TagItem>Miro</TagItem>
        <TagItem>Trello</TagItem>
        <TagItem>Notion</TagItem>
        <TagItem>G-Suite</TagItem>
      </TagLists>
      <Subtitle><a target="_blank" href="https://drive.google.com/file/d/1p2DTRsN1TlHtFN2rb7G0Vbx8WGRmO7b7/view?usp=sharing">Download CV</a></Subtitle>
    </Layout>
  )
}

const Title = styled.h4`
  font-variation-settings: 'wght' 400;
  margin: 3rem 0 .69rem;
  @media(max-width: 425px){
    margin: 1rem 0 0.5rem;
  }
`
const Subtitle = styled.h5`
  font-variation-settings: 'wght' 800;
  margin:0;
  margin-top: 1.5rem;

  @media(max-width:642px){
    margin-top:2rem;
  }  
  &:last-child{
      text-align: center;
      margin: 2.5rem auto;
    }
  ul & {
    font-variation-settings: 'wght' 800;
    margin:0;

    @media(max-width:642px){
      padding-right:2rem;
      margin-right:7rem;
    }
  }
`
const Role = styled.h2`
  margin-top: 0;
`
const SectionWrapper = styled.section`
  border: 1px dashed hsl(145deg 64% 70% / 50%);
  padding: 1rem;
  margin: 0 -1rem 1.38rem;
  border-radius: .8rem .8rem 0 .8rem;
  p{
    margin: 0;
  }
  @media(max-width:928px){
    margin: 0 0 1.38rem;
    padding: 1rem 1.1rem;
  }
`
const Date = styled.p`
  flex:1;
  @media(max-width:768px){
    padding-right: 1rem;
  }
  @media(max-width:642px){
    margin: 0;
    padding: 0;
    opacity: .6;
    position: absolute;
    font-size: .8rem;
    top:0;
    right:4px;
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex:3;
  @media(max-width:768px){
    flex:5;

    p{
      &:first-of-type{
        letter-spacing: -0.03rem;
      }
    }
  }
`
const ListItem = styled.li`
  margin: .5rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media(max-width:642px){
    flex-direction: column;
    position: relative;
  }
`
const TagLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: .5rem -.5rem 1rem;
  &:last-of-type{
    margin-bottom: 1.7rem;
  }
`
const TagItem = styled.li`
  letter-spacing: 0.02rem;
  font-size: .8rem;
  font-variation-settings: 'wght' 600;
  border-radius: .4rem .4rem 0;
  padding:.25rem .75rem;
  margin: .45rem;
  width: max-content;
  background-color: hsl(145deg 64% 70% / 20%);
  @media(max-width:642px){
    padding:.125rem .25rem;
    margin: .25rem;
  }
`