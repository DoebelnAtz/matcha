import React, { useRef } from 'react';
import {
    ProfileTextareaDiv,
    ProfileTextareaEdit,
    ProfileTextareaInput, ProfileTextareaLabel, ProfileTextareaTitleContainer,
} from './styles';
import EditIcon from '../../../../../Assets/icons/edit.svg'
const ProfileTextarea = ({value, onChange, name}) => {

    const inputRef = useRef(null);

    const handleInputFocus = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        inputRef.current.selectionStart = 0
        inputRef.current.selectionEnd = value.length;
    }

    return (
        <ProfileTextareaDiv>
            <ProfileTextareaTitleContainer>

            <ProfileTextareaLabel onClick={handleInputFocus} htmlFor={name}>
                {name}
            </ProfileTextareaLabel>
            <ProfileTextareaEdit  src={EditIcon} onClick={handleInputFocus}  />
            </ProfileTextareaTitleContainer>
            <ProfileTextareaInput  ref={inputRef} onChange={onChange} autoComplete={'off'} value={value} id={name}/>
        </ProfileTextareaDiv>
    )
};

export default ProfileTextarea