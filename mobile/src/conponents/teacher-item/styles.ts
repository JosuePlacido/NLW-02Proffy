import {StyleSheet} from 'react-native';
import { TextSecondary } from '../../assets/styles/texts';
import styled from 'styled-components/native';
export const ViewProfileInfo = styled.View`
    margin-left:16px;
`;
export const Bio = styled(TextSecondary)`
    margin:12px 24px;
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
export const PreFooter = styled.View`
    border-top-width:1px;
    border-top-color:#e6e6f0;
    padding:24px;
`;
export const Footer = styled(PreFooter)`
    background-color:#fafafc;
    margin-top:24px;
    align-items:center;
    padding:24px;
    flex-direction:column;
`;
export const ViewHeaderSchedule = styled.View`
	flex-direction:row;
	justify-content:space-around;
	align-items:center;
	border-radius:10px;
`;
export const ViewScheduleItem = styled(ViewHeaderSchedule)`
	justify-content:space-around;
    border-width:1px;
    background-color:#fafafc;
    border-color:#e6e6f0;
	padding:10px;
	margin: 5px 0;
`;
export const TextHeaderSchedule = styled(TextSecondary)`
	font-size:12px;
`;