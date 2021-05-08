import React from 'react';
import {
	DoBSelect,
	DoBSelectOption,
	DoBSelectorContainer,
	DoBTimeContainer,
	DropDownContainer,
} from './styles';
import Dropdown from '../DropDown';

/**
	date: Date
 	onChange: (Date) => void
**/

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const DoBPicker = ({ date, onChange }) => {
	const day = date.getUTCDate();
	const month = date.getUTCMonth();
	const year = date.getUTCFullYear();

	const handleDayChange = ({ option }) => {
		let tempDate = new Date(date);
		tempDate.setUTCDate(option);
		onChange(tempDate);
	};

	const handleMonthChange = (month) => {
		let tempDate = new Date(date);

		tempDate.setUTCMonth(month.id);
		onChange(tempDate);
	};

	const handleYearChange = ({ option }) => {
		let tempDate = new Date(date);

		tempDate.setUTCFullYear(option);
		onChange(tempDate);
	};

	const renderDayOptions = () => {
		let options = [];
		const daysInMonth = new Date(year, month, 0).getUTCDate();
		for (let i = 1; i <= daysInMonth; i++) {
			options.push({ option: i, id: i });
		}
		return options;
	};

	const renderMonthOptions = () => {
		let options = [];

		// we dont want to hardcode months
		// in case the amount of months in a year change...
		const monthsInYear = 12;
		for (let i = 0; i < monthsInYear; i++) {
			options.push({ option: months[i], id: i });
		}
		return options;
	};

	const renderYearOptions = () => {
		let options = [];
		const currentYear = new Date().getUTCFullYear();
		for (let i = currentYear; i > currentYear - 100; i--) {
			options.push({ option: i, id: i });
		}
		return options;
	};
	return (
		<DoBSelectorContainer>
			<DoBTimeContainer>
				Day:
				<DropDownContainer>
					<Dropdown
						width={'56px'}
						state={{ option: day, id: day }}
						optionList={renderDayOptions()}
						onChange={handleDayChange}
					/>
				</DropDownContainer>
			</DoBTimeContainer>
			<DoBTimeContainer>
				Month:
				<DropDownContainer>
					<Dropdown
						width={'140px'}
						state={{ option: months[month], id: month }}
						optionList={renderMonthOptions()}
						onChange={handleMonthChange}
					/>
				</DropDownContainer>
			</DoBTimeContainer>
			<DoBTimeContainer>
				Year:
				<DropDownContainer>
					<Dropdown
						width={'80px'}
						state={{ option: year, id: year }}
						optionList={renderYearOptions()}
						onChange={handleYearChange}
					/>
				</DropDownContainer>
			</DoBTimeContainer>
		</DoBSelectorContainer>
	);
};

export default DoBPicker;
