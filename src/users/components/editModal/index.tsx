import { ReactElement } from "react";
import * as S from "./styles";
import Modal from "../../../components/Modal";
import { apiUser } from "../../../types/apiUsers";
import { unSetSelectedUser, updateUserAction } from "../../../store/features/users/usersActions";
import { useAppDispatch } from "../../../hooks/store";
import FormInput from "../../../components/FormInput";
import useForm from "../../../hooks/useForm";
import { FormStateType } from "../../../types/form";

interface EditUserModalProps {
  user: apiUser;
  edit?: boolean;
}

export default function EditUserModal({ user, edit }: EditUserModalProps): ReactElement {
  const dispatch = useAppDispatch();
  const [formState, handleInput] = useForm<FormStateType>({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  });


  const onCloseModal = () => {
    dispatch(unSetSelectedUser())
  }
  const submit = () => {
    dispatch(updateUserAction({
      ...user,
      ...formState
    }))
  }
  return (
    <Modal handleCloseModal={() => onCloseModal()} submitButton={edit} handleSubmit={() => submit()}>
      <S.Container>
        {
          edit ?
            <S.ModalTitle>
              Edit {user.first_name} {user.last_name} info
            </S.ModalTitle>
            :
            <S.ModalTitle>
              Fetched user from API {user.first_name} {user.last_name}
            </S.ModalTitle>
        }
        <S.FormContainer onSubmit={submit} >

          <FormInput
            disabled={!edit}
            label="First Name"
            value={formState.first_name}
            name="first_name"
            type="text"
            handleInput={handleInput}
          />
          <FormInput
            disabled={!edit}
            label="Last Name"
            value={formState.last_name}
            name="last_name"
            type="text"
            handleInput={handleInput}
          />
          <FormInput
            disabled={true}
            label="Email"
            value={user.email}
            name="email"
            type="email"
            handleInput={handleInput}
          />
        </S.FormContainer>
      </S.Container>
    </Modal>
  )
}