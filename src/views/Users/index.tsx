import { ReactElement } from "react";
import UsersContainer from "../../users/containers/UsersContainer";
import AuthLayout from "../../layouts/AuthLayout";
import EditModal from "../../users/components/editModal";
import { useAppSelector } from "../../hooks/store";
import CreateUserModal from "../../users/components/createModal";


export default function Users(): ReactElement {
  const selectedUser = useAppSelector((state) => state.users.selectedUser);
  const showEditModal = useAppSelector((state) => state.users.showEditModal);
  const showCreateModal = useAppSelector((state) => state.users.showCreateModal);

  return (
    <AuthLayout>
      <UsersContainer />
      {selectedUser &&
        <EditModal edit={showEditModal} user={selectedUser} />
      }
      {showCreateModal &&
        <CreateUserModal />
      }
    </AuthLayout>
  )
}