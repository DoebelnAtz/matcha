import React, { useRef } from 'react';
import {
	ProfileDobDiv,
	ProfileDobLabel,
	ProfileDobTitleContainer,
} from './styles';
import EditIcon from '../../../../../Assets/icons/edit.svg';
import DoBPicker from '../../../../Components/DoBPicker';
const ProfileDoB = ({ value, onChange, name }) => {
	return (
		<ProfileDobDiv>
			<ProfileDobTitleContainer>
				<ProfileDobLabel>{name}</ProfileDobLabel>
			</ProfileDobTitleContainer>
			<DoBPicker date={value} onChange={onChange} />
		</ProfileDobDiv>
	);
};

export default ProfileDoB;
