import React, { useRef, useState } from 'react';
import {
	ProfileAddTagButton,
	ProfileAddTagDiv,
	ProfileTagDiv,
	ProfileTagInput,
	ProfileTagLabel,
	ProfileTagsContainer,
	ProfileTagsDiv,
	ProfileTagTitleContainer,
} from './styles';
import EditIcon from '../../../../../Assets/icons/edit.svg';
import SearchSelect from '../../../../Components/SearchSelect';
import { useGet } from '../../../../../Hooks';
import api from '../../../../../Api';

const ProfileTags = ({ value, onChange }) => {
	const [addTagInput, setAddTagInput] = useState('');
	const inputRef = useRef(null);

	const [tags, setTags, isLoading] = useGet(`/tags/search?q=${addTagInput}`);

	const handleInputFocus = (e) => {
		e.preventDefault();
		inputRef.current.focus();
		inputRef.current.selectionStart = 0;
		inputRef.current.selectionEnd = value.length;
	};

	const renderTags = () => {
		if (value && value.length) {
			return value.map((tag) => {
				return <ProfileTagDiv>{`#${tag}`}</ProfileTagDiv>;
			});
		}
	};

	const handleAddTagInputChange = (newVal) => {
		setAddTagInput(newVal);
	};

	const handleAddTag = async (tagName) => {
		try {
			await api.put('/tags/tag', { value: tagName });
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<ProfileTagsDiv>
			<ProfileTagTitleContainer>
				<ProfileTagLabel onClick={handleInputFocus}>
					Tags
				</ProfileTagLabel>
			</ProfileTagTitleContainer>
			<ProfileAddTagDiv>
				<SearchSelect
					value={addTagInput}
					onChange={handleAddTagInputChange}
					onSelect={(value) => handleAddTag(value)}
					optionList={(tags || []).map((t) => t.value)}
				/>

				<ProfileAddTagButton onClick={() => handleAddTag(addTagInput)}>
					Add tag
				</ProfileAddTagButton>
			</ProfileAddTagDiv>
			<ProfileTagsContainer>{renderTags()}</ProfileTagsContainer>
		</ProfileTagsDiv>
	);
};

export default ProfileTags;
