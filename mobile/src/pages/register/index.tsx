import React, { useState } from "react";
import { View, Text, CheckBox, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
	ContainerDefault,
	ContainerLightMargin,
	ViewHorizontalCenter,
	ViewHorizontalCenterPaddingVertical,
} from "../../assets/styles/views";
import InputSection from "../../conponents/input-section";
import { InputCondensed } from "../../conponents/inputs";
import {
	TextSecondary,
	DescriptionPrimary,
} from "../../assets/styles/texts";
import {
	ButtonPrimary,
	TextLight,
	ButtonSecondary,
} from "../../assets/styles/buttons";
import { BorderlessButton } from "react-native-gesture-handler";
import backIcon from "../../assets/images/icons/back.png";
import api from "../../services/api";
import { BigTitle } from './styles';
const Register: React.FC = () => {
    const navigation = useNavigation();
	const [firstStep, setfirstStep] = useState(true);
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [avatar, setAvatar] = useState(
		"https://m.media-amazon.com/images/M/MV5BMTYzODE3YjYtMjU5NS00YTkzLTk2ZmMtOWJiNjQ2NmVmNzMyXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL50_SY1000_CR0,0,691,1000_AL_.jpg"
	);
	function handleRegisterUser() {
		api.post("/users", { email, name, surname, avatar, password })
			.then(() =>
				navigation.navigate("Confirm", {
					title: "Cadastro concluído",
					redirect: "SignIn",
					description:
						"Agora voce faz parte da plataforma Proffy" +
						" você redefinir sua senha e aproveitar os estudos.",
				})
			)
			.catch(() => alert("Erro no cadastro."));
	}
	function handleNextStep() {
		setfirstStep(false);
	}
	function handleBackStep() {
		setfirstStep(true);
	}
    function handleGoBack() {
		navigation.navigate("SignIn");
	}

		return (
			<ContainerDefault>
				<ContainerLightMargin>
					<ViewHorizontalCenter>
						<BorderlessButton
							onPress={firstStep ? handleGoBack : handleBackStep}
						>
							<Image source={backIcon} resizeMode="contain" />
						</BorderlessButton>
					</ViewHorizontalCenter>
					<ViewHorizontalCenterPaddingVertical>
						<BigTitle>Crie sua conta gratuíta</BigTitle>
					</ViewHorizontalCenterPaddingVertical>
					<ViewHorizontalCenterPaddingVertical>
						<TextSecondary>
							Baste preencher esses dados {"\n"} e você estará
							conosco.
						</TextSecondary>
					</ViewHorizontalCenterPaddingVertical>
					{firstStep?<InputSection title="01. Quem é você?">
						<InputCondensed
							label="Nome"
							value={name}
							onChangeText={(text: string) => setName(text)}
						/>
						<InputCondensed
							label="Sobrenome"
							value={surname}
							onChangeText={(text: string) => setSurname(text)}
						/>
						<InputCondensed
							label="Avatar"
							value={avatar}
							onChangeText={(text: string) => setAvatar(text)}
						/>
					</InputSection>:<InputSection title="02. Email e senha">
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
					<InputCondensed
						label="Senha"
						secureTextEntry={true}
						value={password}
						onChangeText={(t) => setPassword(t)}
					/>
				</InputSection>
				}
				{firstStep?
					<ButtonSecondary onPress={handleNextStep}>
						<TextLight>Próximo</TextLight>
					</ButtonSecondary>:
				<ButtonPrimary onPress={handleRegisterUser}>
					<TextLight>Concluir cadastro</TextLight>
				</ButtonPrimary>
				}
				</ContainerLightMargin>
			</ContainerDefault>
		);
};
export default Register;