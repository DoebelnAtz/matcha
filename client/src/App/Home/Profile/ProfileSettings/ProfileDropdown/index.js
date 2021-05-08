import React, { useRef } from 'react';
import {
	ProfileDropdownDiv,
	ProfileDropdownLabel,
	ProfileDropdownContainer,
	ProfileDropdownTitleContainer,
} from './styles';

import Dropdown from '../../../../Components/DropDown';
const ProfileDropdown = ({ value, onChange, name, options }) => {
	return (
		<ProfileDropdownDiv>
			<ProfileDropdownTitleContainer>
				<ProfileDropdownLabel>{name}</ProfileDropdownLabel>
			</ProfileDropdownTitleContainer>
			<ProfileDropdownContainer>
				<Dropdown
					state={value}
					onChange={onChange}
					optionList={options}
				/>
			</ProfileDropdownContainer>
		</ProfileDropdownDiv>
	);
};

export default ProfileDropdown;
