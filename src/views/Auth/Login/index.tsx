import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as S from "./styles"
import { useAppDispatch } from "../../../hooks/store";
import { googleLogin, userLogin } from "../../../store/features/auth/authActions";
import { LoginPayload, googleResponse } from "../../../types/auth";
import { FormErrors, FormStateType } from "../../../types/form";
import useForm from "../../../hooks/useForm";
import {validateLoginForm} from "../../../utils/validateForm";
import Card from "../../../components/Card";
import FormInput from "../../../components/FormInput";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

export default function Login(): ReactElement {
  const [formState, handleInput, resetForm] = useForm<FormStateType>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formErrors = validateLoginForm(formState);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      dispatch(userLogin({ email: formState.email, password: formState.password } as LoginPayload))
        .then((resultAction) => {
          console.log("🚀 ~ dispatch ~ resultAction:", resultAction);
          toast.success("Login Successful!");
          resetForm();
          navigate("/usersApiIntegration/users");
        })
        .catch((errorAction) => {
          console.log("🚀 ~ dispatch ~ errorAction:", errorAction);
          toast.error("There was an error");
        });
    }
  };

  const handleGoogleLogin = async (credentialResponse: googleResponse) => {
    if (credentialResponse) {
      dispatch(googleLogin(jwtDecode(credentialResponse.credential)));
      toast.success("Login Successful!");
      navigate("/usersApiIntegration/users");
    }
  }

  return (
    <S.LoginPageContainer>
      <S.LoginFormContainer>
        <S.HeaderContainer>
          <S.Headline className="animatedHeadline">LOGIN</S.Headline>
        </S.HeaderContainer>
        <Card classes="flex items-center flex-col lg:w-1/2 w-full md:w-2/3 gap-8 p-2 py-10 mx-auto my-auto">
          <S.FormContainer onSubmit={submit} >
            <FormInput
              label="Email"
              type="text"
              value={formState.email}
              name="email"
              handleInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
              error={errors.email}
            />
            <FormInput
              label="Password"
              type="password"
              value={formState.password}
              name="password"
              handleInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
              error={errors.password}
            />
            <S.SubmitButton type="submit" >
              Login
            </S.SubmitButton>
            <S.HorizontalRule />
            <GoogleLogin
              theme="filled_black"
              size="large"
              onSuccess={credentialResponse => {
                handleGoogleLogin(credentialResponse as googleResponse);
              }}
              onError={() => {
                toast.error('Login Failed')
              }}
            />
          </S.FormContainer>
        </Card>
      </S.LoginFormContainer>
    </S.LoginPageContainer>
  );
}

