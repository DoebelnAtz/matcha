import styled from 'styled-components';
import { color, font, units } from '../../../../../Styles';

export const ProfileInputDiv = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
`;


export const ProfileInputLabel = styled.label`
    font-size: 24px;
    margin: auto 0 0 0;
    ${font.normal};
    
`;

export const ProfileInputInput = styled.input`
    ${font.normal};
    color: ${color.primary700};
    width: 100px;
    padding: 0 ${units.ps};
    text-align: end;
    margin: auto 0 0 auto;
    font-size: 24px;
    border: none;
    background-color: transparent;
    &:focus {
        outline: none;
        background-color: ${color.primary100};
    }
`;

export const ProfileInputEdit = styled.button`
    height: 30px;
    width: 30px;
    margin: auto auto 0 ${units.mm};
    background-image: url(${({src}) => src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    border: none;
    background-color: transparent;
    &:focus {
        outline: none;
    }
    
`;