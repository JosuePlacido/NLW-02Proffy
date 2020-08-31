import React, { useState,useEffect, FormEvent } from 'react';
import {Link, useHistory} from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';
import { useAuth } from "../../contexts/auth";
import DisplayUser from '../../components/display-user';
import { Logout } from '../../assets/styles/buttons';
import { IconButton } from "../../assets/styles/images";
import { PowerOff } from "@styled-icons/fa-solid/PowerOff";
import {
	Header,
	FundoLogin,
	ContainerButton,
	ButtonIcon,
	ContainerLogo,
	HeroImage,
	Container,
	Footer,
	TextFooter,
	FooterContainer,
	TextFooterTitle,
} from "./styles";

function Landing(){
    const history = useHistory();
	const { signed, signOut, user } = useAuth();
	const [totalConnections,setTotalConnection] = useState(0);
	let name = '';
	let avatar = '';
	if(user){
		name = `${user.name} ${user.surname}`;
		avatar = user.avatar;
	}
	useEffect(() =>{
        api.get('home').then(response => {
            const {total} = response.data;
            setTotalConnection(total);
        })
	}, []);
	async function handleLogout(e: FormEvent){
		await signOut();
		e.preventDefault();
	}
    return (
		<FundoLogin>
			<Container>
				<Header>
					<DisplayUser name={name} alt={name} avatar={avatar} />
					<Logout onClick={handleLogout}>
						<PowerOff size="20" title="Sair" />
					</Logout>
				</Header>
				<ContainerLogo>
					<img src={logoImg} alt="Proffy" />
					<h2>
						Sua plataforma de
						<br /> estudos online!
					</h2>
				</ContainerLogo>
				<HeroImage src={landingImg} alt="Plataforma de estudo" />
			</Container>
			<Footer>
				<FooterContainer>
					<TextFooterTitle>
						<p>
							Seja bem vindo.
							<br />
							<h4>O que deseja fazer?</h4>
						</p>
					</TextFooterTitle>
					<TextFooter>
						<p>
							Total de {totalConnections} conexões já realizadas
							<IconButton
								src={purpleHeartIcon}
								alt="Coração roxo"
							/>
						</p>
					</TextFooter>
					<ContainerButton>
						<Link to="/study">
							<ButtonIcon src={studyIcon} alt="Estudar" /> Estudar
						</Link>
						<Link to="give-classes">
							<ButtonIcon src={giveIcon} alt="Dar aulas" /> Dar
							aulas
						</Link>
					</ContainerButton>
				</FooterContainer>
			</Footer>
		</FundoLogin>
	);
}

export default Landing;