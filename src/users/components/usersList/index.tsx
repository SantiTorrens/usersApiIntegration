// import UsersTableContainer from "../../../components/Table/UsersTableContainer";
import { useAppDispatch } from "../../../hooks/store";
import { deleteUser, getUsers } from "../../../store/features/users/usersActions";
import { UsersStateData } from "../../../types/apiUsers";
import * as S from "./styles"
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';


interface UsersListProps {
  data: UsersStateData;
}
export default function UsersList({ data }: UsersListProps) {
  const dispatch = useAppDispatch();
  const columns: GridColDef<(typeof data.users)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return (
          <S.Image src={params.value} />
        )
      }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 250,
      editable: false,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 250,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 250,
      editable: false,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 250,
      renderCell: (params) => {
        return (
          <S.ButtonsContainer>
            <S.DeleteButton onClick={() => handleDelete(params.id as number)}>Delete User</S.DeleteButton>
            <S.EditButton onClick={() => handleEdit(params.id as number)}>Edit User</S.EditButton>
          </S.ButtonsContainer>
        )
      }

    }
  ];

  const handleDelete = (userId: number) => {
    dispatch(deleteUser(userId));
  }

  const handleEdit = (userId: number) => {
    console.log("🚀 ~ handleEdit ~ userId:", userId)

  }
  const onPaginationChange = (paginationData: GridPaginationModel) => {
    if (!data.fetchedPages.includes(paginationData.page)) {
      dispatch(getUsers(paginationData.page))
    }
  }

  return (
    <DataGrid
      rows={data?.users}
      columns={columns}
      disableRowSelectionOnClick
      rowCount={data.total}
      rowHeight={100}
      paginationMode="server"
      paginationModel={{ pageSize: 5, page: data.currentPage }}
      paginationMeta={{ hasNextPage: data.currentPage < data.totalPages }}
      onPaginationModelChange={(data) => onPaginationChange(data)}
      pageSizeOptions={[5]}
    />
  )
}