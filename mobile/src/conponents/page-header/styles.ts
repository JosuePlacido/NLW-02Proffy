import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
export const TextDescription = styled.Text`
    font-family:Poppins_400Regular;
    color:#f4c2ff;
    margin-bottom:30px;
`;
export const Container = styled.View`
    background-color:#8258e5;
    padding: 40px;
`;
export const Title = styled.Text`
    font-family:Archivo_700Bold;
    color:#fff;
    font-size:24px;
    line-height:32px;
    flex:1;
    margin:15px 0;
`;
export const BackgroundBanner = styled.ImageBackground`
    height: 250px;
    background-color:#8258e5;
    padding-top:20px;
    align-items: center;
    justify-content: center;
`;
export const LogoInBanner = styled.Image`
    width: 200px;
    height:50px;
`;
export const TitleInBanner = styled(TextDescription)`
    font-size:13px;
    width: 200px;
    justify-content:flex-start;
`;