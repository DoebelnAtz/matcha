import React from 'react';
import { useGet, useRedirect } from '../../Hooks';
import { getLocalAuth } from '../../Utils';
import Feed from './Feed';
import { HomeDiv } from './styles';

const Home = () => {
	const [user, setUser] = useGet('/users/me');
	useRedirect(
		`/auth/verify/${getLocalAuth().user.u_id}`,
		!getLocalAuth().user.verified,
	);
	return (
		<HomeDiv>
			<Feed />
		</HomeDiv>
	);
};

export default Home;
