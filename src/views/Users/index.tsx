import { ReactElement } from "react";
import UsersContainer from "../../users/containers/UsersContainer";
import AuthLayout from "../../layouts/AuthLayout";


export default function Users(): ReactElement {
  return (
    <AuthLayout>
      <UsersContainer />
    </AuthLayout>
  )
}