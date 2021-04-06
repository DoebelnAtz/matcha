import React from 'react';
import {
	BlurredBackgroundDiv,
	ProfileContainer,
	ProfileDiv,
	ProfilePageButton,
	ProfilePageContentContainer,
	ProfilePageLikeButton,
	ProfilePageNameDiv,
	ProfilePageNameSpan,
	ProfilePageOptionButtonDiv,
	ProfilePageOptionContainer,
	ProfilePagePhotosButton,
	ProfilePageSettingsButton,
	ProfilePictureContainer,
	ProfilePictureDiv,
	ProfilePictureImage,
} from './styles';
import BlurredBackground from '../../Components/BlurredBackground';
import { useGet } from '../../../Hooks';
import SettingsIcon from '../../../Assets/icons/settin_gear.svg';
import LikeIcon from '../../../Assets/icons/heart.svg';
import PhotosIcon from '../../../Assets/icons/camera.svg';

const Profile = () => {
	const [profile, setProfile, isLoading] = useGet('/users/me');
	console.log(profile);
	return (
		<ProfileDiv>
			<ProfileContainer>
				<ProfilePictureContainer id={'profile-picture-container'}>
					{!isLoading && (
						<ProfilePictureDiv id={'profile-picture-div'}>
							<BlurredBackgroundDiv>
								<BlurredBackground
									hash={profile.pictures[0].hash}
									height={'300px'}
									width={'300px'}
								/>
							</BlurredBackgroundDiv>
							<ProfilePictureImage
								id={'profile-pic'}
								src={profile.pictures[0].url}
							/>
						</ProfilePictureDiv>
					)}
				</ProfilePictureContainer>
				<ProfilePageContentContainer id={'content-container'}>
					<ProfilePageNameDiv>
						{!isLoading && (
							<ProfilePageNameSpan>
								{profile.name}
							</ProfilePageNameSpan>
						)}
					</ProfilePageNameDiv>
					<ProfilePageOptionContainer>
						<ProfilePageOptionButtonDiv>
							<ProfilePageButton src={LikeIcon} />
						</ProfilePageOptionButtonDiv>
						<ProfilePageOptionButtonDiv
							style={{ marginTop: '60px' }}
						>
							<ProfilePageButton src={SettingsIcon} />
						</ProfilePageOptionButtonDiv>
						<ProfilePageOptionButtonDiv>
							<ProfilePageButton src={PhotosIcon} />
						</ProfilePageOptionButtonDiv>
					</ProfilePageOptionContainer>
				</ProfilePageContentContainer>
			</ProfileContainer>
		</ProfileDiv>
	);
};

export default Profile;
