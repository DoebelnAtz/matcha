import React from 'react';
import { ProfilePhotoDelete, ProfilePhotoDiv } from './styles';
import api from '../../../../../../Api';
import DeleteIconWhite from '../../../../../../Assets/icons/delete_white.svg';

const ProfilePhoto = ({ profile, picture, index, setProfile }) => {
	const handlePhotoDeletion = async (filename) => {
		console.log(filename, picture);
		if (window.confirm('Are you sure you want to delete this photo?')) {
			try {
				let res = await api.delete('/images/delete', {
					filename: filename,
				});
				setProfile({ ...profile, pictures: res.pics });
			} catch (e) {}
		}
	};

	return (
		<ProfilePhotoDiv src={picture.url}>
			<ProfilePhotoDelete
				onClick={() => handlePhotoDeletion(picture.filename)}
				src={DeleteIconWhite}
			/>
		</ProfilePhotoDiv>
	);
};

export default ProfilePhoto;
