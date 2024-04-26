  import { ReactNode } from 'react'
  import { Navigate, useLocation } from "react-router-dom"
  import { RootState } from '../store/store';
import { useAppSelector } from '../hooks/store';

  interface ProtectedRouteProps {
    children: ReactNode
  }
  export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const userToken = useAppSelector((state: RootState) => state.auth.userToken)
    const location = useLocation();

    if (!userToken) {
      return <Navigate to="/usersApiIntegration/" state={{ from: location }} replace />
    }
    return children

  }
