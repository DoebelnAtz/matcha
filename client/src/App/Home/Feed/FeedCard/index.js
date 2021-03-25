import React from 'react';
import { FeedCardDiv, ProfilePictureDiv } from './styles';
import Picture from '../../../Components/Picture';

const FeedCard = ({ profile, page, setPage, index }) => {
	console.log(page, index, profile.name);
	return (
		<>
			<FeedCardDiv page={page} index={index}>
				<ProfilePictureDiv>
					<Picture pic={profile.pictures[0]} />
				</ProfilePictureDiv>
				{profile.name}
				<button onClick={() => setPage(page + 1)}>next</button>
			</FeedCardDiv>
		</>
	);
};

export default FeedCard;
