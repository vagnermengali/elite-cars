import { Routes, Route, Navigate } from "react-router";
import AdvertiverProfile from "../pages/AdvertiverProfile";
import DetailAd from "../pages/DetailAd";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RedefinePasswordAccount from "../pages/RedefinePasswordAccount";
import Register from "../pages/Register";
import ProtectedRoutes from "./ProtectedRoutes/protectedRoutes";

const RoutesMain = () => {
	return (
		<Routes>
			<Route path="*" element={<Navigate to="/homepage" />} />
			<Route path="/homepage" element={<Home />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/redefine-password/:newPasswordCode" element={<RedefinePasswordAccount />} />
			<Route path="/profile/:id" element={<AdvertiverProfile />} />
			<Route path="/detail-ad/:id" element={<DetailAd />} />

			<Route element={<ProtectedRoutes />}>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Route>
		</Routes>
	);
};

export default RoutesMain;
