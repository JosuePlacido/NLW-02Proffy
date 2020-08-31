import React,{useState} from 'react';
import { Text, Image, View } from "react-native";
import {
	ContainerDefault,ContainerLightMargin,
	ViewHorizontalCenter,
	ViewHorizontalCenterPadding,
} from "../../assets/styles/views";
import { Banner } from '../../assets/styles/images';
import {
	TextSecondary,
	TitleSecondaryPoppins,
	DescriptionPrimarySmall,
} from "../../assets/styles/texts";
import { TextLightBig } from '../../assets/styles/buttons';
import {
	ButtonPrimary,
	ButtonSecondary,
	FooterDescription,
	SmallAvatar,
	Logout,
	ContainerHeader,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesICon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import {useNavigation, useFocusEffect} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler';
import api from '../../services/api';
import {
	TitleSecondaryPoppinsBold,
	ItemSubTitle,
} from "../../assets/styles/texts";
import {useAuth} from '../../contexts/auth';
function Landing(){
    const { signOut,user } = useAuth();
    const [totalConnections,setTotalConnection] = useState(0);
	let name = "";
	let avatar = "";
	if (user) {
		name = `${user.name} ${user.surname}`;
		avatar = user.avatar;
	}
    useFocusEffect(() =>{
        api.get('home').then(response => {
            const {total} = response.data;
            setTotalConnection(total);
        })
	});
    const navigation = useNavigation();
    function handleNavigateToGiveClassesPage(){
        navigation.navigate('GivaClasses');
    }
    function handleNavigateToStudyPage(){
        navigation.navigate('StudyTabs');
    }
    function handleLogout(){
        signOut();
    }
    return (
		<ContainerDefault>
			<ContainerHeader>
				<ViewHorizontalCenter>
					<ViewHorizontalCenter>
						<SmallAvatar source={{ uri: avatar }} />
						<DescriptionPrimarySmall>
							{name}
						</DescriptionPrimarySmall>
					</ViewHorizontalCenter>
					<Logout onPress={handleLogout}>
						<Ionicons
							name="ios-power"
							color="#d4c2ff"
							size={24}
						/>
					</Logout>
				</ViewHorizontalCenter>
				<Banner source={landingImg} />
			</ContainerHeader>
			<ContainerLightMargin>
				<TitleSecondaryPoppins>
					Seja bem vindo,{"\n"}
					<TitleSecondaryPoppinsBold>
						o que deseja fazer?
					</TitleSecondaryPoppinsBold>
				</TitleSecondaryPoppins>
				<ViewHorizontalCenter>
					<ButtonPrimary onPress={handleNavigateToStudyPage}>
						<Image source={studyIcon} />
						<TextLightBig>Estudar</TextLightBig>
					</ButtonPrimary>
					<ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
						<Image source={giveClassesICon} />
						<TextLightBig>Dar aulas</TextLightBig>
					</ButtonSecondary>
				</ViewHorizontalCenter>
				<FooterDescription>
					Total de {totalConnections} conexões já realizadas{" "}
					<Image source={heartIcon} />
				</FooterDescription>
			</ContainerLightMargin>
		</ContainerDefault>
	);
}

export default Landing;