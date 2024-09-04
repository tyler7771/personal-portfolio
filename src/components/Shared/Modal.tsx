import { ReactElement, useCallback, useEffect, useMemo, useRef } from "react";
import styled, { keyframes } from "styled-components";

import { ReactComponent as X } from "../../assets/images/X.svg";
import { colors } from "../../assets/cssHelpers";

type ModalProps = {
  children: ReactElement;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

const show = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalContainer = styled.dialog`
  &[open] {
    animation: ${show} 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  border: none;
  border-radius: 8px;
  width: 90vw;
  max-width: 1000px;
  box-shadow: 0px 24px 48px -8px rgba(0, 0, 0, 24%),
    0px 0px 8px 0px rgba(0, 0, 0, 8%);

  &:focus-visible {
    outline: none;
  }

  &::backdrop {
    background: #080b14;
    opacity: 0.6;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  flex: 0 1 auto;
  position: relative;
`;

const ModalTitle = styled.span`
  font-family: "Heathergreen";
  font-size: 50px;
  color: ${colors.black};
`;

const Button = styled.button`
  background: transparent;
  border: none;
  width: auto;
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px;
`;

const ModalBody = styled.div`
  padding: 16px;
  background: ${colors.white};
`;

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  // Eventlistener: trigger onclose when click outside
  const onClick = useCallback(
    ({ target }: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
      const { current: el } = modalRef;
      if (target === el) onClose();
    },
    [onClose]
  );

  // when open changes run open/close command
  useEffect(() => {
    const { current: el } = modalRef;
    if (el === null) return;

    isOpen ? el?.showModal() : el.close();
  }, [isOpen]);

  return (
    <ModalContainer ref={modalRef} onClose={onClose} onClick={onClick}>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <Button onClick={onClose}>
          <X />
        </Button>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
  );
}
