import React, { useState } from 'react';
import { View,Text, CheckBox,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ContainerDefault, ContainerLightMargin,
	 ViewHorizontalCenter, ViewHorizontalCenterPaddingVertical } from '../../assets/styles/views';
import { PageHeaderLogo } from '../../conponents/page-header';
import InputSection from '../../conponents/input-section';
import { InputCondensed } from "../../conponents/inputs";
import { TextSecondary } from '../../assets/styles/texts';
import { ButtonPrimary, TextLight } from '../../assets/styles/buttons';
import { BorderlessButton } from 'react-native-gesture-handler';
import backIcon from "../../assets/images/icons/back.png";
import api from '../../services/api';
const PasswordRecovery: React.FC = () => {
    const [email, setEmail] = useState("");
    const navigation = useNavigation();
    async function handleRecoveryPassword() {
		if(email){
		api.post("/recovery-password", { email })
			.then(() => navigation.navigate("Confirm", {
				title: "Redefinição enviada!",
				redirect:"SignIn",
				description:
					"Boa, agora é só checar o e-mail que foi enviado para" +
					" você redefinir sua senha e aproveitar os estudos.",
			}))
			.catch(() => alert(alert("Erro no cadastro.")));
			return;
		}
		alert('preencha o email');
	}
    function handleGoBack() {
		navigation.navigate("SignIn");
	}
    return (
		<ContainerDefault>
			<PageHeaderLogo />
			<ContainerLightMargin>
				<ViewHorizontalCenter>
					<BorderlessButton onPress={handleGoBack}>
						<Image source={backIcon} resizeMode="contain" />
					</BorderlessButton>
				</ViewHorizontalCenter>
				<InputSection title="Esqueceu sua senha?">
					<ViewHorizontalCenterPaddingVertical>
						<ViewHorizontalCenter>
							<TextSecondary>
								Não esquenta,{"\n"} vamos dar um jeito nisso.
							</TextSecondary>
						</ViewHorizontalCenter>
					</ViewHorizontalCenterPaddingVertical>
					<InputCondensed
						label="E-mail"
						value={email}
						onChangeText={(text: string) => setEmail(text)}
					/>
				</InputSection>
				<ButtonPrimary onPress={handleRecoveryPassword}>
					<TextLight>Entrar</TextLight>
				</ButtonPrimary>
			</ContainerLightMargin>
		</ContainerDefault>
	);
};
export default PasswordRecovery;