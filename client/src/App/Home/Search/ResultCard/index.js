import React from 'react';
import {
	ResultCardContainer,
	ResultCardName,
	ResultCardNameDiv,
	ResultCardPicture,
} from './styles';
import Avatar from '../../../Components/Avatar';

const ResultCard = ({ profile }) => {
	return (
		<ResultCardContainer>
			<Avatar src={profile.pictures[0].url} />
			<ResultCardNameDiv>
				<ResultCardName>{profile.name}</ResultCardName>
			</ResultCardNameDiv>
		</ResultCardContainer>
	);
};

export default ResultCard;
