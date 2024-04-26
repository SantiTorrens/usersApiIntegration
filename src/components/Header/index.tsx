import { ReactElement } from "react";
import * as S from "./styles"
import { useAppSelector } from "../../hooks/store";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

export default function Header(): ReactElement {
  const userToken = useAppSelector((state: RootState) => state.auth.userToken)

  return (
    <S.HeaderContainer>
      <S.InnerContainer>
        <S.LogoLink to={userToken ? '/usersApiIntegration/users' : '/'}>Technical Test</S.LogoLink>
        {userToken && <Link data-testid="link-redirection" to="/usersApiIntegration/"><S.DashboardButton  >Dashboard</S.DashboardButton></Link>}
      </S.InnerContainer>
    </S.HeaderContainer>
  );
}

