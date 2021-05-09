import React, { useRef, useState } from 'react';
import { useDismiss } from '../../../Hooks';
import {
	OptionList,
	OptionSearch,
	SearchContainer,
	SearchIcon,
	SearchSelectDiv,
	Option,
} from './styles';
import searchIcon from '../../../Assets/icons/search.svg';

const SearchSelect = ({ value, onChange, optionList, onSelect }) => {
	const [expanded, setExpanded] = useState(false);
	const insideRef = useRef(null);
	const searchInputRef = useRef(null);
	const [selectedIndex, setSelectedIndex] = useState(0);

	useDismiss(insideRef, () => setExpanded(false));

	const handleKeyPress = (e) => {
		if (e.key === 'Enter' && optionList.length > selectedIndex) {
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (selectedIndex < optionList.length - 1) {
			}
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			if (selectedIndex > 0) {
			}
		}
	};

	const handleFocus = (e) => {
		!expanded && setExpanded(true);
	};

	const handleSearchChange = (e) => {
		let value = e.target.value;
		onChange(value);
	};

	const renderOptions = () => {
		return optionList.map((option, index) => {
			return (
				<Option
					title={option}
					key={index}
					highlighted={value === option}
					onClick={(e) => {
						e.stopPropagation();
						onSelect(option);
						setExpanded(false);
					}}
				>
					{option}
				</Option>
			);
		});
	};

	return (
		<SearchSelectDiv ref={insideRef}>
			<SearchContainer expanded={expanded}>
				<OptionSearch
					placeholder={'search'}
					value={value}
					onFocus={handleFocus}
					onChange={handleSearchChange}
				/>
				<SearchIcon src={searchIcon} />
			</SearchContainer>
			<OptionList expanded={expanded}>{renderOptions()}</OptionList>
		</SearchSelectDiv>
	);
};

export default SearchSelect;
