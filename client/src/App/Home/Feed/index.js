import React, { useState } from 'react';
import {
	FeedBlurredBottom,
	FeedBlurredTop,
	FeedBlurredTopCutout,
	FeedControls,
	FeedDiv,
	FeedTopNav,
	OverlayImage,
} from './styles';
import { useFeed, useGet } from '../../../Hooks';
import FeedCard from './FeedCard';
// num of profiles left before we get next batch
const nextBatchVal = 2;

const calcConditional = (page) => {
	if (!page) {
		return true;
	} else {
		const limit = 3;
		const currentBatch = Math.floor(page / limit);
		const nextBatch = limit * currentBatch + 1;
		console.log(page, nextBatch, currentBatch);
		return page === nextBatch;
	}
};

const Feed = () => {
	const [page, setPage] = useState(0);
	const [feed, setFeed] = useFeed(
		`/users/feed`,
		{ page: page ? page + nextBatchVal : page },
		calcConditional(page),
	);
	const renderFeed = () => {
		if (feed) {
			return feed.map((profile, index) => {
				return (
					<FeedCard
						key={index}
						index={index}
						page={page}
						profile={profile}
						setPage={setPage}
					/>
				);
			});
		}
	};
	return (
		<FeedDiv id={'Feed'}>
			{renderFeed()}
			<FeedBlurredTop />
			<FeedBlurredBottom />
		</FeedDiv>
	);
};

export default Feed;
