import { ReactElement, ReactNode } from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import StyledButton from "../Button/Index";

interface ModalProps {
  children: ReactNode;
  handleCloseModal: () => void
  submitButton?: boolean;
  handleSubmit: () => void;
}
export default function Modal({ children, handleCloseModal, submitButton = false, handleSubmit }: ModalProps): ReactElement {
  return (
    <S.ModalContainer>
      <S.ModalOverlay onClick={handleCloseModal} />
      <S.ModalInnerContainer>
        <FontAwesomeIcon
          onClick={handleCloseModal}
          className="absolute text-2xl text-black cursor-pointer top-4 right-4"
          icon={faTimes}></FontAwesomeIcon>

        {children}
        <S.ButtonsContainer>
          {submitButton &&
            <StyledButton text="Submit" handleAction={handleSubmit} backgroundColor="blue" />
          }
          <StyledButton text="Close" handleAction={handleCloseModal} />
        </S.ButtonsContainer>
      </S.ModalInnerContainer>
    </S.ModalContainer>
  )
}