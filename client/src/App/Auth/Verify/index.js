import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../../Components/Form';
import api from '../../../Api';
import { useGet, useToken } from '../../../Hooks';
import ImageUpload from '../../Components/ImageUpload';
import ProfileImage from '../../Components/ProfileImage';
import { redirect } from '../../../Utils';

const Verify = () => {
	const uid = useParams().uid;
	console.log(uid);
	const [auth] = useToken();
	console.log(auth);
	const [formValue, setFormValue] = useState();
	const [user, setUser] = useGet('/users/me');
	console.log(user);
	const formConfig = [
		{
			element: 'dropdown',
			name: 'gender',
			placeholder: 'gender',
			values: ['male', 'female'],
			required: true,
			autoComplete: false,
			value: user?.gender,
		},
		{
			element: 'dropdown',
			name: 'preference',
			placeholder: 'name',
			values: ['male', 'female', 'both'],
			required: true,
			autoComplete: false,
			value: user?.preference,
		},
		{
			element: 'textarea',
			type: 'text',
			name: 'bio',
			placeholder: 'bio',
			required: true,
			autoComplete: false,
			value: user?.bio,
		},
	];
	console.log(formValue);
	const onSubmit = async () => {
		console.log('submitted');
		await api.post(`/auth/verify/${uid}`, {
			bio: formValue.bio,
			preference: formValue.preference.option,
			gender: formValue.gender.option,
		});
	};

	const renderImages = () => {
		if (user) {
			return user.pictures.map((pics, index) => {
				console.log(pics);
				return <ProfileImage key={index} src={pics.url} alt={'pic'} />;
			});
		}
	};

	return redirect(
		'/',
		!!auth.user.verified,
		<div>
			{formConfig && (
				<Form
					config={formConfig}
					onSubmit={onSubmit}
					state={formValue}
					setState={setFormValue}
				/>
			)}
			<ImageUpload />
			{renderImages()}
		</div>,
	);
};

export default Verify;
