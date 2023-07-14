import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PersonalData from "./pages/PersonalData";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "signIn", element: <SignIn /> },
			{ path: "signUp", element: <SignUp /> },
			{ path: "personalData", element: <PersonalData /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
