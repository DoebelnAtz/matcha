import React, { useEffect } from 'react';
import {
	ProfileBioDiv,
	ProfileDoBDiv,
	ProfileEmailDiv,
	ProfileGenderDiv,
	ProfileLastnameDiv,
	ProfileNameDiv,
	ProfilePreferenceDiv,
	ProfileSettingsButtonContainer,
	ProfileSettingsContainer,
	ProfileSettingsDiscardButton,
	ProfileSettingsDiv,
	ProfileSettingsSaveButton,
	ProfileTagsDiv,
} from './styles';
import { useGet } from '../../../../Hooks';
import ProfileInput from './ProfileInput';
import ProfileTextarea from './ProfileTextarea';
import ProfileDoB from './ProfileDoB';
import ProfileDropdown from './ProfileDropdown';
import api from '../../../../Api';
import LoadingButton from '../../../Components/LoadingButton';
import { useHistory } from 'react-router-dom';
import ProfileTags from './ProfileTags';

const ProfileSettings = () => {
	const [profile, setProfile, isLoading] = useGet('/users/me');

	console.log(profile);

	const history = useHistory();
	/*
	every time the profile changes we send a PUT update, a bit inefficient
	since it updates the whole profile, could be improved by doing a smarter
	PATCH with only updated parts being sent.
	* */

	const handleNameChange = (e) => {
		setProfile({ ...profile, name: e.target.value });
	};

	const handleLastnameChange = (e) => {
		let value = e.target.value;
		setProfile({ ...profile, lastname: value });
	};

	const handleEmailChange = (e) => {
		let value = e.target.value;
		setProfile({ ...profile, email: value });
	};

	const handleBioChange = (e) => {
		let value = e.target.value;
		setProfile({ ...profile, bio: value });
	};

	const handleDoBChange = (newDate) => {
		setProfile({ ...profile, dob: newDate });
	};

	const handleGenderChange = (newGender) => {
		setProfile({ ...profile, gender: newGender.option });
	};

	const handlePreferenceChange = (newPreference) => {
		setProfile({ ...profile, preference: newPreference.option });
	};

	const updateProfile = async () => {
		try {
			await api.put('/users/me', {
				profile,
			});
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	};

	return (
		<ProfileSettingsDiv>
			{!isLoading && (
				<ProfileSettingsContainer>
					<ProfileNameDiv>
						<ProfileInput
							name={'First name'}
							onChange={handleNameChange}
							value={profile.name}
						/>
					</ProfileNameDiv>
					<ProfileLastnameDiv>
						<ProfileInput
							name={'Last name'}
							onChange={handleLastnameChange}
							value={profile.lastname}
						/>
					</ProfileLastnameDiv>
					<ProfileEmailDiv>
						<ProfileInput
							name={'Email'}
							onChange={handleEmailChange}
							value={profile.email}
						/>
					</ProfileEmailDiv>
					<ProfileDoBDiv>
						<ProfileDoB
							name={'Date of birth'}
							onChange={handleDoBChange}
							value={new Date(profile.dob)}
						/>
					</ProfileDoBDiv>
					<ProfileGenderDiv>
						<ProfileDropdown
							name={'Gender'}
							value={{
								option: profile.gender,
								id: profile.gender === 'male' ? 1 : 2,
							}}
							onChange={handleGenderChange}
							options={[
								{ option: 'male', id: 1 },
								{ option: 'female', id: 2 },
							]}
						/>
					</ProfileGenderDiv>
					<ProfilePreferenceDiv>
						<ProfileDropdown
							name={'Preference'}
							value={{
								option: profile.preference,
								id:
									profile.preference === 'male'
										? 1
										: profile.preference === 'female'
										? 2
										: 3,
							}}
							onChange={handlePreferenceChange}
							options={[
								{ option: 'male', id: 1 },
								{ option: 'female', id: 2 },
								{ option: 'both', id: 3 },
							]}
						/>
					</ProfilePreferenceDiv>
					<ProfileBioDiv>
						<ProfileTextarea
							name={'Bio'}
							onChange={handleBioChange}
							value={profile.bio}
						/>
					</ProfileBioDiv>
					<ProfileTagsDiv>
						<ProfileTags value={profile.tags} />
					</ProfileTagsDiv>
					<ProfileSettingsButtonContainer>
						<ProfileSettingsDiscardButton
							onClick={() => history.push('/profile')}
						>
							Discard
						</ProfileSettingsDiscardButton>
						<LoadingButton onClick={updateProfile}>
							Save
						</LoadingButton>
					</ProfileSettingsButtonContainer>
				</ProfileSettingsContainer>
			)}
		</ProfileSettingsDiv>
	);
};

export default ProfileSettings;
