import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import { useGet } from '../../../../Hooks';
import {
	AddPhotoDiv,
	ProfilePhotosContainer,
	ProfilePhotosDiv,
} from './styles';
import AddImageIcon from '../../../../Assets/icons/add.svg';
import AddPhoto from './AddPhoto';
const ProfilePhotos = () => {
	const [profile, setProfile, isLoading] = useGet('/users/me');

	const renderPhotos = () => {
		if (profile) {
			return profile.pictures.map((pic, index) => {
				return (
					<AddPhoto key={pic.url} profile={profile} index={index} />
				);
			});
		}
	};
	return (
		<ProfilePhotosDiv>
			<ProfilePhotosContainer>
				{!isLoading && renderPhotos()}
				{!isLoading && (
					<AddPhoto
						setProfile={setProfile}
						profile={profile}
						index={profile.pictures.length}
					/>
				)}
			</ProfilePhotosContainer>
		</ProfilePhotosDiv>
	);
};

export default ProfilePhotos;
