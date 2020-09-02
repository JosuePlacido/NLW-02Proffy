import React, { useState, FormEvent } from "react";
import { useHistory, Link } from "react-router-dom";
import Banner from "../../components/banner";
import { FormCentralized, Title, ButtonAlternative, MainCentralized } from "../../assets/styles/styles";
import { InputCondensed } from "../../components/input";
import { PageBannerReverse } from "../../assets/styles/panels";
import api from "../../services/api";
import backIcon from "../../assets/images/icons/back.svg";
import { Header } from "./styles";

function RecoveryPassword() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	function handleRecoveryPassword(e: FormEvent) {
		api.post("/recovery-password", { email })
			.then(() =>
				history.push({
					pathname: "/confirm",
					state: {
						title: "Redefinição enviada!",
						description:
							"Boa, agora é só checar o e-mail que foi enviado " +
							"para você redefinir sua senha e aproveitar os estudos",
					},
				})
			)
			.catch(() => alert(alert("Erro no cadastro.")));
		e.preventDefault();
	}
	return (
		<PageBannerReverse id="page-recovery-password">
			<MainCentralized>
				<FormCentralized onSubmit={handleRecoveryPassword}>
					<Header>
						<Link to="/">
							<img src={backIcon} alt="Voltaroltar" />
						</Link>
					</Header>
					<Title>
						Eita, esqueçeu <br /> sua senha?
					</Title>
					<br />
					<p>Não esquenta, vamos dar um jeito nisso.</p>
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
					<ButtonAlternative type="submit">Entrar</ButtonAlternative>
				</FormCentralized>
			</MainCentralized>
			<Banner></Banner>
		</PageBannerReverse>
	);
}
export default RecoveryPassword;