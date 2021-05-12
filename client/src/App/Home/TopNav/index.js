import React, { useState } from 'react';
import { TopNavDiv, TopNavIconContainer } from './styles';

const TopNav = () => {
	const [state, setState] = useState(true);

	return (
		<TopNavDiv state={state}>
			<TopNavIconContainer />
		</TopNavDiv>
	);
};

export default TopNav;
