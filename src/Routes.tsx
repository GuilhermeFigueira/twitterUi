import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Status from "./pages/Status";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Default />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/status",
				element: <Status />,
			},
			{
				path: "/*",
				element: <Home />,
			},
		],
	},
]);
