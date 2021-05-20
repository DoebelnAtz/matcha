import React from 'react';
import {
	ResultCardContainer,
	ResultCardContentContainer,
	ResultCardName,
	ResultCardNameDiv,
} from './styles';
import Avatar from '../../../Components/Avatar';

const ResultCard = ({ profile }) => {
	return (
		<ResultCardContainer>
			<Avatar src={profile.pictures[0].url} />
			<ResultCardContentContainer>
				<ResultCardNameDiv>
					<ResultCardName>{profile.name}</ResultCardName>
				</ResultCardNameDiv>
			</ResultCardContentContainer>
		</ResultCardContainer>
	);
};

export default ResultCard;
