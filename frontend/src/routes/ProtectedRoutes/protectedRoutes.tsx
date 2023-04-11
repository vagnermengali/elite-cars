import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { MotorShopContext } from "../../context";


const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(MotorShopContext);

  return !isLoggedIn ? ( <Outlet/> 
  ) : (
  <Navigate to={"/homepage"} replace />);
}; 

export default ProtectedRoutes;