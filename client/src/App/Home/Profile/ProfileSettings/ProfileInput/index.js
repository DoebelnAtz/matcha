import React from 'react'
import { ProfileInputEdit, ProfileInputLabel, ProfileInputDiv, ProfileInputInput } from './styles';

const ProfileInput = ({value, onChange}) => {
    return (
        <ProfileInputDiv>
            <ProfileInputLabel htmlFor={'name'}>
                Name
            </ProfileInputLabel>
            
            <ProfileInputEdit  />
            <ProfileInputInput onChange={onChange} autoComplete={'off'} value={value} id={'name'}/>
        </ProfileInputDiv>
    )
};

export default ProfileInput