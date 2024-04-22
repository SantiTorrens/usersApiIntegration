import { ReactElement } from "react";
import * as S from "./styles"
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { logoutUser } from "../../store/features/auth/authActions";
import { RootState } from "../../store/store";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Header(): ReactElement {
  const dispatch = useAppDispatch();
  const userToken = useAppSelector((state: RootState) => state.auth.userToken)
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logoutUser())
    toast.success("logged outSuccessful!");
    navigate("/");
  };

  return (
    <S.HeaderContainer>
      <S.InnerContainer>
        <S.LogoLink to={userToken ? '/users' : '/' }>Cloud District</S.LogoLink>
        {userToken && <S.logoutButton onClick={handleLogout} >Logout</S.logoutButton>}
      </S.InnerContainer>
    </S.HeaderContainer>
  );
}

