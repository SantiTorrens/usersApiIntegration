// import UsersTableContainer from "../../../components/Table/UsersTableContainer";
import StyledButton from "../../../components/Button/Index";
import { useAppDispatch } from "../../../hooks/store";
import { deleteUser, getUsers, fetchUserById, updatePagination, setSelectedUser } from "../../../store/features/users/usersActions";
import { UsersStateData } from "../../../types/apiUsers";
import * as S from "./styles"
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface UsersListProps {
  data: UsersStateData;
}
export default function UsersList({ data }: UsersListProps) {
  const dispatch = useAppDispatch();
  const columns: TableProps<(typeof data.users)[number]>['columns'] = [
    {
      dataIndex: 'id',
      key: 'id',
      title: 'ID',
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"]

    },
    {
      dataIndex: 'avatar',
      key: "avatar",
      title: 'Avatar',
      render: (url) => {
        return (
          <S.Image src={url} />
        )
      },

    },
    {
      dataIndex: 'first_name',
      key: 'first_name',
      title: 'First name',
    },
    {
      dataIndex: 'last_name',
      key: 'last_name',
      title: 'Last name',
    },
    {
      dataIndex: 'email',
      key: 'email',
      title: 'Email',
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (_, record) => (
        <S.ButtonsContainer>
          <StyledButton backgroundColor="red" handleAction={() => handleDelete(record.id)} text="Delete User" />
          <StyledButton backgroundColor="blue" text="Edit User" handleAction={() => handleEdit(record.id)} />
          <StyledButton text="View User" handleAction={() => handleView(record.id)} />
        </S.ButtonsContainer>
      )
    }
  ];

  const handleDelete = (userId: number): void => {
    dispatch(deleteUser(userId));
  }

  const handleEdit = (userId: number): void => {
    dispatch(setSelectedUser(userId))
  }
  
  const handleView = (userId: number): void => {
    dispatch(fetchUserById(userId))
  }


  const onPaginationChange = (page: number) => {
    if (!data.fetchedPages.includes(page)) {
      dispatch(getUsers(page))
    }
    dispatch(updatePagination(page))
  }

  return (
    <S.TableContainer>
      <Table
        dataSource={data.users}
        columns={columns}
        scroll={{ x: 400 }}
        pagination={{
          pageSize: 5,
          current: data.currentPage,
          onChange: onPaginationChange,
        }} />
    </S.TableContainer>

  )
}