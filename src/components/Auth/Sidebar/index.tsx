import { ReactElement } from "react";
import * as S from "./styles"
import { useAppSelector } from "../../../hooks/store";

export default function Sidebar(): ReactElement {
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  return (
    <S.SidebarContainer>
      <S.Title >Welcome to the Dashboard!
        </S.Title>
        <S.Title>{userInfo?.username}</S.Title>
      <div></div>
    </S.SidebarContainer>
  );
}
