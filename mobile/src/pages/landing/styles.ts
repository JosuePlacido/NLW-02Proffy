import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const ButtonPrimary = styled.TouchableOpacity`
    height:150px;
    width:48%;
    border-radius:8px;
    padding:24px;
    justify-content:space-between;
    margin-top:40px;
    background-color:#9871f5;
`;

export const ButtonSecondary = styled(ButtonPrimary)`
    background-color:#04d361;
`;

export const FooterDescription = styled.Text`
    font-family:Poppins_400Regular;
    color:#d4c2ff;
    font-size:12px;
    line-height:20px;
    max-width:140px;
    margin-top:40px;
`;