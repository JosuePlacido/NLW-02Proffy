import styled from 'styled-components/native';

export const Title = styled.Text`
    font-family:Archivo_700Bold;
    color:#32264C;
    font-size:20px;
`;
export const TitleLight = styled(Title)`
    color:#fff;
`;
export const TitleLightPoppins = styled(TitleLight)`
    font-family:Poppins_400Regular;
`;
export const TitleLightPoppinsBold = styled(TitleLight)`
    font-family:Poppins_600SemiBold;
`;
export const TextSecondary = styled.Text`
    font-family:Poppins_400Regular;
    font-size:14px;
    color:#646180;
    line-height:24px;
`;
export const ItemSubTitle = styled.Text`
    font-family:Poppins_400Regular;
    color:#646180;
    font-size:12px;
    margin-top:4px;
`;
export const DescriptionPrimary = styled.Text`
    color: #d4c2ff;
    font-size: 16px;
    line-height:26px;
    font-family:Poppins_400Regular;
    text-align:center;
`;