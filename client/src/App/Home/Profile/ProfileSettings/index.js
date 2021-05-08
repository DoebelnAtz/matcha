import React from 'react'
import {
	ProfileEmailDiv,
	ProfileNameDiv, ProfileSettingsContainer,
	ProfileSettingsDiv,
} from './styles';
import { useGet } from '../../../../Hooks';
import ProfileInput from './ProfileInput';
const ProfileSettings = () => {

	const [profile, setProfile, isLoading] = useGet('/users/me');

	console.log(profile);

	const handleNameChange = (e) => {
		setProfile({...profile, name: e.target.value})
	}

	return (
		<ProfileSettingsDiv>
			{!isLoading &&
				<ProfileSettingsContainer>

			<ProfileNameDiv>

				<ProfileInput onChange={handleNameChange} value={profile.name}/>
			</ProfileNameDiv>
				<ProfileEmailDiv>

				</ProfileEmailDiv>
				</ProfileSettingsContainer>
			}
		</ProfileSettingsDiv>
	)
};

export default ProfileSettings