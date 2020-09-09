import React from "react";
import { View, Text, CheckBox, Image, AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
	ContainerDefault,
	ContainerLightMargin,
	ViewVerticalCenterPadding,
	ViewHorizontalCenter,
	ViewHorizontalCenterPaddingVertical,
} from "../../assets/styles/views";
import { PageHeaderLogo } from "../../conponents/page-header";
import { Archivo40Light, Poppins24Base } from "../../assets/styles/texts";
import { BorderlessButton } from "react-native-gesture-handler";
import nextIcon from "../../assets/images/icons/next.png";
import { ContainerOnBoard, TextOnBoard, ViewButtonOnBoard } from "./styles";
import {
	PageHeaderOnBoardTwo
} from "../../conponents/page-header";
import { useFirstLaunch } from "../../contexts/firstLaunch";
const OnBoardingTwo: React.FC = () => {
	const navigation = useNavigation();
	const { register } = useFirstLaunch();
	async function handleNext() {
		await register();
		navigation.navigate("SignIn");
	}
	return (
		<ContainerDefault>
			<PageHeaderOnBoardTwo />
			<ContainerLightMargin>
				<ContainerOnBoard>
					<Archivo40Light>02.</Archivo40Light>
					<TextOnBoard>
						Ou dê aulas sobre o que você mais conhece.
					</TextOnBoard>
					<ViewButtonOnBoard>
						<BorderlessButton onPress={handleNext}>
							<Image source={nextIcon} resizeMode="contain" />
						</BorderlessButton>
					</ViewButtonOnBoard>
				</ContainerOnBoard>
			</ContainerLightMargin>
		</ContainerDefault>
	);
};

export default OnBoardingTwo;
