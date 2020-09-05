import React, { useState, FormEvent } from "react";
import { useHistory, Link } from "react-router-dom";
import { Password } from "../../components/input";
import Banner from "../../components/banner";
import {
	FormCentralized,
	Title,
	ButtonPrimary,
	MainCentralized,
} from "../../assets/styles/styles";
import { InputCondensed } from "../../components/input";
import { PageBannerReverse } from "../../assets/styles/panels";
import { BackButton } from "../../assets/styles/buttons";
import api from "../../services/api";
import backIcon from "../../assets/images/icons/back.svg";

function Register() {
	const history = useHistory();
	const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
	const [avatar, setAvatar] = useState("");
	const [password, setPassword] = useState("");
	function handleRegisterUser(e: FormEvent) {
		api.post("/users", { email, name, surname, avatar, password })
			.then(() =>
				history.push({
					pathname: "/confirm",
					state: {
						title: "Cadastro concluído!",
						description:
							"Agora você faz parte da plataforma da Proffy." +
							"Tenha uma ótima experiência.",
					},
				})
			)
			.catch(() => alert("Erro no cadastro."));
		e.preventDefault();
	}
	return (
		<PageBannerReverse id="page-recovery-password">
			<MainCentralized>
				<FormCentralized onSubmit={handleRegisterUser}>
					<BackButton>
						<Link to="/">
							<img src={backIcon} alt="Voltaroltar" />
						</Link>
					</BackButton>
					<Title>Cadastro</Title>
					<br />
					<p>Preencha os dados abaixo para começar.</p>
					<br />
					<InputCondensed
						label="Nome"
						name="name"
						placeholder="Nome"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<InputCondensed
						label="Sobrenome"
						name="surname"
						placeholder="Sobrenome"
						value={surname}
						onChange={(e) => {
							setSurname(e.target.value);
						}}
					/>
					<InputCondensed
						label="Avatar"
						name="avatar"
						placeholder="URL"
						value={avatar}
						onChange={(e) => {
							setAvatar(e.target.value);
						}}
					/>
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
					<ButtonPrimary type="submit">Concluir cadastro</ButtonPrimary>
				</FormCentralized>
			</MainCentralized>
			<Banner></Banner>
		</PageBannerReverse>
	);
}
export default Register;
