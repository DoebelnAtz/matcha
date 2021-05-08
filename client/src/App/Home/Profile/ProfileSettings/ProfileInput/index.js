import React, { useRef } from 'react';
import {
    ProfileInputEdit,
    ProfileInputLabel,
    ProfileInputDiv,
    ProfileInputInput,
    ProfileInputTitleContainer,
} from './styles';
import EditIcon from '../../../../../Assets/icons/edit.svg'
const ProfileInput = ({value, onChange, name}) => {

    const inputRef = useRef(null);

    const handleInputFocus = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        inputRef.current.selectionStart = 0
        inputRef.current.selectionEnd = value.length;
    }

    return (
        <ProfileInputDiv>
            <ProfileInputTitleContainer>

            <ProfileInputLabel onClick={handleInputFocus} htmlFor={name}>
                {name}
            </ProfileInputLabel>
            <ProfileInputEdit src={EditIcon} onClick={handleInputFocus}  />
            </ProfileInputTitleContainer>
            <ProfileInputInput ref={inputRef} onChange={onChange} autoComplete={'off'} value={value} id={name}/>
        </ProfileInputDiv>
    )
};

export default ProfileInput