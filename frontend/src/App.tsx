import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RoutesMain from "./routes";

function App() {
	return (
		<>
			<RoutesMain />
			<ToastContainer
				position="top-right"
				autoClose={3500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	)
}

export default App;
