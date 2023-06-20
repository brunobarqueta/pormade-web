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
import Stores from "./routes/Stores.tsx";
import Faq from "./routes/Faq.tsx";

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
		element: <Prizes />,
	},
	{
		path: "/prize/:id",
		element: <Prize />,
	},
	{
		path: "/stores",
		element: <Stores />,
	},
	{
		path: "/extracts",
		element: <Extracts />,
	},
	{
		path: "/faq",
		element: <Faq />,
	},
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
