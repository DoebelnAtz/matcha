import React, { useRef, useState } from 'react';
import { AddPhotoDiv, AddPhotoIcon, HiddenFileInput } from './styles';
import AddImageIcon from '../../../../../Assets/icons/add.svg';
import { encode } from 'blurhash';
import api from '../../../../../Api';
import { Rings } from 'svg-loaders-react';
import { color } from '../../../../../Styles';

const acceptedTypes = ['image/jpeg', 'image/png'];

const AddPhoto = ({ profile, setProfile, index }) => {
	const inputRef = useRef(null);
	const [uploading, setUploading] = useState(false);
	const [selectedFile, setSelectedFile] = useState();
	const [errors, setErrors] = useState({
		fileError: '',
	});

	const loadImage = async (file) =>
		new Promise((resolve, reject) => {
			const img = new Image();
			const fr = new FileReader();
			fr.onload = function () {
				img.src = fr.result;
				resolve(img);
			};
			fr.readAsDataURL(file);
			img.onerror = (...args) => reject(args);
		});

	const getImageData = async (image) => {
		const canvas = document.createElement('canvas');
		canvas.width = image.width;
		canvas.height = image.height;
		const context = canvas.getContext('2d');
		context.drawImage(image, 0, 0);
		return context.getImageData(0, 0, image.width, image.height);
	};

	const encodeImageToBlurhash = async (img) => {
		const image = await loadImage(img);
		const imageData = await getImageData(image);
		console.log(image, imageData);
		console.log(imageData.width, imageData.height);
		return encode(imageData.data, imageData.width, imageData.height, 5, 3);
	};

	const handleFileUpload = async (file) => {
		const data = new FormData();
		if (!uploading) setUploading(true);
		if (!!file && file.size < 50000000) {
			const hash = await encodeImageToBlurhash(file);
			console.log(hash);
			data.append('file', file);
			data.append('hash', hash);
			console.log(data);
			try {
				let resp = await api.post(`/images/upload`, data);
				setProfile({ ...profile, pictures: resp.pics });
				setUploading(false);
				return true;
			} catch (e) {
				console.log(e);
				setUploading(false);
				return false;
			}
		} else {
			setUploading(false);
			return false;
		}
	};

	const handleFileChange = async (files) => {
		let targetFile = files[0];
		console.log(targetFile);
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
				await handleFileUpload(targetFile);
			}
		}
	};
	const handleAddPhotoClick = (e) => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	return (
		<>
			{}
			<AddPhotoDiv onClick={(e) => handleAddPhotoClick(e)}>
				{uploading ? (
					<AddPhotoIcon>
						<Rings stroke={color.primary} />
					</AddPhotoIcon>
				) : (
					<AddPhotoIcon src={AddImageIcon} />
				)}
				<HiddenFileInput
					type={'file'}
					onChange={(e) => handleFileChange(e.target.files)}
					ref={inputRef}
				/>
			</AddPhotoDiv>
		</>
	);
};

export default AddPhoto;
