import { FormStateType } from "./form";
import { User } from "./user";

export interface LoginPayload extends FormStateType {
    email: string;
    password: string;
}

export interface loginResponse {
    success: boolean;
    user: User;
}

export interface googleLoginResponse {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    given_name: string;
    iat: number;
    iss: string;
    jti: string;
    name: string;
    nbf: number;
    picture: string;
    sub: string;
}

export interface googleResponse  {
  clientId: string,
  credential: string,
  select_by: string

}