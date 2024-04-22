import { ReactElement } from "react";
import * as S from "./styles";



export default function Footer(): ReactElement {
  return (
    <S.FooterContainer data-testid="footer-container">
      <S.InnerContainer>
        <S.Text>All Rights Reserved 2024</S.Text>
        <S.Text>Santiago Torrens</S.Text>
      </S.InnerContainer>
    </S.FooterContainer>
  );
}
