import React from 'react';
import {
	FeedCardBioDiv,
	FeedCardBioParagraph,
	FeedCardContentDiv,
	FeedCardDiv,
	FeedCardNameDiv,
	FeedCardNameSpan,
	ProfilePictureDiv,
} from './styles';
import Picture from '../../../Components/Picture';
import { useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import BlurredBackground from './BlurredBackground';
import { capitalizeFirst } from '../../../../Utils';

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (x, y, r) => `
perspective(1500px)
translate3d(${x}px, ${y}px, 0) 
rotateX(${-y / 20}deg) 
rotate(${r}deg)`;

const config = { mass: 1, tension: 500, friction: 45 };
const FeedCard = ({ profile, page, setPage, index }) => {
	const [props, set, stop] = useSpring(() => ({
		xy: [0, 0, 0],
		config,
	}));

	const bind = useDrag(
		({
			down,
			movement: [mx, my],
			initial: [ox, oy],
			direction: [xDir],
			vxvy: [vx],
		}) => {
			const velocity = Math.abs(vx);
			const trigger = velocity > 0.3; // If you flick hard enough it should trigger the card to fly out
			const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
			let isGone = false;
			if (!down && trigger) {
				isGone = true;
				setPage(page + 1);
			}
			const x = isGone ? (300 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
			const y = down ? my / 2 : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
			const rDragging =
				((x / 100) * (window.innerHeight / 2 - oy)) /
				(100 - (velocity + 1));
			const rSwiped =
				((x / 100) * (window.innerHeight / 2 - oy)) /
				(100 - (velocity + 5));
			const r = isGone ? rSwiped : rDragging;
			const xCorrection = -(x / 5);
			const yCorrection = Math.abs(x) / 10;
			console.log(Math.floor(x), Math.floor(y), r, ox, oy);

			set({ xy: [x + xCorrection, y + yCorrection, r] });
		},
	);
	return (
		<>
			<FeedCardDiv
				onContextMenu={(e) => {
					//this prevents righ-click contentmenue event on long tab to pop up the menu
					e.preventDefault();
				}}
				key={index}
				style={{ transform: props.xy.interpolate(trans) }}
				{...bind()}
				page={page}
				index={index}
			>
				<BlurredBackground hash={profile.pictures[0].hash} />
				<ProfilePictureDiv id={'profile-picture'}>
					<Picture pic={profile.pictures[0]} />
				</ProfilePictureDiv>
				{/*<FeedCardContentDiv id={'content'}>*/}
				{/*	<FeedCardNameDiv>*/}
				{/*		<FeedCardNameSpan>*/}
				{/*			{capitalizeFirst(profile.name)}*/}
				{/*		</FeedCardNameSpan>*/}
				{/*	</FeedCardNameDiv>*/}
				{/*	<FeedCardBioDiv>*/}
				{/*		<FeedCardBioParagraph>*/}
				{/*			{profile.bio}*/}
				{/*		</FeedCardBioParagraph>*/}
				{/*	</FeedCardBioDiv>*/}
				{/*</FeedCardContentDiv>*/}
			</FeedCardDiv>
		</>
	);
};

export default FeedCard;
