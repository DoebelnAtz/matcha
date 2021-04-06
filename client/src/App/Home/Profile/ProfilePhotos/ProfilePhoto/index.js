import React from 'react';
import { ProfilePhotoDiv } from './styles';

const ProfilePhoto = ({ picture }) => {
	return <ProfilePhotoDiv src={picture.url} />;
};

export default ProfilePhoto;
