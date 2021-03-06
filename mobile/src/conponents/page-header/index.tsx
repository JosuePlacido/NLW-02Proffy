import React, { ReactNode } from 'react';
import { Image,View,Text } from 'react-native';
import {
	Container,
	Title,
	BackgroundBanner,
	LogoInBanner,
	TitleInBanner,
	IconInBanner,
	BackgroundBannerOBoard,
	ContainerOnBoard,
	Toolbar,
	ToolbarTitle,
	ViewHorizontalCenterPaddingHorizontal,
} from "./styles";
import {
	ViewHorizontalCenter,
	ViewHorizontalCenterPadding,
} from "../../assets/styles/views";
import background from '../../assets/images/background.png';
import background1 from '../../assets/images/onboard1.png';
import background2 from '../../assets/images/onboard2.png';
import backIcon from '../../assets/images/icons/back.png';
import LogoIcon from '../../assets/images/logo.png';
import Logo from '../../assets/images/PROFFY.png';
import {BorderlessButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../assets/styles/images';
import { DescriptionPrimary } from '../../assets/styles/texts';
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesICon from "../../assets/images/icons/give-classes.png";
interface PageHeaderProfileProps {
    title:string;
    headerRight?:ReactNode;
}
interface PageHeaderProps {
	title: string;
	description: string;
	headerRight?: ReactNode;
}
export const PageHeaderLogo:React.FC = () =>{
    return (
		<BackgroundBanner source={background} resizeMode="cover">
			<LogoInBanner source={Logo} resizeMode="stretch" />
			<TitleInBanner>
				Sua plataforma de {"\n"}estudos online.
			</TitleInBanner>
		</BackgroundBanner>
	);
}

export const PageHeaderOnBoardOne: React.FC = () => {
	return (
		<ContainerOnBoard>
			<BackgroundBannerOBoard source={background1} resizeMode="contain">
				<IconInBanner source={studyIcon} resizeMode="contain" />
			</BackgroundBannerOBoard>
		</ContainerOnBoard>
	);
};
export const PageHeaderOnBoardTwo: React.FC = () => {
	return (
		<ContainerOnBoard color="#04D361">
			<BackgroundBannerOBoard
				color="#04D361"
				source={background2}
				resizeMode="contain"
			>
				<IconInBanner source={giveClassesICon} resizeMode="contain" />
			</BackgroundBannerOBoard>
		</ContainerOnBoard>
	);
};
const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	description,
	headerRight,
	children,
}) => {
	const navigation = useNavigation();
	function handleGoBack() {
		navigation.navigate("Landing");
	}
	return (
		<Container>
			<Toolbar>
				<BorderlessButton onPress={handleGoBack}>
					<Image source={backIcon} resizeMode="contain" />
				</BorderlessButton>
				<ToolbarTitle>{title}</ToolbarTitle>
				<Image source={LogoIcon} resizeMode="contain" />
			</Toolbar>
			<ViewHorizontalCenterPaddingHorizontal>
				<Title>{description}</Title>
				{headerRight}
			</ViewHorizontalCenterPaddingHorizontal>
			{children}
		</Container>
	);
};
export const PageHeaderProfile: React.FC<PageHeaderProfileProps> = ({
	title,
	children,
}) => {
	const navigation = useNavigation();
	function handleGoBack() {
		navigation.navigate("Landing");
	}
	return (
		<Container>
			<Toolbar>
				<BorderlessButton onPress={handleGoBack}>
					<Image source={backIcon} resizeMode="contain" />
				</BorderlessButton>
				<ToolbarTitle>{title}</ToolbarTitle>
				<Image source={LogoIcon} resizeMode="contain" />
			</Toolbar>
			{children}
		</Container>
	);
};
export default PageHeader;