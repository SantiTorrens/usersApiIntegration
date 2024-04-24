import { ReactElement, useState } from "react";
import * as S from "./styles";
import Modal from "../../../components/Modal";
import { createUserAction, toggleCreateModal } from "../../../store/features/users/usersActions";
import { useAppDispatch } from "../../../hooks/store";
import FormInput from "../../../components/FormInput";
import useForm from "../../../hooks/useForm";
import { CreateUserFormErrors, FormStateType } from "../../../types/form";
import { createUserPayload } from "../../../types/apiUsers";
import { validateCreateUserForm } from "../../../utils/validateForm";

export default function CreateUserModal(): ReactElement {
  const dispatch = useAppDispatch();
  const [formState, handleInput] = useForm<FormStateType>({
    first_name: "",
    last_name: "",
    job: "",
    email: "",
  });
  const [errors, setErrors] = useState<CreateUserFormErrors>({});


  const submit = () => {
    const formErrors = validateCreateUserForm(formState);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const newUserPayload: createUserPayload = {
        first_name: formState.first_name as string,
        last_name: formState.last_name as string,
        job: formState.job as string,
        email: formState.email as string
      }
      dispatch(createUserAction(newUserPayload))
    }
  }

  return (
    <Modal handleCloseModal={() => dispatch(toggleCreateModal())} submitButton={true} handleSubmit={() => submit()}>
      <S.Container>
        <S.ModalTitle>
          Create New User
        </S.ModalTitle>
        <S.FormContainer onSubmit={submit} >

          <FormInput
            label="First Name"
            value={formState.first_name}
            name="first_name"
            type="text"
            error={errors.first_name}
            handleInput={handleInput}
          />
          <FormInput
            label="Last Name"
            value={formState.last_name}
            name="last_name"
            type="text"
            handleInput={handleInput}
          />
          <FormInput
            label="Email"
            value={formState.email}
            name="email"
            type="email"
            handleInput={handleInput}
          />
          <FormInput
            label="Job"
            value={formState.job}
            name="job"
            error={errors.job}
            type="job"
            handleInput={handleInput}
          />
        </S.FormContainer>
      </S.Container>
    </Modal>
  )
}