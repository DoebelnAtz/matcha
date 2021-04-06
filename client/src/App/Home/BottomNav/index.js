import React from 'react';
import { useHistory } from 'react-router-dom';
import { BottomNavDiv, BottomNavIcon, BottomNavIconContainer } from './styles';
import UserIcon from '../../../Assets/icons/user.svg';
import HomeIcon from '../../../Assets/icons/home.svg';
import SettingsIcon from '../../../Assets/icons/settin_gear.svg';

import SearchIcon from '../../../Assets/icons/search.svg';

const BottomNav = () => {
	const history = useHistory();

	const handleNavClick = (to) => {
		history.push(to);
	};
	return (
		<BottomNavDiv>
			<BottomNavIconContainer>
				<BottomNavIcon
					src={UserIcon}
					onClick={() => handleNavClick('/profile')}
				/>
				<BottomNavIcon
					src={HomeIcon}
					onClick={() => handleNavClick('/')}
				/>
				<BottomNavIcon
					src={SearchIcon}
					onClick={() => handleNavClick('/search')}
				/>
			</BottomNavIconContainer>
		</BottomNavDiv>
	);
};

export default BottomNav;
