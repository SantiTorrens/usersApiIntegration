import { CreateUserFormErrors, FormErrors, FormStateType } from "../types/form";

export function validateLoginForm(
    formState: FormStateType
): FormErrors {
    const errors: FormErrors = {};

    // Validate email
    if (!formState.email || !/\S+@\S+\.\S+/.test(formState.email as string)) {
        errors.email = "Invalid email address";
    }

    // Validate password
    const password = formState.password as string;
    if (!password || password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    }

    if (
        formState.passwordConfirmation &&
        password !== formState.passwordConfirmation || formState.passwordConfirmation === '' 
    ) {
        errors.passwordConfirmation = "Passwords do not match";
    }

    return errors;
}

export function validateCreateUserForm(
    formState: FormStateType
): CreateUserFormErrors {
    const errors: CreateUserFormErrors = {};

    if (!formState.first_name) {
        errors.first_name = "First Name is required";
    }

    if (!formState.job) {
        errors.job = "Job is required";
    }

    return errors;
}
