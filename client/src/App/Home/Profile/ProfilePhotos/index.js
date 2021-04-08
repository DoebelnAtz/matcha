import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import ProfilePhoto from './PhotoManager/ProfilePhoto';
import { useGet } from '../../../../Hooks';
import {
	AddPhotoDiv,
	DraggableDiv,
	ProfilePhotosContainer,
	ProfilePhotosDiv,
	ProfilePhotosPageTitle,
} from './styles';
import AddImageIcon from '../../../../Assets/icons/add.svg';
import AddPhoto from './PhotoManager/AddPhoto';
import PhotoManager from './PhotoManager';
import api from '../../../../Api';

const ProfilePhotos = () => {
	const [profile, setProfile, isLoading] = useGet('/users/me');

	const updatePictures = async (pictures) => {
		try {
			await api.patch('/users/me/pictures', { pictures });
		} catch (e) {
			console.log(e);
		}
	};

	const reorder = (srcIndex, destIndex) => {
		const pictures = profile.pictures;
		const [removed] = pictures.splice(srcIndex, 1);
		pictures.splice(destIndex, 0, removed);

		return pictures;
	};

	const onDragEnd = (result) => {
		// dropped outside the list
		console.log(result);
		if (!result.destination) {
			return;
		}
		const srcIndex = result.source.index;
		const destIndex = result.destination.index;
		const srcRow = result.source.droppableId;
		const destRow = result.destination.droppableId;
		const updatedPictures = reorder(srcIndex, destIndex, srcRow, destRow);
		updatePictures(updatedPictures);
	};

	return (
		<DragDropContext onDragEnd={(res) => onDragEnd(res)}>
			<ProfilePhotosDiv className={'scrollbar-animation'}>
				<ProfilePhotosPageTitle>Photos</ProfilePhotosPageTitle>
				{!isLoading && (
					<PhotoManager
						pictures={profile.pictures}
						profile={profile}
						setProfile={setProfile}
					/>
				)}
			</ProfilePhotosDiv>
		</DragDropContext>
	);
};

export default ProfilePhotos;
