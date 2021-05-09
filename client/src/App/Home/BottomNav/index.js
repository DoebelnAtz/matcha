import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	BottomNavDiv,
	BottomNavHomeIcon,
	BottomNavHomeIconContainer,
	BottomNavIcon,
	BottomNavIconContainer,
	BottomNavIconDiv,
	BottomNavProfileIcon,
	BottomNavSearchIcon,
} from './styles';
import UserIcon from '../../../Assets/icons/user.svg';
import HomeIcon from '../../../Assets/icons/home.svg';
import SettingsIcon from '../../../Assets/icons/settin_gear.svg';

import SearchIcon from '../../../Assets/icons/search.svg';
import NeomorphicButton from '../../Components/NeomorphicButton';
import { color } from '../../../Styles';

const BottomNav = () => {
	const history = useHistory();

	const handleNavClick = (to) => {
		history.push(to);
		setLocation(to);
	};

	const [location, setLocation] = useState(history.location.pathname);

	console.log(history.location.pathname);
	return (
		<BottomNavDiv id={'nav'}>
			<BottomNavIconContainer>
				<BottomNavProfileIcon
					onClick={() => handleNavClick('/profile')}
					active={location === '/profile'}
					src={UserIcon}
				/>
				<BottomNavHomeIconContainer>
					<NeomorphicButton
						height={'40px'}
						width={'40px'}
						style={{ backgroundColor: color.primary }}
						onClick={() => handleNavClick('/')}
					>
						<BottomNavHomeIcon
							active={location === '/'}
							src={HomeIcon}
						/>
					</NeomorphicButton>
				</BottomNavHomeIconContainer>
				<BottomNavSearchIcon
					onClick={() => handleNavClick('/search')}
					active={location === '/search'}
					src={SearchIcon}
				/>
			</BottomNavIconContainer>
		</BottomNavDiv>
	);
};

export default BottomNav;
