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
`;

const School = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(1) {
    border-right: 1px solid ${colors.black};
  }
`;

const Img = styled.img<{ $width: string }>`
  width: ${({ $width }) => $width};
  margin-bottom: 16px;
`;

const SchoolTitle = styled.p`
  font-family: "Inter Bold";
  font-size: 1.5vw;
`;

const SchoolInfo = styled.p`
  font-size: 1.2vw;
  text-align: center;
`;

export default function Education() {
  return (
    <EducationContainer id="education">
      <Stripes $width="100%" $color="yellow" $height="90px" />
      <SchoolsContainer>
        <School>
          <Img src={AppAcademy} $width="9vw" />
          <SchoolTitle>App Academy</SchoolTitle>
          <SchoolInfo>1000 Hour Web Development</SchoolInfo>
          <SchoolInfo>Bootcamp with 3% Acceptance Rate</SchoolInfo>
          <SchoolInfo>San Francisco, CA | 2016</SchoolInfo>
        </School>
        <School>
          <Img src={IWU} $width="21vw" />
          <SchoolTitle>Indiana Wesleyan University</SchoolTitle>
          <SchoolInfo>BA Youth Ministry</SchoolInfo>
          <SchoolInfo>Marion, IN | 2013</SchoolInfo>
        </School>
      </SchoolsContainer>
    </EducationContainer>
  );
}
