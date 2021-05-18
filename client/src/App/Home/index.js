import React from 'react';
import { useGet, useRedirect } from '../../Hooks';
import { getLocalAuth } from '../../Utils';
import Feed from './Feed';
import { HomeBottomNav, HomeDiv, HomeTopNav, ViewContainerDiv } from './styles';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import BottomNav from './BottomNav';
import ProfilePhotos from './Profile/ProfilePhotos';
import TopNav from './TopNav';
import ProfileSettings from './Profile/ProfileSettings';
import Search from './Search';

const Home = () => {
	const [user, setUser] = useGet('/users/me');
	useRedirect(
		`/auth/verify/${getLocalAuth().user.u_id}`,
		!getLocalAuth().user.verified,
	);
	return (
		<HomeDiv>
			<ViewContainerDiv>
				<Switch>
					<Route exact path={'/'}>
						<Feed />
					</Route>
					<Route exact path={'/profile'}>
						<Profile />
					</Route>
					<Route exact path={'/search'}>
						<Search />
					</Route>
					<Route exact path={'/profile/photos'}>
						<ProfilePhotos />
					</Route>
					<Route exact path={'/profile/settings'}>
						<ProfileSettings />
					</Route>
				</Switch>
			</ViewContainerDiv>
			<HomeBottomNav id={'bottom-nav'}>
				<BottomNav />
			</HomeBottomNav>
			<HomeTopNav>
				<TopNav />
			</HomeTopNav>
		</HomeDiv>
	);
};

export default Home;
