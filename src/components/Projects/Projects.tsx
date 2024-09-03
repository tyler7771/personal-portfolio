import styled, { css } from "styled-components";

import NeverTellMeTheOdds from "../../assets/images/NeverTellMeTheOdds.png";
import Synth from "../../assets/images/Synth.png";
import { colors } from "../../assets/cssHelpers";

const ProjectsContainer = styled.section`
  width: 100%;
  background-color: ${colors.black};
  position: relative;
  padding: 11vw 0;
`;

const BlocksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectBlock = styled.div<{
  $color: "white" | "black" | "yellow" | "grey";
  $img?: any;
}>`
  width: 11.111vw;
  height: 11.111vw;
  background-color: ${({ $color }) => colors[$color]};
  display: inline;

  ${({ $img }) =>
    $img &&
    css`
      background-image: url(${$img});
      background-size: cover;
    `}
`;
const Text = styled.span`
  position: absolute;
  display: block;
  left: 13vw;
  top: 21vw;
  font-family: "Heathergreen";
  font-size: 15.5vw;
  line-height: 0.8;
  color: ${colors.black};
  text-shadow: -2px -2px 0 ${colors.white}, 2px -2px 0 ${colors.white},
    -2px 2px 0 ${colors.white}, 2px 2px 0 ${colors.white};

  @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
    color: transparent;
    -webkit-text-stroke: 1px ${colors.white};
    text-stroke: 1px ${colors.white};
    text-shadow: none;
  }
`;

export default function Projects() {
  return (
    <ProjectsContainer id="projects">
      <Text>
        MY
        <br />
        PROJECTS
      </Text>
      <BlocksContainer>
        <ProjectBlock $color="black" />
        <ProjectBlock $color="grey" />
        <ProjectBlock $color="yellow" />
        <ProjectBlock $color="black" />
        <ProjectBlock $color="white" />
        <ProjectBlock $color="black" />
        <ProjectBlock $color="white" />
        <ProjectBlock $color="yellow" />
        <ProjectBlock $color="black" />
      </BlocksContainer>
      <BlocksContainer>
        <ProjectBlock $color="white" />
        <ProjectBlock $color="black" />
        <ProjectBlock $color="grey" />
        <ProjectBlock $color="white" $img={NeverTellMeTheOdds} />
        <ProjectBlock $color="black" />
        <ProjectBlock $color="white" $img={Synth} />
        <ProjectBlock $color="black" />
        <ProjectBlock $color="white" />
        <ProjectBlock $color="grey" />
      </BlocksContainer>
      <BlocksContainer>
        <ProjectBlock $color="black" />
        <ProjectBlock $color="yellow" />
        <ProjectBlock $color="black" />
        <ProjectBlock $color="grey" />
        <ProjectBlock $color="white" />
        <ProjectBlock $color="black" />
        <ProjectBlock $color="yellow" />
        <ProjectBlock $color="grey" />
        <ProjectBlock $color="black" />
      </BlocksContainer>
    </ProjectsContainer>
  );
}
