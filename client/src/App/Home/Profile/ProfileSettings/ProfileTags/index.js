import React, { useRef, useState } from 'react';
import {
	DeleteTagDiv,
	ProfileAddTagButton,
	ProfileAddTagDiv,
	ProfileTagDiv,
	ProfileTagInput,
	ProfileTagLabel,
	ProfileTagsContainer,
	ProfileTagsDiv,
	ProfileTagTitleContainer,
} from './styles';
import DeleteIcon from '../../../../../Assets/icons/delete_white.svg';
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

	const handleAddTagInputChange = (newVal) => {
		setAddTagInput(newVal);
	};

	const handleAddTag = async (tagName) => {
		try {
			let resp = await api.put('/tags/add', { value: tagName });
			console.log(resp);
			onChange([tagName, ...(value || [])]);
		} catch (e) {
			console.log(e);
		}
	};

	const handleRemoveTag = async (tagName) => {
		try {
			await api.delete('/tags/remove', {
				value: tagName,
			});
			console.log(
				tags,
				tags.filter((tag) => tag !== tagName),
			);
			onChange(value.filter((tag) => tag !== tagName));
		} catch (e) {
			console.log(e);
		}
	};

	const renderTags = () => {
		if (value && value.length) {
			return value.map((tag, index) => {
				return (
					<ProfileTagDiv key={index}>
						{`#${tag}`}
						<DeleteTagDiv
							onClick={() => handleRemoveTag(tag)}
							src={DeleteIcon}
						/>
					</ProfileTagDiv>
				);
			});
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
					optionList={(tags || [])
						.map((t) => t.value)
						.filter((tag) => !(value || []).includes(tag))}
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
