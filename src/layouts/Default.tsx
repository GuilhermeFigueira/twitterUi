import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/SidebarMenu";

export function Default() {
	return (
		<div className="mx-auto my-0 max-w-[1100px] grid grid-cols-[300px_1fr]">
			<Sidebar />
			<Outlet />
		</div>
	);
}
