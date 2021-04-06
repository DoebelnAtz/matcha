import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	BottomNavDiv,
	BottomNavIcon,
	BottomNavIconContainer,
	BottomNavIconDiv,
} from './styles';
import UserIcon from '../../../Assets/icons/user.svg';
import HomeIcon from '../../../Assets/icons/home.svg';
import SettingsIcon from '../../../Assets/icons/settin_gear.svg';

import SearchIcon from '../../../Assets/icons/search.svg';

const BottomNav = () => {
	const history = useHistory();

	const handleNavClick = (to) => {
		history.push(to);
		setLocation(to);
	};

	const [location, setLocation] = useState(history.location.pathname);

	console.log(history.location.pathname);
	return (
		<BottomNavDiv>
			<BottomNavIconContainer>
				<BottomNavIconDiv
					onClick={() => handleNavClick('/profile')}
					active={location === '/profile'}
				>
					<BottomNavIcon src={UserIcon} />
				</BottomNavIconDiv>
				<BottomNavIconDiv
					onClick={() => handleNavClick('/')}
					active={location === '/'}
				>
					<BottomNavIcon src={HomeIcon} />
				</BottomNavIconDiv>
				<BottomNavIconDiv
					onClick={() => handleNavClick('/search')}
					active={location === '/search'}
				>
					<BottomNavIcon src={SearchIcon} />
				</BottomNavIconDiv>
			</BottomNavIconContainer>
		</BottomNavDiv>
	);
};

export default BottomNav;
