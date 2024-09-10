import ExperienceModal, {
  ExperienceTypes,
  workExperienceObj,
} from "./ExperienceModal";

import ExperienceCircle from "./ExperienceCircle";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";
import { useState } from "react";

const WorkContainer = styled.section`
  width: 100%;
  background-color: ${colors.yellow};
  position: relative;
  padding: 7vw 0;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const GridContainer = styled.div`
  margin: 0 auto;
  width: 75vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.25vw 1vw;

  @media (max-width: 799px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.span`
  position: absolute;
  left: 11.5vw;
  top: 12.5vw;
  z-index: 3;
  font-family: "Heathergreen";
  font-size: 14vw;
  line-height: 0.6;
  color: ${colors.white};
  text-shadow: -2px -2px 0 ${colors.black}, 2px -2px 0 ${colors.black},
    -2px 2px 0 ${colors.black}, 2px 2px 0 ${colors.black};

  @supports ((text-stroke: 3px black) or (-webkit-text-stroke: 3px black)) {
    color: transparent;
    -webkit-text-stroke: 3px ${colors.black};
    text-stroke: 3px ${colors.black};
    text-shadow: none;
  }

  @media (max-width: 799px) {
    left: 12vw;
    top: 14vw;
    font-size: 22vw;
  }

  @media (max-width: 500px) {
    position: unset;
    font-size: 22vw;
    margin: 16px auto;
    line-height: 1;
  }
`;

export default function WorkExperience() {
  const [modalOpen, setModalOpen] = useState(true);
  const [job, setJob] = useState<ExperienceTypes>("Salesloft");

  const handleOpen = (currentJob: ExperienceTypes) => {
    setModalOpen(true);
    setJob(currentJob);
  };

  const handleClose = () => {
    setModalOpen(false);
    setJob(null);
  };

  return (
    <WorkContainer id="work">
      <Text>EXPERIENCE</Text>
      <GridContainer>
        <div />
        {Object.keys(workExperienceObj).map((job, i) => {
          const { jobTitle, title, dateRange } = workExperienceObj[job];
          return (
            <ExperienceCircle
              key={i}
              title={jobTitle}
              company={title}
              dateRange={dateRange}
              onClick={() => handleOpen(title)}
            />
          );
        })}
      </GridContainer>
      <ExperienceModal isOpen={modalOpen} close={handleClose} job={job} />
    </WorkContainer>
  );
}
