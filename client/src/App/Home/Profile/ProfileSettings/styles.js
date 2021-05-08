import styled from 'styled-components';
import { color, components, font, units } from '../../../../Styles';

export const ProfileSettingsDiv = styled.div`
    width: 100%;
    height: 100%;
`;

export const ProfileSettingsContainer = styled.div`
    width: calc(100% - ${units.pm} - ${units.pl});
    padding: ${units.pm} ${units.pm} ${units.pm} ${units.pl};
    display: flex;
    flex-direction: column;
`;

export const ProfileNameDiv = styled.div`
    width: 100%;
    
`;

export const ProfileEmailDiv = styled.div`
    width: 100%;
`;
