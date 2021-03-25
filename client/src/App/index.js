import React, { useEffect, useRef, useState } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	useLocation,
	Redirect,
} from 'react-router-dom';
import { AppDiv } from './styles';
import SignUp from './Auth/Signup';
import LogIn from './Auth/Login';
import Home from './Home';
import { useAuth, useGet } from '../Hooks';
import Verify from './Auth/Verify';
function App() {
	return (
		<AppDiv id={'App'}>
			<Switch>
				<Route exact path={'/'}>
					<Home />
				</Route>
				<Route exact path={'/auth/login'}>
					<LogIn />
				</Route>
				<Route exact path={'/auth/signup'}>
					<SignUp />
				</Route>
				<Route exact path={'/auth/verify/:uid'}>
					<Verify />
				</Route>
			</Switch>
		</AppDiv>
	);
}

export default App;
