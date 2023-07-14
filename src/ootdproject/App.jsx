import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root'

const router = createBrowserRouter([
	{
		path: '/',
        element: <Root />
        children: [
            { index: true, element: <Home /> },
            { path: 'signin', element: <SignIn />},

        ],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
