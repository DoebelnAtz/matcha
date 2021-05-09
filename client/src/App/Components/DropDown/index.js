import { useDismiss, useWidth } from '../../../Hooks';
import { capitalizeFirst } from '../../../Utils';
import {
	DropdownDiv,
	DropDownList,
	Option,
	CurrentOption,
	SearchInput,
	DropDownIcon,
} from './styles';
import React, { useEffect, useRef, useState } from 'react';

import dropdownIcon from '../../../Assets/icons/arrow.svg';

const Dropdown = ({
	state,
	onChange,
	optionList,
	width = '100px',
	height = '28px',
	children,
	withFilter = false,
	modalOverflow = false,
	onFilterChange,
}) => {
	const [expanded, setExpanded] = useState(false);
	const [options, setOptions] = useState(optionList);
	const [filterInput, setFilterInput] = useState('');
	const inside = useRef(null);
	const filterInputRef = useRef(null);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const renderOptions = () => {
		return options.map(({ option, id }, index) => {
			return (
				<Option
					title={option}
					key={index}
					height={height}
					highlighted={
						state === option ||
						(withFilter && index === selectedIndex)
					}
					onClick={(e) => {
						e.stopPropagation();
						onChange({ option, id });
						setExpanded(false);
					}}
				>
					{option}
				</Option>
			);
		});
	};

	useDismiss(inside, () => setExpanded(false));

	// make sure input field is focused when user click on dropdown.
	useEffect(() => {
		if (filterInputRef && expanded) {
			filterInputRef.current?.focus();
		}
	}, [expanded]);

	// we copy the optionList to a state, here we make sure it updates when the
	// input changes

	useEffect(() => {
		setOptions(optionList);
	}, [optionList.length]);

	// Filter options
	const handleFilterChange = (e) => {
		let target = e.target;
		setFilterInput(target.value);
		onFilterChange
			? setOptions(onFilterChange(target.value))
			: setOptions(
					optionList.filter(({ option }) => {
						return option
							.toLowerCase()
							.includes(target.value.toLowerCase());
					}),
			  );
	};

	const handleEnterPress = (e) => {
		if (e.key === 'Enter' && options.length > selectedIndex) {
			onChange(options[selectedIndex]);
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (selectedIndex < options.length - 1) {
				setSelectedIndex(selectedIndex + 1);
			}
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			if (selectedIndex > 0) {
				setSelectedIndex(selectedIndex - 1);
			}
		}
	};

	const handleClick = (e) => {
		e.stopPropagation();
		setExpanded(!expanded);
	};

	return (
		<DropdownDiv
			expanded={expanded}
			ref={inside}
			width={width}
			height={height}
		>
			<CurrentOption
				expanded={expanded}
				onClick={(e) => handleClick(e)}
				height={height}
			>
				{children}
				<span>{state.option}</span>
				<DropDownIcon
					expanded={expanded}
					src={dropdownIcon}
					alt={'v'}
				/>
			</CurrentOption>

			<DropDownList
				expanded={expanded}
				modalOverflow={modalOverflow}
				width={width}
				height={height}
			>
				{withFilter && (
					<SearchInput
						ref={filterInputRef}
						placeholder={'filter'}
						onChange={(e) => handleFilterChange(e)}
						onKeyDown={(e) => handleEnterPress(e)}
						value={filterInput}
					/>
				)}
				{renderOptions()}
			</DropDownList>
		</DropdownDiv>
	);
};

export default Dropdown;
