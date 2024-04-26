import { ReactElement } from "react";
import * as S from "./styles"
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../store/features/auth/authActions";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import userPlaceholder from '/user.png'
export default function AuthHeader(): ReactElement {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.auth.userInfo)
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logoutUser())
    toast.success("logged outSuccessful!");
    navigate("/usersApiIntegration/");
  };

  return (
    <S.HeaderContainer>
      <S.InnerContainer>
        <S.LogoLink to="/usersApiIntegration/users" >Cloud District</S.LogoLink>
        <S.logoutButton onClick={handleLogout} >Logout</S.logoutButton>
        <S.Image referrerPolicy="no-referrer" alt="User Image" src={userInfo?.imageUrl ? userInfo.imageUrl : userPlaceholder}></S.Image>
      </S.InnerContainer>
    </S.HeaderContainer>
  );
}

