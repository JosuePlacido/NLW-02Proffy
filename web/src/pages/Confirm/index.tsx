import React, { useState, FormEvent } from "react";
import { useLocation } from 'react-router-dom';
import Fundo from "../../assets/images/success-background.svg";
import { BackgroundBanner, Container, IconCheck } from "./styles";
import { TitleInPrimary } from "../../assets/styles/styles";
import { LinkSecondary } from "../../assets/styles/buttons";
interface IPageConfirmState {
	title: string;
	description: string;
}
function Confirm() {
	const location = useLocation<IPageConfirmState>();
	const { title, description } = location.state;
	console.log(location.state);
	return (
		<Container id="page-confirm">
			<BackgroundBanner src={Fundo} alt="Fundo" className="background" />
			<IconCheck size="70" title="Check" />
			<TitleInPrimary>{title}</TitleInPrimary>
			<p>{description}</p>
			<LinkSecondary href="/login">Voltar ao login</LinkSecondary>
		</Container>
	);
}

export default Confirm;
