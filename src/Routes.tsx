import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/tweet",
		element: <h1>Tweet</h1>,
	},
]);
