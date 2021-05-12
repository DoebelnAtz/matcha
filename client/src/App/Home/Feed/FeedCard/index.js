import React, { useRef, useState } from 'react';
import {
	FeedCardAgeSpan,
	FeedCardBioDiv,
	FeedCardBioParagraph,
	FeedCardContainerDiv,
	FeedCardContentDiv,
	FeedCardDiv,
	FeedCardNameDiv,
	FeedCardNameSpan,
	FeedCardTag,
	FeedCardTagDiv,
	FeedCardTagName,
	ProfilePictureDiv,
} from './styles';
import Picture from '../../../Components/Picture';
import { useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import BlurredBackground from '../../../Components/BlurredBackground';
import { calculateAge, capitalizeFirst } from '../../../../Utils';

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (x, y, r) => `
translate3d(${x}px, ${y}px, 0) 
rotate(${r}deg)`;

const config = { mass: 1, tension: 500, friction: 45 };
const FeedCard = ({ profile, page, setPage, index }) => {
	const [props, set, stop] = useSpring(() => ({
		xy: [0, 0, 0],
		config,
	}));
	const ref = useRef(null);
	const contentRef = useRef(null);
	const [expanded, setExpanded] = useState(false);
	const [expandBio, setExpandBio] = useState(false);
	const expansionSpring = useSpring({
		height:
			expandBio && expanded
				? ref.current.clientHeight || '200px'
				: '70px',
	});

	const viewProfile = (e) => {
		if (expanded) {
			setExpandBio(false);
			setExpanded(false);
		} else {
			setExpanded(true);
		}
	};

	const renderTags = () => {
		if (profile.tags) {
			return profile.tags.map((tag, index) => {
				return (
					<FeedCardTag key={index}>
						<FeedCardTagName>{tag}</FeedCardTagName>
					</FeedCardTag>
				);
			});
		}
	};

	const bind = useDrag(
		({
			down,
			movement: [mx, my],
			initial: [ox, oy],
			direction: [xDir],
			vxvy: [vx],
			tap,
		}) => {
			if (tap) {
				let contentHeight = contentRef.current.getBoundingClientRect()
					.top;
				console.log(
					tap,
					oy,
					ox,
					contentRef.current.getBoundingClientRect(),
				);
				if (expanded && oy > contentHeight) {
					setExpandBio(!expandBio);
				} else {
					viewProfile();
				}
			}
			if (expanded) return;
			const velocity = Math.min(0.25, Math.abs(vx));
			const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
			const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
			let isGone = false;
			if (!down && trigger) {
				isGone = true;
				setPage(page + 1);
			}
			const x = isGone ? (300 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
			const y = down ? my / 2 : 0; // When a card is gone it flies out left or right, otherwise goes back to zero
			const rDragging =
				((x / 100) * (window.innerHeight / 2 - oy)) /
				(100 - (velocity + 1));
			const rSwiped =
				((x / 100) * (window.innerHeight / 2 - oy)) /
				(100 - (velocity + 5));
			const r = isGone ? rSwiped : rDragging;
			const xCorrection = -(x / 5);
			const yCorrection = Math.abs(x) / 10;
			// console.log(Math.floor(x), Math.floor(y), r, ox, oy);

			set({ xy: [x + xCorrection, y + yCorrection, r] });
		},
		{ bounds: { top: -50, bottom: 20 }, filterTaps: true },
	);
	return (
		<FeedCardDiv
			expanded={expanded}
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
			<FeedCardContentDiv
				style={expansionSpring}
				expandBio={expandBio}
				expanded={expanded}
				ref={contentRef}
				id={'content'}
			>
				<FeedCardContainerDiv ref={ref}>
					<FeedCardNameDiv>
						<FeedCardNameSpan>
							{capitalizeFirst(profile.name)}
						</FeedCardNameSpan>
					</FeedCardNameDiv>
					<FeedCardAgeSpan>
						{calculateAge(profile.dob)}
					</FeedCardAgeSpan>
					<FeedCardBioParagraph>{profile.bio}</FeedCardBioParagraph>
					{profile.tags && (
						<FeedCardTagDiv>{renderTags()}</FeedCardTagDiv>
					)}
				</FeedCardContainerDiv>
			</FeedCardContentDiv>
			<ProfilePictureDiv id={'profile-picture'}>
				<Picture pic={profile.pictures[0]} />
			</ProfilePictureDiv>
		</FeedCardDiv>
	);
};

export default FeedCard;
