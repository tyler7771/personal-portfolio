import ProjectModal, { ProjectTypes } from "./ProjectsModal";
import styled, { css, keyframes } from "styled-components";

import Basketball from "../../assets/images/Basketball.jpg";
import Beer from "../../assets/images/ChristmasBeer.jpg";
import NeverTellMeTheOdds from "../../assets/images/NeverTellMeTheOdds.png";
import Synth from "../../assets/images/Synth.png";
import { colors } from "../../assets/cssHelpers";
import { useState } from "react";

type ProjectBlockTypes = {
  $color: "white" | "black" | "yellow" | "grey";
  $img?: string;
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

const ProjectBlock = styled.div<ProjectBlockTypes>`
  width: 11.111vw;
  height: 11.111vw;
  background-color: ${({ $color }) => colors[$color]};
  display: inline;
  ${({ $hasChild }) =>
    $hasChild &&
    css`
      position: relative;
      overflow: hidden;
      height: 100%;
      width: 50%;
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
        height: 100%;
        width: 50%;

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

  @media (max-width: 1399px) {
    width: 14.285vw;
    height: 14.285vw;

    &.md {
      display: none;
    }
  }
  @media (max-width: 800px) {
    width: 20vw;
    height: 20vw;

    &.sm {
      display: none;
    }
  }
  @media (max-width: 500px) {
    width: 25vw;
    height: 25vw;

    &.xs {
      display: none;
    }
  }
`;

const Text = styled.span`
  position: absolute;
  width: 27vw;
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
    -webkit-text-stroke: 2px ${colors.white};
    text-stroke: 2px ${colors.white};
    text-shadow: none;
  }

  @media (max-width: 1399px) {
    top: 28vw;
  }
  @media (max-width: 800px) {
    top: 37vw;
    left: 4vw;
    font-size: 19.5vw;
    width: 35vw;
    -webkit-text-stroke: 1px ${colors.white};
    text-stroke: 1px ${colors.white};
  }
  @media (max-width: 500px) {
    position: unset;
    width: unset;
    margin-bottom: 3vw;
    text-align: center;
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

      @media (max-width: 1399px) {
        font-size: 3vw;
      }
      @media (max-width: 800px) {
        font-size: 4vw;
      }
      @media (max-width: 500px) {
        font-size: 5vw;
      }
    }
    &:nth-child(2) {
      color: ${colors.white};
      font-size: 0.94vw;
      line-height: 1;

      @media (max-width: 1399px) {
        font-size: 1.25vw;
      }
      @media (max-width: 800px) {
        font-size: 1.9vw;
      }
      @media (max-width: 500px) {
        font-size: 2.25vw;
      }
    }
  }
`;

const ClickableContainer = styled.div`
  cursor: pointer;
  display: flex;
  height: 11.111vw;
  width: 22.222vw;

  &:hover {
    &:after {
      content: "";
      display: block;
      height: 11.111vw;
      background: ${colors.yellow};
      opacity: 0.3;
      filter: alpha(opacity = 30);
      width: 22.222vw;
      position: absolute;
    }
  }

  @media (max-width: 1399px) {
    width: 28.57vw;
    height: 14.285vw;
  }
  @media (max-width: 800px) {
    width: 40vw;
    height: 20vw;
  }
  @media (max-width: 500px) {
    width: 50vw;
    height: 25vw;
  }
`;

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useState<ProjectTypes>(null);

  const handleOpen = (currentProject: ProjectTypes) => {
    setModalOpen(true);
    setProject(currentProject);
  };

  const handleClose = () => {
    setModalOpen(false);
    setProject(null);
  };

  return (
    <ProjectsContainer id="projects">
      <Text>MY PROJECTS</Text>
      <BlocksContainer>
        <ProjectBlock $color="black" className="md" />
        <ProjectBlock $color="grey" className="sm" />
        <ProjectBlock $color="yellow" className="xs" />
        <ProjectBlock $color="black" />
        <ClickableContainer onClick={() => handleOpen("beers")}>
          <ProjectBlock
            $color="white"
            $img={Beer}
            $lineWidth="89%"
            $top="42%"
          />
          <ProjectBlock $color="black" $hasChild>
            <TextContainer>
              <p>REACT</p>
              <p>12 Beers of Christmas</p>
            </TextContainer>
          </ProjectBlock>
        </ClickableContainer>
        <ProjectBlock $color="white" />
        <ProjectBlock $color="yellow" className="sm" />
        <ProjectBlock $color="black" className="md" />
      </BlocksContainer>
      <BlocksContainer>
        <ProjectBlock $color="white" className="md" />
        <ProjectBlock $color="black" className="sm" />
        <ProjectBlock $color="grey" className="xs" />
        <ClickableContainer onClick={() => handleOpen("odds")}>
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
        </ClickableContainer>
        <ClickableContainer onClick={() => handleOpen("synth")}>
          <ProjectBlock
            $color="white"
            $img={Synth}
            $lineWidth="89%"
            $top="50%"
          />
          <ProjectBlock $color="black" $hasChild>
            <TextContainer>
              <p>REACT</p>
              <p>Synthaseizure</p>
            </TextContainer>
          </ProjectBlock>
        </ClickableContainer>
        <ProjectBlock $color="white" className="sm" />
        <ProjectBlock $color="grey" className="md" />
      </BlocksContainer>
      <BlocksContainer>
        <ProjectBlock $color="black" className="md" />
        <ProjectBlock $color="yellow" className="sm" />
        <ProjectBlock $color="black" className="xs" />
        <ProjectBlock $color="grey" />
        <ClickableContainer onClick={() => handleOpen("nba")}>
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
        </ClickableContainer>
        <ProjectBlock $color="yellow" />
        <ProjectBlock $color="grey" className="sm" />
        <ProjectBlock $color="black" className="md" />
      </BlocksContainer>
      <ProjectModal isOpen={modalOpen} close={handleClose} project={project} />
    </ProjectsContainer>
  );
}
