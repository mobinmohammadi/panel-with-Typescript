import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  user: IUserRedux | undefined;
  redirectPath: string;
  children: React.ReactNode;
}

export const ProtectedRoute = ({
  user,
  redirectPath,
  children,
}: IProtectedRouteProps) => {
    
  if (!user?.isAuthentication) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
