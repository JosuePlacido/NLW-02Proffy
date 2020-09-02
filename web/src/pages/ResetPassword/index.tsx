import React, { useState, FormEvent } from 'react';
import { useLocation } from "react-router-dom";
import Banner from '../../components/banner';
import Input,{InputCondensed,Password,Checkbox} from '../../components/input';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { PageBanner } from "../../assets/styles/panels";
import {Title,ButtonAlternative,Label,LinkPrimary,
    DivPaddingVerticalSpaceBetWeen,
    FormCentralized,IconInText,FooterCentralized,
    LinkSecondary,MainCentralized} from '../../assets/styles/styles';
import { useAuth } from '../../contexts/auth';
function ResetPassword(){
	const location = useLocation();
    const history = useHistory();
    const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const token = location.pathname.split("/").reverse()[0];
    function handleResetPassword(e: FormEvent) {
		api.post("/reset-password", { email, password,token})
			.then(() =>
				history.push({
					pathname: "/confirm",
					state: {
						title: "Senha redefinida!",
						description:
							"Boa, agora é só fazer o login.",
					},
				})
			)
			.catch(() => alert(alert("Erro no cadastro.")));
		e.preventDefault();
	}
    return (
		<PageBanner id="page-reset-password">
			<Banner></Banner>
			<MainCentralized>
				<FormCentralized onSubmit={handleResetPassword}>
					<Title>Reconfigure sua senha.</Title>
					<br />
					<InputCondensed
						label="E-mail"
						name="email"
						placeholder="E-mail"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<Password
						label="Nova senha"
						name="password"
						placeholder="Nova senha"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/><br/>
					<ButtonAlternative type="submit">Entrar</ButtonAlternative>
				</FormCentralized>
			</MainCentralized>
		</PageBanner>
	);
}

export default ResetPassword;