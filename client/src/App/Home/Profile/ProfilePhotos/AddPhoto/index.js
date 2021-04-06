import React, { useRef, useState } from 'react';
import { useGet } from '../../../../../Hooks';
import { AddPhotoDiv, HiddenFileInput } from './styles';
import AddImageIcon from '../../../../../Assets/icons/add.svg';
import api from '../../../../../Api';

const acceptedTypes = ['image/jpeg', 'image/png'];

const AddPhoto = () => {
	const inputRef = useRef(null);
	const [selectedFile, setSelectedFile] = useState();
	const [errors, setErrors] = useState({
		fileError: '',
	});
	const handleFileUpload = async (event) => {
		const data = new FormData();

		if (!!selectedFile && selectedFile.size < 50000000) {
			data.append('file', selectedFile);
			try {
				let resp = await api.post(`/images/upload`, data);
				return true;
			} catch (e) {
				console.log(e);
				return false;
			}
		} else {
			return false;
		}
	};

	const handleFileChange = (files) => {
		let targetFile = files[0];

		if (targetFile) {
			if (targetFile.size > 50000000) {
				setErrors({
					...errors,
					fileError: 'File size exceeds 50mb',
				});
			} else if (!acceptedTypes.includes(targetFile.type)) {
				setErrors({
					...errors,
					fileError: 'Allowed formats: jpeg, png',
				});
			} else {
				setErrors({
					...errors,
					fileError: '',
				});
				setSelectedFile(targetFile);
			}
		}
	};
	console.log(inputRef);
	const handleAddPhotoClick = (e) => {
		e.preventDefault();
		console.log('clicked');
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	return (
		<AddPhotoDiv onClick={(e) => handleAddPhotoClick(e)} src={AddImageIcon}>
			<HiddenFileInput type={'file'} ref={inputRef} />
		</AddPhotoDiv>
	);
};

export default AddPhoto;
