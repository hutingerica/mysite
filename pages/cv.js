import Head from 'next/head'
import Layout from '../components/Layout'
import StyledTippy from '../components/StyledTippy'
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
        User research and service design specialist with experience delivering end-to-end services, facilitating team workshops and championing human-centered design. Erica enjoys digging into core problems, figuring out design strategy, creating clean interfaces, and bringing delightful solutions to people through technology.
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
              Mostly made websites. Built prototypes, experience maps and design systems to ensure that end-to-end digital service delivery is constantly iterating to be more user-centered. Lately, practiced <a target="_blank" href="https://space10.com/beyond-human-centered-design/">people-planet design</a> approach through projects' topic around food, democracy, works and education.
            </p>
          </Details>
        </ListItem>
        <ListItem>
          <Date>Dec 2018 - Dec 2019</Date>
          <Details>
            <Subtitle>Service Designer</Subtitle>
            <p>King's Cross Bun (UK)</p>
            <p>
              Developed coworking toolkits with project organiser to help team members in King’s Cross Bun brainstorm and make decisions on long-term project strategies. The toolkits included stakeholders analysis, project journey maps, project blueprints and etc.
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
            <Subtitle>React.js / Advanced CSS + Javascript / Foundation HTML, CSS + Javascript</Subtitle>
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
        <TagItem>HTML/CSS/Javascript</TagItem>
        <TagItem>Styled-Component</TagItem>
        <TagItem>JAMstack</TagItem>
        <TagItem>Headless CMS</TagItem>
        <TagItem>(Beginner) React/Next.js</TagItem>
      </TagLists>

      <Subtitle>Toolset</Subtitle>
      <TagLists>
        <StyledTippy content="Figma" placement="bottom">
          <TagImage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M277 170.7A85.35 85.35 0 0 0 277 0H106.3a85.3 85.3 0 0 0 0 170.6 85.35 85.35 0 0 0 0 170.7 85.35 85.35 0 1 0 85.3 85.4v-256zm0 0a85.3 85.3 0 1 0 85.3 85.3 85.31 85.31 0 0 0-85.3-85.3z"/>
            </svg>
          </TagImage>
        </StyledTippy>
        <StyledTippy content="Adobe Creative Suite" placement="bottom">
          <TagImage>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 70" fill="currentColor" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M63.3,50c-4,4.2-9.5,6.5-15.2,6.5c-5.8-0.1-11.3-2.5-15.3-6.7L23,40.1c-1.2-1.3-1.2-3.3,0.1-4.5c0.6-0.6,1.4-0.9,2.2-0.9
            c0.9,0,1.7,0.3,2.3,1l9.7,9.7c2.8,3,6.7,4.7,10.8,4.8c4.1,0,7.9-1.7,10.7-4.6c2.9-2.9,4.5-6.9,4.5-11c0-8.4-6.8-15.2-15.2-15.2
              c-3-0.1-6,0.7-8.4,2.5c0,0-0.7-0.5-1.5-1c-0.5-0.3-1-0.6-1.4-0.8c-0.5-0.3-1.8-0.9-2.6-1.2c-0.2-0.1-0.4-0.2-0.6-0.2l0,0
              c3.9-3.7,9.1-5.7,14.5-5.6c11.9,0,21.6,9.7,21.6,21.6C69.6,40.4,67.3,45.9,63.3,50 M26.8,56.4C17,56.4,9,48.4,9,38.6
              c0-9.8,7.9-17.7,17.7-17.7c4.4,0,8.6,1.6,11.8,4.5l0.1,0.1L46,33c0.6,0.6,0.9,1.4,0.9,2.3c0,0.8-0.4,1.6-1,2.2
              c-0.6,0.6-1.4,0.9-2.2,0.9c-0.9,0-1.7-0.3-2.3-1l-7.3-7.5c-2.1-1.8-4.7-2.7-7.4-2.7c-6.3,0-11.3,5.1-11.4,11.3
              C15.5,44.8,20.6,49.9,27,50h1.5l0,0c2.1,2.9,7.9,6.4,7.9,6.4L26.8,56.4z M65.8,17.5c-4.7-5.1-11.3-7.9-18.2-7.9
              c-6.8,0-13.2,2.7-18,7.6c-0.8-0.1-1.6-0.1-2.4-0.1c-11.8,0-21.3,9.6-21.4,21.4c0,5.6,2.2,10.9,6,14.9c4,4.3,9.5,6.7,15.4,6.7h20.4
              c13.9-0.1,25.1-11.4,25.1-25.3C72.7,28.3,70.2,22.2,65.8,17.5"/>
          </svg>
          </TagImage>
        </StyledTippy>  
        <StyledTippy content="Affinity Suite" placement="bottom">
          <TagImage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 675.7 614.9" fill="currentColor" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M263.7 0h106.4l8.9 15.5h30.5l266.1 461-57.3 97.7H385.4l23.6 40.7h-10.3l-23.6-40.7H86l-14.8-26H52.9L0 456.6h.1L67.9 339l62.8-36.2 103.9-179.9-20.9-36.2 50-86.7zm62.7 159.1L142.6 476.6h175.9l-20.3-35.1 191.7.2-163.5-282.6z"/>
            </svg>
          </TagImage>
        </StyledTippy>
        <StyledTippy content="GitHub" placement="bottom">
          <TagImage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </TagImage>
        </StyledTippy>
        <StyledTippy content="Slack" placement="bottom">
          <TagImage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"/>
            </svg>
          </TagImage>
        </StyledTippy>
        <StyledTippy content="Miro" placement="bottom">
          <TagImage>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor"><g id="path4" transform="matrix(0.347805,0,0,0.347805,150.51,103.851)"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M240.081,124.642C252.92,123.062 266.81,124.443 277.67,132.053C290.191,140.273 297.08,155.242 297.531,169.963C298.4,174.312 297.351,178.663 297.181,183.023C295.751,196.333 288.791,209.293 277.5,216.773C265.381,224.863 249.83,226.163 235.841,223.214C223.921,220.672 213.05,213.433 206.59,203.032C198.83,190.693 197.421,175.173 200.311,161.124C203.001,147.682 211.96,135.573 224.34,129.543C229.26,127.033 234.63,125.493 240.081,124.642ZM568.381,277.694C581.311,275.583 594.241,273.523 607.171,271.353C607.221,299.143 607.131,326.933 607.212,354.723C594.391,357.154 581.541,359.433 568.721,361.803C549.501,364.893 529.421,370.483 515.12,384.433C503.451,395.413 497.851,411.373 496.672,427.063C495.851,438.324 496.501,449.663 496.301,460.954C496.331,518.674 496.231,576.394 496.34,634.115C474.091,629.635 451.851,625.084 429.601,620.624C425.341,619.884 421.181,618.654 416.881,618.274C415.8,612.244 416.671,606.034 416.401,599.933C416.401,538.594 416.381,477.244 416.411,415.904C417.061,396.594 420.271,377.093 428.261,359.373C436.091,341.393 449.501,326.133 465.591,315.043C487.011,300.303 511.851,291.572 536.781,284.854C547.242,282.193 557.662,279.173 568.382,277.694L568.381,277.694ZM-302.811,288.443C-283.63,277.353 -261.362,271.973 -239.261,272.193C-204.091,273.484 -169.902,291.833 -149.361,320.423C-138.901,306.333 -124.61,295.334 -109,287.493C-73.961,270.603 -31.641,268.063 4.58,282.773C21.359,289.653 36.62,300.433 48.26,314.383C60.21,328.483 68.389,345.544 73.119,363.353C78.14,381.743 79.469,400.923 79.1,419.923C79.109,491.344 79.07,562.763 79.12,634.174C52.52,628.694 25.889,623.254 -0.771,618.084C-1.041,549.683 -0.741,481.284 -0.91,412.894C-0.78,397.243 -6.171,381.143 -17.53,370.084C-29.65,357.752 -47.29,352.003 -64.34,352.313C-79.551,352.054 -95.161,356.493 -107.002,366.283C-120.64,377.103 -127.871,394.693 -127.83,411.913C-127.781,485.993 -127.89,560.073 -127.781,634.154C-154.421,628.733 -181.062,623.164 -207.771,618.104C-208.211,596.064 -207.831,574.004 -207.96,551.955C-207.951,505.934 -207.96,459.914 -207.951,413.904C-207.362,398.133 -212.742,381.833 -223.992,370.543C-233.752,360.333 -247.381,354.534 -261.262,352.803C-274.262,351.463 -287.781,352.444 -299.902,357.623C-312.821,362.843 -323.732,372.972 -329.672,385.604C-333.702,394.103 -335.462,403.533 -335.501,412.903C-335.492,470.583 -335.501,528.264 -335.501,585.944C-335.372,601.955 -335.762,617.983 -335.301,633.983C-361.921,629.033 -388.352,623.104 -414.962,618.163C-415.532,608.774 -414.742,599.353 -415.391,589.983C-414.982,579.303 -415.012,568.573 -415.372,557.904C-414.742,547.923 -415.492,537.923 -415.132,527.944C-415.172,499.623 -415.141,471.293 -415.153,442.973C-415.301,425.284 -414.842,407.572 -415.382,389.904C-415.001,379.934 -414.992,369.913 -415.382,359.943C-414.851,340.283 -415.292,320.573 -415.162,300.903C-414.952,299.013 -416.442,296.143 -414.402,294.953C-388.092,289.784 -361.751,284.743 -335.432,279.623C-335.612,291.673 -335.422,303.723 -335.532,315.773C-326.142,305.032 -315.312,295.433 -302.811,288.443L-302.811,288.443ZM842.127,272.683C880.996,270.153 921.405,277.203 954.956,297.713C973.593,309.083 989.762,324.423 1002.25,342.333C1013.25,358.313 1021.38,376.213 1026.71,394.853C1032.57,414.993 1034.79,436.024 1034.98,456.944C1034.89,495.183 1026.04,534.133 1005.2,566.564C986.722,595.393 958.692,617.914 926.517,629.635C905.835,637.404 883.777,641.104 861.732,641.545C820.082,642.384 777.164,632.234 743.067,607.575C714.288,587.094 693.115,556.774 682.331,523.254C674.874,500.644 671.861,476.703 672.242,452.954C672.542,411.634 684.58,369.514 710.538,336.863C731.697,309.913 761.8,290.563 794.588,280.963C810.048,276.383 826.04,273.683 842.127,272.683ZM853.961,347.333C831.438,347.743 808.616,354.763 791.111,369.253C776.687,380.894 766.312,397.094 760.532,414.633C754.165,433.694 752.856,454.193 755.106,474.084C757.846,497.034 766.817,519.764 782.945,536.634C795.583,550.144 812.516,559.254 830.457,563.454C852.884,568.574 877.287,567.644 898.296,557.744C913.797,550.684 926.735,538.574 935.665,524.144C945.726,507.803 950.88,488.824 952.448,469.803C954.22,448.174 951.916,425.943 943.94,405.664C936.851,387.473 924.295,371.212 907.608,360.873C891.711,350.873 872.625,346.654 853.961,347.333ZM207.82,295.092C234.49,289.964 261.13,284.713 287.811,279.643C287.67,397.844 287.67,515.994 287.74,634.164C261.19,628.804 234.68,623.144 208.07,618.214C207.35,607.814 207.951,597.354 207.76,586.924C207.8,489.644 207.67,392.363 207.82,295.092Z"/></g></svg>
          </TagImage>
        </StyledTippy>
        <StyledTippy content="Trello" placement="bottom">
          <TagImage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M392.3 32H56.1C25.1 32 0 57.1 0 88c-.1 0 0-4 0 336 0 30.9 25.1 56 56 56h336.2c30.8-.2 55.7-25.2 55.7-56V88c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6H87.4c-14.8.1-26.9-11.8-27-26.6V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v254.2zm193.1-112c0 14.8-12 26.9-26.9 26.9h-81c-14.8 0-26.9-12-26.9-26.9V117.2c0-14.8 12-26.9 26.8-26.9h81.1c14.8 0 26.9 12 26.9 26.9v142.1z"/>
            </svg>
          </TagImage>
        </StyledTippy>
        <StyledTippy content="Notion" placement="bottom">
          <TagImage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0.18999999999999906 487.619 510.941" fill="currentColor" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z" fillRule="evenodd"/>
            </svg>
          </TagImage>
          </StyledTippy>
        <StyledTippy content="G-Suite" placement="bottom">
        <TagImage>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" fill="currentColor" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
          </svg>
        </TagImage>
        </StyledTippy>
      </TagLists>
      <Subtitle><a target="blank" href="https://drive.google.com/file/d/1p2DTRsN1TlHtFN2rb7G0Vbx8WGRmO7b7/view?usp=sharing">Download CV</a></Subtitle>
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
      padding-right:1.5rem;
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
  border-radius: 6px;
  p{
    margin: 0;
  }
  @media(max-width:928px){
    margin: 0 0 1.38rem;
    padding: 1rem 2rem;
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
  border-radius: 6px;
  padding:.25rem .5rem;
  margin: .5rem;
  width: max-content;
  background-color: hsl(145deg 64% 70% / 10%);
`
const TagImage = styled.div`
  display: flex;
  justify-content: center;
  margin: .5rem;
  padding:.25rem .5rem;
  border-radius: 6px;
  width:2.5rem;
  height:2.5rem;
  background-color: hsl(145deg 64% 70% / 10%);
  border: 1px dashed hsl(145deg 64% 70% / 40%);
  &:hover{
    border: 1px dashed hsl(145deg 64% 70% / 0%);
    background-color: hsl(145deg 64% 70% / 50%);
  }
`