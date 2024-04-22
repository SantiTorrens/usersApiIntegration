import { authUser } from "./auth";

export interface AuthState {
    loading: boolean;
    userInfo: authUser | undefined;
    userToken: undefined | string;
    error: unknown | null;
    success: false;
}
