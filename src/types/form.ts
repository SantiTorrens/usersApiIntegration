export type InitialStateType = {
    [key: string]: string | boolean | number;
};
export type FormErrors = {
    email?: string;
    password?: string;
    passwordConfirmation?: string;
};
export type FormStateType = {
    [key: string]: string | boolean | number;
};

export type InputEventType = React.ChangeEvent<HTMLInputElement>;

export type ResetFunctionType = () => void;

export type UseFormHookType = [
    FormStateType,
    (e: InputEventType) => void,
    ResetFunctionType
];

export type CreateUserFormErrors = {
    first_name?: string;
    job?: string;
};
