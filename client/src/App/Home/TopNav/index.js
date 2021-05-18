import React, { useState } from 'react';
import {
	TopNavDiv,
	TopNavIconContainer,
	TopNavLogo,
	TopNavLogoDiv,
} from './styles';

const TopNav = () => {
	const [state, setState] = useState(true);

	return (
		<TopNavDiv state={state}>
			<TopNavIconContainer>
				<TopNavLogoDiv>
					<TopNavLogo>matcha</TopNavLogo>
				</TopNavLogoDiv>
			</TopNavIconContainer>
		</TopNavDiv>
	);
};

export default TopNav;
