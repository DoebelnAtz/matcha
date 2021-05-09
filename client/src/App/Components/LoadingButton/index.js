import React, { useState } from 'react';
import { SaveBtn } from './styles';
import LoadingDots from '../Loading';
import { color } from '../../../Styles/';
import { useMounted } from '../../../Hooks';

const LoadingButton = ({ children, onClick, disabled = false }) => {
	const [saved, setSaved] = useState(false);
	const [error, setError] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const isMounted = useMounted();

	const handleClick = async (e) => {
		isMounted && setIsSaving(true);
		try {
			if (await onClick(e)) {
				if (isMounted.current) {
					setSaved(true);
					setIsSaving(false);
				}
				setTimeout(() => {
					isMounted.current && setSaved(false);
				}, 500);
			} else {
				if (isMounted.current) {
					setIsSaving(false);
					setError(true);
				}
				setTimeout(() => {
					isMounted.current && setError(false);
				}, 500);
			}
		} catch (e) {
			if (isMounted.current) {
				setIsSaving(false);
				setError(true);
			}
			setTimeout(() => {
				isMounted.current && setError(false);
			}, 500);
		}
	};

	return (
		<SaveBtn
			saved={saved}
			error={error}
			disabled={disabled}
			onClick={(e) => handleClick(e)}
		>
			{isSaving ? (
				<LoadingDots
					height={13}
					color={color.primary700}
					cycleSpeed={200}
				/>
			) : (
				children
			)}
		</SaveBtn>
	);
};

export default LoadingButton;
