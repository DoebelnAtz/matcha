import React from 'react';
import { ProfilePhotoDelete, ProfilePhotoDiv } from './styles';
import api from '../../../../../Api';
import DeleteIconWhite from '../../../../../Assets/icons/delete_white.svg';

const ProfilePhoto = ({ profile, index, setProfile }) => {
	const handlePhotoDeletion = async (filename) => {
		console.log(filename, profile.pictures[index]);
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
		<ProfilePhotoDiv src={profile.pictures[index]?.url}>
			<ProfilePhotoDelete
				onClick={() =>
					handlePhotoDeletion(profile.pictures[index].filename)
				}
				src={DeleteIconWhite}
			/>
		</ProfilePhotoDiv>
	);
};

export default ProfilePhoto;
