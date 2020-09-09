import React from 'react';
import { View,Text, CheckBox,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ContainerDefault, ContainerLightMargin,ViewVerticalCenterPadding,
	 ViewHorizontalCenter, ViewHorizontalCenterPaddingVertical } from '../../assets/styles/views';
import {
	PageHeaderOnBoardOne,
	PageHeaderOnBoardTwo,
} from "../../conponents/page-header";
import {
	Archivo40Light,
	Poppins24Base,
} from "../../assets/styles/texts";
import { BorderlessButton } from 'react-native-gesture-handler';
import nextIcon from "../../assets/images/icons/next.png";
import { ContainerOnBoard, TextOnBoard, ViewButtonOnBoard } from "./styles";

const OnBoarding: React.FC = () => {
	const navigation = useNavigation();
	function handleNext() {
		navigation.navigate("OnBoardingTwo");
	}
	return (
		<ContainerDefault>
			<PageHeaderOnBoardOne />
			<ContainerLightMargin>
				<ContainerOnBoard>
					<Archivo40Light>01.</Archivo40Light>
					<TextOnBoard>
						Encontre vários professores para ensinar você.
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

export default OnBoarding;