import React from "react";
import Avartar from "../components/Avartar";
import image from "../icon/basicAvatar.png";

function PersonalData() {
	return (
		<div>
			PersonalData
			<Avartar image={image} type='editAvatar' />
		</div>
	);
}

export default PersonalData;
