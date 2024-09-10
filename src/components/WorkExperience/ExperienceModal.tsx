import AppAcademy from "../../assets/images/AppAcademyJob.png";
import Modal from "../Shared/Modal";
import RES from "../../assets/images/RES.png";
import Salesloft from "../../assets/images/Salesloft.png";
import ShopCo from "../../assets/images/ShopCo.png";
import Territory from "../../assets/images/Territory.png";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

export type ExperienceTypes =
  | "Salesloft"
  | "Territory Foods"
  | "Renaissance Electronic Services"
  | "App Academy"
  | "Shop.co"
  | null;

type ExperienceModalTypes = {
  isOpen: boolean;
  close: () => void;
  job: ExperienceTypes;
};

type WorkExperienceType = {
  title: ExperienceTypes;
  img: string;
  description: string;
  jobTitle: string;
  dateRange: string;
};

type ExperieneceObjTypes = {
  [key: string]: WorkExperienceType;
};

export const workExperienceObj: ExperieneceObjTypes = {
  Salesloft: {
    title: "Salesloft",
    img: Salesloft,
    description:
      "At Salesloft I worked on the frontend platform team and multiple different feature teams.\n- Updated the design system to use design tokens, wrote end-to-end playwright tests, and updated components to use the newest native JS popover API.\n- Refactored technical debt including deprecating Angular.js on multiple apps and updated to use React, taught and provided support for other engineers in Angular deprecation, implemented new user invite flow to onboard teams with updated licensing, and fixed bugs across many components in the design system.\n- Created a keyboard shortcut navigation registry to reduce customer churn.",
    jobTitle: "UI Engineer",
    dateRange: "Nov 2021 - Aug 2024",
  },
  "Territory Foods": {
    title: "Territory Foods",
    img: Territory,
    description:
      "- Collaborated and coordinated with other developers as part of the customer engagement team to create a better customer experience.\n- Worked to re-platform a Rails MVC app to Next.JS pages that utilized Typescript, GraphQL, and Storybook components for better performance.\n- Created a meal review prompt that resulted in a 225% increase of customers reviewing meals.",
    jobTitle: "Frontend Developer",
    dateRange: "Mar 2021 - Oct 2021",
  },
  "Renaissance Electronic Services": {
    title: "Renaissance Electronic Services",
    img: RES,
    description:
      "At Renaissance Electronic Services, I serve as the sole frontend engineer, leveraging expertise to identify and resolve issues in existing solutions.\n- In this role, I lead the team throughout the process from brainstorming to user research, design, execution, and iteration.\n- I develop bug-free applications by implementing Typescript and conducting frontend unit tests using Jest and Enzyme to maintain the highest standards of quality.\n- I also maintain close collaboration with other developers on complex issues as well as institute new frontend technologies.",
    jobTitle: "UI/UX Engineer II",
    dateRange: "Oct 2017 - Mar 2021",
  },
  "App Academy": {
    title: "App Academy",
    img: AppAcademy,
    description:
      "At App Academy, I served as the Instructor for the Bootcamp Prep course in San Francisco where I taught a wide range of topics about JavaScript, answered queries, and assisted with supplementary explanations to students at top coding Bootcamp.\n- I also promoted best practices and developed a growth mindset amongst students.\n- I ensured that students gained an in-depth understanding of all the technical content of the curriculum.",
    jobTitle: "Instructor, Bootcamp Prep",
    dateRange: "May 2017 - Sept 2017",
  },
  "Shop.co": {
    title: "Shop.co",
    img: ShopCo,
    description:
      "At Shop.Co, I served as a Software Engineer Intern where I collaborated and coordinated with two designers and engineers aimed at improving customer experience.",
    jobTitle: "UI Engineer",
    dateRange: "Mar 2017 - Sept 2017",
  },
};

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.span`
  font-family: "Heathergreen";
  font-size: 50px;
  color: ${colors.black};
  line-height: 1.1;
`;

const DateRange = styled.span`
  font-family: "Inter Bold";
  font-size: 20px;
  color: ${colors.black};
`;

const BodyContainer = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    height: 25vw;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
  width: 100%;

  @media (max-width: 600px) {
    width: 25vw;
    margin-bottom: 0;
  }
`;

const DescriptionContainer = styled.div`
  padding-left: 24px;
  width: 75%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledDescription = styled.p`
  color: ${colors.black};
  font-size: 20px;
  margin-bottom: 16px;
`;

export default function ExperienceModal({
  isOpen,
  close,
  job,
}: ExperienceModalTypes) {
  if (job === null) return null;

  const { title, img, description, jobTitle, dateRange } =
    workExperienceObj[job];

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      title={
        <StyledTitle>
          <ModalTitle>
            {title} - {jobTitle}
          </ModalTitle>
          <DateRange>{dateRange}</DateRange>
        </StyledTitle>
      }
    >
      <BodyContainer>
        <ImageContainer>
          <Image src={img} />
        </ImageContainer>
        <DescriptionContainer>
          {description.split("\n").map((el, i) => (
            <StyledDescription key={i}>{el}</StyledDescription>
          ))}
        </DescriptionContainer>
      </BodyContainer>
    </Modal>
  );
}
