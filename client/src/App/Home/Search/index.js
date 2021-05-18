import React, { useState } from 'react';
import {
	SearchDiv,
	SearchIcon,
	SearchInput,
	SearchInputDiv,
	SearchResultList,
} from './styles';
import { useGet } from '../../../Hooks';
import ResultCard from './ResultCard';
import searchIcon from '../../../Assets/icons/search.svg';
const Search = () => {
	const [searchVal, setSearchVal] = useState('');
	const [profiles, setProfiles, isLoading] = useGet(
		`/users/search?q=${searchVal}`,
	);

	const handleSearchChange = (e) => {
		let value = e.target.value;
		setSearchVal(value);
	};

	const renderResults = () => {
		if (profiles) {
			return profiles.map((profile) => {
				return <ResultCard profile={profile} />;
			});
		}
	};

	return (
		<SearchDiv>
			<SearchInputDiv>
				<SearchInput value={searchVal} onChange={handleSearchChange} />
				<SearchIcon src={searchIcon} />
			</SearchInputDiv>
			<SearchResultList>{renderResults()}</SearchResultList>
		</SearchDiv>
	);
};

export default Search;
