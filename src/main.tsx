import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar/SidebarMenu";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<div className="mx-auto my-0 max-w-[1100px] grid grid-cols-[300px_1fr]">
			<Sidebar />
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
