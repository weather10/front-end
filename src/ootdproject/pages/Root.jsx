import React from 'react';
import { Outlet } from 'react-router-dom';

function root() {
	return (
		<div>
			<Outlet />
		</div>
	);
}

export default root;
