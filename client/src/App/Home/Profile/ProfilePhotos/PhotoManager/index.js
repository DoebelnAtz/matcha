import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import {
	DraggableDiv,
	ProfilePhotosContainer,
	PhotoManagerDroppable,
} from './styles';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import AddPhoto from './AddPhoto';

const PhotoManager = ({ pictures, profile, setProfile }) => {
	console.log(pictures, profile.pictures);
	const renderPhotos = () => {
		return (
			<Droppable droppableId={`profile-pictures`} direction={'vertical'}>
				{(provided, snapshot) => (
					<PhotoManagerDroppable
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{pictures.map((pic, index) => {
							return (
								<Draggable
									key={pic.url}
									draggableId={pic.url}
									index={index}
								>
									{(provided, snapshot) => (
										<DraggableDiv
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<ProfilePhoto
												key={pic.url}
												picture={pic}
												profile={profile}
												setProfile={setProfile}
												index={index}
											/>
										</DraggableDiv>
									)}
								</Draggable>
							);
						})}
						{provided.placeholder}
					</PhotoManagerDroppable>
				)}
			</Droppable>
		);
	};
	return (
		<ProfilePhotosContainer>
			{renderPhotos()}
			<AddPhoto profile={profile} setProfile={setProfile} />
		</ProfilePhotosContainer>
	);
};

export default PhotoManager;
