import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {
	ContainerPrimary
} from "../../assets/styles/views";

import { Avatar } from "../../assets/styles/images";
export const ButtonPrimary = styled.TouchableOpacity`
    height:130px;
    width:45%;
    border-radius:8px;
    padding:24px;
    justify-content:space-between;
    margin-top:20px;
    background-color:#9871f5;
`;
export const Logout = styled.TouchableOpacity`
	height: 40px;
	padding: 10px;
	border-radius: 8px;
	justify-content: center;
	background-color: #774dd6;
	color: #d4c2ff;
`;
export const ButtonSecondary = styled(ButtonPrimary)`
    background-color:#04d361;
`;
export const ContainerHeader = styled(ContainerPrimary)`
	padding: 20px;
	max-height:50%;
`;
export const SmallAvatar = styled(Avatar)`
	width:40px;
	height:40px;
	margin-right:20px;
`;
export const FooterDescription = styled.Text`
    font-family:Poppins_400Regular;
    color:#d4c2ff;
    font-size:12px;
    line-height:20px;
    max-width:140px;
    margin-top:20px;
`;