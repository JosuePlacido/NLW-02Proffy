import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { ContainerPrimary, ViewHorizontalCenter, ViewHorizontalCenterPadding } from "../../assets/styles/views";
export const TextDescription = styled.Text`
    font-family:Poppins_400Regular;
    color:#f4c2ff;
    margin-bottom:30px;
`;
export const ViewHorizontalCenterPaddingHorizontal = styled(
	ViewHorizontalCenterPadding
)`
	padding: 0 20px;
`;
export const Container = styled.View`
    background-color:#8258e5;
`;
export const ContainerOnBoard = styled(ContainerPrimary)<{ color?: string }>`
	background-color: ${(props) => props.color || "#8258e5"};
	flex: 1 1;
	padding: 10px;
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
	background-color: #8258e5;
	padding-top: 20px;
	align-items: center;
	justify-content: center;
`;
export const BackgroundBannerOBoard = styled.ImageBackground<{ color?: string }>`
	min-height: 250px;
	background-color: ${(props) => props.color || "#8258e5"};
	align-items: center;
	justify-content: center;
`;
export const LogoInBanner = styled.Image`
    width: 200px;
    height:50px;
`;
export const IconInBanner = styled.Image`
    width: 200px;
    height:100px;
`;
export const TitleInBanner = styled(TextDescription)`
    font-size:13px;
    width: 200px;
    justify-content:flex-start;
`;
export const Toolbar = styled(ViewHorizontalCenter)`
	background-color:#774DD6;
	align-items:center;
	padding:10px 20px;
`;
export const ToolbarTitle = styled.Text`
    font-family:Poppins_400Regular;
    color:#f4c2ff;
    font-size:13px;
`;