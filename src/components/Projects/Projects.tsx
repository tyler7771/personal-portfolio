import styled, { css, keyframes } from "styled-components";

import Basketball from "../../assets/images/Basketball.jpg";
import Beer from "../../assets/images/ChristmasBeer.jpg";
import NeverTellMeTheOdds from "../../assets/images/NeverTellMeTheOdds.png";
import Synth from "../../assets/images/Synth.png";
import { colors } from "../../assets/cssHelpers";

type ProjectTypes = {
  $color: "white" | "black" | "yellow" | "grey";
  $img?: any;
  $hasChild?: boolean;
  $top?: string;
  $lineWidth?: string;
};

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

const ProjectBlock = styled.div<ProjectTypes>`
  width: 11.111vw;
  height: 11.111vw;
  background-color: ${({ $color }) => colors[$color]};
  display: inline;
  ${({ $hasChild }) =>
    $hasChild &&
    css`
      position: relative;
      overflow: hidden;
    `};

  ${({ $img, $top, $lineWidth }) => {
    const lineAnimation = keyframes`
      from {
        width: 0;
      }
      to { 
        width: ${$lineWidth}
      }
    `;

    return (
      $img &&
      css`
        background-image: url(${$img});
        background-size: cover;
        position: relative;

        &:after {
          content: "";
          width: ${$lineWidth};
          border-bottom: solid 1px ${colors.yellow};
          position: absolute;
          left: 50%;
          top: ${$top};
          z-index: 1;

          animation: ${lineAnimation} linear;
          animation-timeline: view();
          animation-range: cover 0% cover 25%;
        }
      `
    );
  }}
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

const textAnimation = keyframes`
      from {
        left: -68%;
      }
      to { 
        left: 16%
      }
    `;

const TextContainer = styled.div`
  width: 68%;
  position: absolute;
  left: 16%;
  bottom: 16%;

  animation: ${textAnimation} linear;
  animation-timeline: view();
  animation-range: cover 0% cover 25%;

  p {
    &:nth-child(1) {
      font-family: "Heathergreen";
      color: ${colors.yellow};
      font-size: 2.34vw;
      line-height: 1.2;
    }
    &:nth-child(2) {
      color: ${colors.white};
      font-size: 0.94vw;
      line-height: 1;
    }
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
        <ProjectBlock $color="white" $img={Beer} $lineWidth="89%" $top="42%" />
        <ProjectBlock $color="black" $hasChild>
          <TextContainer>
            <p>REACT</p>
            <p>12 Beers of Christmas</p>
          </TextContainer>
        </ProjectBlock>
        <ProjectBlock $color="white" />
        <ProjectBlock $color="yellow" />
        <ProjectBlock $color="black" />
      </BlocksContainer>
      <BlocksContainer>
        <ProjectBlock $color="white" />
        <ProjectBlock $color="black" />
        <ProjectBlock $color="grey" />
        <ProjectBlock
          $color="white"
          $img={NeverTellMeTheOdds}
          $lineWidth="107%"
          $top="42%"
        />
        <ProjectBlock $color="black" $hasChild>
          <TextContainer>
            <p>VANILLA JS</p>
            <p>Never Tell Me The Odds</p>
          </TextContainer>
        </ProjectBlock>
        <ProjectBlock $color="white" $img={Synth} $lineWidth="89%" $top="50%" />
        <ProjectBlock $color="black" $hasChild>
          <TextContainer>
            <p>REACT</p>
            <p>Synthaseizure</p>
          </TextContainer>
        </ProjectBlock>
        <ProjectBlock $color="white" />
        <ProjectBlock $color="grey" />
      </BlocksContainer>
      <BlocksContainer>
        <ProjectBlock $color="black" />
        <ProjectBlock $color="yellow" />
        <ProjectBlock $color="black" />
        <ProjectBlock $color="grey" />
        <ProjectBlock
          $color="white"
          $img={Basketball}
          $lineWidth="89%"
          $top="50%"
        />
        <ProjectBlock $color="black" $hasChild>
          <TextContainer>
            <p>REACT</p>
            <p>NBA Compare</p>
          </TextContainer>
        </ProjectBlock>
        <ProjectBlock $color="yellow" />
        <ProjectBlock $color="grey" />
        <ProjectBlock $color="black" />
      </BlocksContainer>
    </ProjectsContainer>
  );
}
