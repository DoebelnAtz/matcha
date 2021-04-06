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
			return profile.pictures.map((pic) => {
				return <ProfilePhoto key={pic.url} picture={pic} />;
			});
		}
	};
	return (
		<ProfilePhotosDiv>
			<ProfilePhotosContainer>
				{!isLoading && renderPhotos()}
				<AddPhoto src={AddImageIcon} />
			</ProfilePhotosContainer>
		</ProfilePhotosDiv>
	);
};

export default ProfilePhotos;
