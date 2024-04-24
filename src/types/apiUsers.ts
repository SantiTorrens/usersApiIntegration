export interface UsersState {
    loading: boolean;
    fetched: boolean;
    data: UsersStateData;
    error: unknown | null;
    selectedUser: null | apiUser;
    showEditModal: boolean;
    showCreateModal: boolean;
    success: boolean;
}

export interface UsersStateData {
    currentPage: number;
    perPage: number;
    total: number;
    totalPages: number;
    fetchedPages: number[];
    users: apiUser[];
}

export interface createUserPayload {
  email: string;
  first_name: string;
  last_name: string;
  job?: string;
}
export interface apiUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    job?: string;
    avatar: string;
}

export interface UsersData {
    page: number;
    currentPage: number;
    perPage: number;
    total: number;
    totalPages: number;
    users: apiUser[];
}

export interface UsersApiResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: apiUser[];
    support: {
        url: string;
        text: string;
    };
}
