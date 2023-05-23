import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Prizes from "./routes/Prizes.tsx";
import Login from "./routes/Login.tsx";
import Prize from "./routes/Prize.tsx";
import Extracts from "./routes/Extracts.tsx";
import UserProvider from "./contexts/userContext.tsx";
import PrizesProvider from "./contexts/prizesContext.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/prizes",
		element: <Prizes />
	},
	{
		path: "/prize/:id",
		element: <Prize />
	},
	{
		path: "/extracts",
		element: <Extracts />,
	},
	// {
	//   path: '/stores',
	//   element: <Stores />
	// },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<UserProvider>
			<PrizesProvider>
				<RouterProvider router={router} />
			</PrizesProvider>
		</UserProvider>
	</React.StrictMode>
);
