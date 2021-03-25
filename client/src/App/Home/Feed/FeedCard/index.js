import React from 'react';
import { FeedCardDiv, ProfilePictureDiv } from './styles';
import Picture from '../../../Components/Picture';
import { useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `translate3d(${r}px, ${s}px, 0)`;

const config = { mass: 1, tension: 400, friction: 40 };
const FeedCard = ({ profile, page, setPage, index }) => {
	const [props, set, stop] = useSpring(() => ({
		xy: [0, 0],
		config,
	})); // Create a bunch of springs using the helpers above

	const bind = useDrag(
		({ down, movement: [mx, my], direction: [xDir], velocity }) => {
			const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
			const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
			let isGone = false;
			if (!down && trigger) {
				isGone = true;
				setPage(page + 1);
			}
			const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
			const y = down ? my : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
			console.log(velocity);

			set({ xy: [x, y] });
		},
	);
	return (
		<>
			<FeedCardDiv
				style={{ transform: props.xy.interpolate(trans) }}
				{...bind()}
				page={page}
				index={index}
			>
				<ProfilePictureDiv>
					<Picture pic={profile.pictures[0]} />
				</ProfilePictureDiv>
				{profile.name}
				<button onClick={() => setPage(page + 1)}>next</button>
			</FeedCardDiv>
		</>
	);
};

export default FeedCard;
