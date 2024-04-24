import { ReactElement } from "react";
import UsersContainer from "../../users/containers/UsersContainer";
import AuthLayout from "../../layouts/AuthLayout";
import EditModal from "../../users/components/editModal";
import { useAppSelector } from "../../hooks/store";


export default function Users(): ReactElement {
  const selectedUser = useAppSelector((state) => state.users.selectedUser);
  const showEditModal = useAppSelector((state) => state.users.showEditModal);
  return (
    <AuthLayout>
      <UsersContainer />
      {selectedUser  &&
      <EditModal edit={showEditModal} user={selectedUser} />
      }
    </AuthLayout>
  )
}