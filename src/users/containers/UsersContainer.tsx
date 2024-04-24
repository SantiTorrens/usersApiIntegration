import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getUsers } from "../../store/features/users/usersActions";
import UsersList from "../components/usersList";


export default function UsersContainer(): ReactElement {
  const usersStateData = useAppSelector((state) => state.users.data)
  const dispatch = useAppDispatch();
  const fetchUsers = async (page: number) => {
    dispatch(getUsers(page));
  }

  useEffect(() => {
    fetchUsers(1)
  }, [])
  return (
    <UsersList data={usersStateData} />

  )
} 