import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Contexts/AuthContext';
import { DarkModeContextProvider } from './Contexts/DarkModeContext';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<DarkModeContextProvider>
				<AuthContextProvider>
					<App />
				</AuthContextProvider>
			</DarkModeContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
