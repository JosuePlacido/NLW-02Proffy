import React, { useState, FormEvent } from 'react';
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
function Login(){
	const {signIn} = useAuth();
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [remember,setRemember] = useState(false);
    function handleLogin(e: FormEvent) {
		signIn(email,password,remember).then(() => history.push('/home'));
		e.preventDefault();
	}
    return (
		<PageBanner id="page-login">
			<Banner></Banner>
			<MainCentralized>
				<FormCentralized onSubmit={handleLogin}>
					<Title>Fazer login</Title>
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
						label="Senha"
						name="password"
						placeholder="Senha"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<DivPaddingVerticalSpaceBetWeen>
						<Checkbox
							label="Lembrar me?"
							name="remember"
							checked={remember}
							onChange={(e) => setRemember(e.target.checked)}
						></Checkbox>
						<LinkSecondary href="/recovery-passsword">
							Esqueçi minha senha.
						</LinkSecondary>
					</DivPaddingVerticalSpaceBetWeen>
					<ButtonAlternative type="submit">Entrar</ButtonAlternative>
				</FormCentralized>
				<FooterCentralized>
					<span>
						Não tem conta?
						<br />
						<LinkPrimary href="#">Cadastre-se</LinkPrimary>
					</span>
					<Label>
						É de graça
						<IconInText src={purpleHeartIcon} alt="Coração roxo" />
					</Label>
				</FooterCentralized>
			</MainCentralized>
		</PageBanner>
	);
}

export default Login;