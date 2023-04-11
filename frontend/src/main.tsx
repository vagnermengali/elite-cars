import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MotorShopProvider from "./context";
import Global from "./style/Global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
			<BrowserRouter>
				<MotorShopProvider>
					<Global />
					<App />
				</MotorShopProvider>
			</BrowserRouter>
	</React.StrictMode>
);
