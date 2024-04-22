import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as S from "./styles"
import { useAppDispatch } from "../../../hooks/store";
import { userLogin } from "../../../store/features/auth/authActions";
import { userLoginPayload } from "../../../types/auth";
import { FormErrors, FormStateType } from "../../../types/form";
import useForm from "../../../hooks/useForm";
import validateLoginForm from "../../../utils/validateForm";
import Card from "../../../components/Card";
import FormInput from "../../../components/FormInput";

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
      dispatch(userLogin({ email: formState.email, password: formState.password } as userLoginPayload))
        .then((resultAction) => {
          console.log("🚀 ~ dispatch ~ resultAction:", resultAction);
          toast.success("Login Successful!");
          resetForm();
          navigate("/users");
        })
        .catch((errorAction) => {
          console.log("🚀 ~ dispatch ~ errorAction:", errorAction);
          toast.error("There was an error");
        });
    }
  };

  return (
    <S.LoginPageContainer>
      <S.LoginFormContainer>
          <S.HeaderContainer>
            <h2 className="animatedHeadline">LOGIN</h2>
          </S.HeaderContainer>
          <Card classes="flex flex-col w-1/2 1-2/3 gap-8 p-5 py-20 mx-auto my-auto">
            <S.FormContainer onSubmit={submit} className="flex flex-col w-full max-w-md gap-2 mx-auto">
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

              <S.SubmitButton type="submit" className="w-full mt-4">
                Login
              </S.SubmitButton>
            </S.FormContainer>
            <S.HorizontalRule/>
          </Card>
      </S.LoginFormContainer>
    </S.LoginPageContainer>
  );
}

