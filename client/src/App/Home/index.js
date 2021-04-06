import React from 'react';
import { useGet, useRedirect } from '../../Hooks';
import { getLocalAuth } from '../../Utils';
import Feed from './Feed';
import {
	HomeBottomNav,
	HomeDiv,
	HomeTopNav,
	HomeContainerDiv,
	ViewContainerDiv,
} from './styles';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';

const Home = () => {
	const [user, setUser] = useGet('/users/me');
	useRedirect(
		`/auth/verify/${getLocalAuth().user.u_id}`,
		!getLocalAuth().user.verified,
	);
	return (
		<HomeDiv>
			<HomeContainerDiv>
				<ViewContainerDiv>
					<Switch>
						<Route exact path={'/'}>
							<Feed />
						</Route>
						<Route exact path={'/profile'}>
							<Profile />
						</Route>
					</Switch>
				</ViewContainerDiv>
				<HomeTopNav />
				<HomeBottomNav />
			</HomeContainerDiv>
		</HomeDiv>
	);
};

export default Home;
