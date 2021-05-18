import styled from 'styled-components';
import { color, components, units } from '../../../Styles';

export const SearchDiv = styled.div`
	display: flex;
	height: 100%;
	width: calc(100% - ${units.pm} * 2);
	padding: 0 ${units.pm};
	flex-direction: column;
`;

export const SearchInputDiv = styled.div`
	display: flex;
	width: 100%;
`;

export const SearchInput = styled.input`
	${components.input};
	height: 24px;
	border-radius: ${units.rm} 0 0 ${units.rm};
`;

export const SearchIcon = styled.div`
	background-color: ${color.primary100};
	height: 32px;
	width: 30px;
	background-image: url(${({ src }) => src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: 20px;
	padding-right: ${units.pm};
	margin-top: auto;
	border-radius: 0 ${units.rm} ${units.rm} 0;
`;

export const SearchResultList = styled.div`
	flex-direction: column;
	margin-top: ${units.ml};
`;
