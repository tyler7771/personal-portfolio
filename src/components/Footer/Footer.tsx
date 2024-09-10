import { FormEvent, FormEventHandler, useRef } from "react";
import { serviceId, templateId, userId } from "../../assets/emailParams";
import styled, { css } from "styled-components";

import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { colors } from "../../assets/cssHelpers";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

const FooterContainer = styled.section`
  width: 100%;
  height: 540px;
  background-color: ${colors.black};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 799px) {
    height: 80vw;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    height: 60vh;
  }

  @media (max-width: 500px) {
    height: 75vh;
  }

  @media (max-width: 400px) {
    height: 100vh;
  }
`;

const FormContainer = styled.div`
  width: 50vw;

  @media (max-width: 1199px) {
    width: 60vw;
  }

  @media (max-width: 799px) {
    margin-top: 32px;
    width: 85vw;
  }
`;

const StyledLogo = styled(Logo)`
  height: 135px;
  margin: 0 10vw;

  @media (max-width: 1199px) {
    margin: 0 5vw;
  }

  @media (max-width: 799px) {
    height: unset;
    margin: 5vw auto;
  }
`;

const Text = styled.p`
  font-size: 30px;
  color: ${colors.yellow};
  margin: 0 0 16px;
`;

const StyledForm = styled.form`
  width: 100%;
  grid-gap: 8px 1vw;
  display: grid;
  grid-template-columns: min-content auto;

  div {
    display: none;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex !important;
  justify-content: flex-end;
`;

const Label = styled.label<{ $marginTop?: string }>`
  color: ${colors.yellow};
  font-size: 22px;

  ${({ $marginTop }) =>
    $marginTop &&
    css`
      margin-top: ${$marginTop};
    `}
`;

const StyledInput = styled.input`
  width: 100%;
  background: ${colors.black};
  border: none;
  border-bottom: 1px solid ${colors.yellow};
  color: ${colors.yellow};
  font-size: 22px;
  align-self: flex-end;

  &:focus-visible {
    outline: none;
  }
`;

const StyledTextArea = styled.textarea`
  font-size: 22px;
  width: 100%;
  background-color: ${colors.black};
  color: ${colors.yellow};
  line-height: 4ch;
  border: none;
  background-image: linear-gradient(
    transparent,
    transparent calc(4ch - 2px),
    ${colors.yellow} 1px
  );
  background-size: 100% 4ch;
  height: 200px;
  resize: none;
  outline: none;
`;

const Button = styled.button`
  width: 25%;
  border: none;
  background-color: ${colors.yellow};
  border-radius: 50px;
  font-size: 22px;
  color: ${colors.black};
  cursor: pointer;
  padding: 5px 15px;

  &:hover {
    filter: brightness(90%);
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

export default function Footer() {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();

  const sendEmail: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (form.current === null) return;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: userId,
      })
      .then(
        () => {
          form?.current?.reset();
          toast({
            title: "Email sent!",
            status: "success",
            description: "I'll get back to you as soon as I can!",
            isClosable: true,
          });
        },
        (error) => {
          toast({
            title: "Ope! Something went wrong",
            status: "error",
            description: error.text,
            isClosable: true,
          });
        }
      );
  };

  return (
    <FooterContainer id="footer">
      <FormContainer>
        <Text>GET IN TOUCH</Text>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <Label htmlFor="from_email">EMAIL</Label>
          <StyledInput name="from_email" />
          <Label htmlFor="message" $marginTop="16px">
            MESSAGE
          </Label>
          <StyledTextArea name="message" />
          <span />
          <ButtonContainer>
            <Button>SEND</Button>
          </ButtonContainer>
        </StyledForm>
      </FormContainer>
      <StyledLogo />
    </FooterContainer>
  );
}
