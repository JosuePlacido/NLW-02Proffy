import styled from 'styled-components/native';

export const ButtonPrimary = styled.TouchableOpacity`
    background-color:#04d361;
    height:58px;
    align-items:center;
    justify-content:center;
    border-radius:8px;
`;
export const TextLight = styled.Text`         
    font-family:Archivo_700Bold;
    color:#fff;
    font-size:16px;
`;
export const TextLightBig = styled(TextLight)`
    font-size:20px;
`;
export const TextLightWithICon = styled(TextLight)`
    margin-left:16px;
`;
export const ButtonLinkText = styled.Text`
    font-family:Poppins_400Regular;    
    color:#8257E5;
`;