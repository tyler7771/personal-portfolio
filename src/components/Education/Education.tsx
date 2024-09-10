import AppAcademy from "../../assets/images/AppAcademy.png";
import IWU from "../../assets/images/IWU.png";
import Stripes from "../Shared/Stripes";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const EducationContainer = styled.section`
  width: 100%;
  background-color: ${colors.white};
  position: relative;
`;

const SchoolsContainer = styled.div`
  width: 60vw;
  display: flex;
  margin: 96px auto;

  @media (max-width: 799px) {
    width: 80vw;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const School = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(1) {
    border-right: 1px solid ${colors.black};
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 32px;

    &:nth-child(1) {
      border-right: none;
    }
  }
`;

const Img = styled.img<{ $isIWU?: boolean }>`
  width: ${({ $isIWU }) => ($isIWU ? "21vw" : "9vw")};
  margin-bottom: 16px;

  @media (max-width: 799px) {
    width: ${({ $isIWU }) => ($isIWU ? "30vw" : "13vw")};
  }

  @media (max-width: 500px) {
    width: ${({ $isIWU }) => ($isIWU ? "60vw" : "40vw")};
  }
`;

const SchoolTitle = styled.p`
  font-family: "Inter Bold";
  font-size: 1.5vw;

  @media (max-width: 799px) {
    font-size: 2.25vw;
  }

  @media (max-width: 500px) {
    font-size: 5vw;
  }
`;

const SchoolInfo = styled.p`
  font-size: 1.2vw;
  text-align: center;

  @media (max-width: 799px) {
    font-size: 1.75vw;
  }

  @media (max-width: 500px) {
    font-size: 3vw;
  }
`;

export default function Education() {
  return (
    <EducationContainer id="education">
      <Stripes $width="100%" $color="yellow" $height="90px" />
      <SchoolsContainer>
        <School>
          <Img src={AppAcademy} />
          <SchoolTitle>App Academy</SchoolTitle>
          <SchoolInfo>1000 Hour Web Development</SchoolInfo>
          <SchoolInfo>Bootcamp with 3% Acceptance Rate</SchoolInfo>
          <SchoolInfo>San Francisco, CA | 2016</SchoolInfo>
        </School>
        <School>
          <Img src={IWU} $isIWU />
          <SchoolTitle>Indiana Wesleyan University</SchoolTitle>
          <SchoolInfo>BA Youth Ministry</SchoolInfo>
          <SchoolInfo>Marion, IN | 2013</SchoolInfo>
        </School>
      </SchoolsContainer>
    </EducationContainer>
  );
}
