import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../Components/Form';
import api from '../../../Api';
import { setLocal } from '../../../Utils';
import { useToken } from '../../../Hooks';

const LogIn = () => {
	const [formValue, setFormValue] = useState();
	const history = useHistory();
	const [auth, setAuth] = useToken();

	const formConfig = [
		{
			element: 'input',
			type: 'email',
			name: 'email',
			placeholder: 'email',
			required: true,
			autoComplete: false,
		},
		{
			element: 'input',
			type: 'password',
			name: 'password',
			placeholder: 'password',
			required: true,
			autoComplete: false,
		},
	];
	const onSubmit = async () => {
		console.log('submitted');
		let resp = await api.post('/auth/login', {
			email: formValue.email,
			password: formValue.password,
		});
		setLocal('auth', resp);
		setAuth(resp);
		setTimeout(() => {
			history.push('/');
		}, 500);
	};
	return (
		<div>
			<Form
				config={formConfig}
				onSubmit={onSubmit}
				state={formValue}
				setState={setFormValue}
			/>
		</div>
	);
};

export default LogIn;
