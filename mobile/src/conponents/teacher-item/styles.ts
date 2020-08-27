import {StyleSheet} from 'react-native';
import { TextSecondary } from '../../assets/styles/texts';
import styled from 'styled-components/native';
export const ViewProfileInfo = styled.View`
    margin-left:16px;
`;
export const Bio = styled(TextSecondary)`
    margin:0 24px;
`;
export const Price = styled(TextSecondary)`
    padding-bottom:16px;
`;
export const PriceValue = styled.Text`
    font-family:Archivo_700Bold;
    color:#8557e5;
    font-size:16px;
`;
export interface FavoriteButtonInterface{
    backgroundColor: string;
 }
export const FavoriteButton = styled.TouchableOpacity<FavoriteButtonInterface>`
    background-color:${props => props.backgroundColor};
    width:56px;
    height:56px;
    border-radius:8;
    justify-content:center;
    align-items:center;
    margin-right:8px;
`;
export const ContactButton = styled(FavoriteButton)`
    background-color:#04d361;
    flex:1;
    flex-direction:row;
`;