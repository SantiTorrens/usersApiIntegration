import { User } from "./user";

export interface AuthState {
    loading: boolean;
    userInfo: User | undefined;
    userToken: undefined | string;
    error: unknown | null;
    success: false;
}
