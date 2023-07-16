import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import PersonalData from './pages/PersonalData';
import Root from './pages/Root';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/signin', element: <SignIn /> },
			{ path: '/signup', element: <SignUp /> },
			{ path: '/personaldata', element: <PersonalData /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
