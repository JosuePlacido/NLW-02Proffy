import styled from 'styled-components';
import {
	ContainerFlexCenter,
	SpanTextFooter,
	ContainerDefault,
	ContainerFullFlexCenter,
} from "../../assets/styles/panels";

export const Header = styled.header`
	width: 100%;
	padding: 0.6rem;
	display: flex;
	justify-content: space-between;
	align-content: center;
	@media (min-width: 1100px) {
		grid-area: header;
		padding: 1rem 2.4rem;
	}
`;
export const Container = styled(ContainerDefault)`
	@media (min-width: 1100px) {
		max-width: 1100px;
		display: grid;
		grid-template-rows: auto 350px 1fr;
		grid-template-columns: 2fr 1fr 1fr;
		grid-template-areas: "header header header" "logo hero hero" "buttons buttons total";
	}
`;
export const FundoLogin = styled(ContainerFullFlexCenter)`
	flex-direction: column;
	color: var(--color-text-in-primary);
	background: var(--color-primary);
`;
export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-box-footer);
	width: 100%;
	flex: 1;
`;
export const FooterContainer = styled(ContainerDefault)`
	@media (min-width: 1100px) {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr 2fr;
		grid-template-areas: "total total buttons";
	}
`;
export const TextFooter = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	font-size: 1.4rem;
	& p {
		width: 100%;
		color: var(--color-text-complement);
	}
	@media (min-width: 1100px) {
		max-width: 180px;
		& p {
			text-align: right;
		}
	}
`;
export const TextFooterTitle = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	font-size: 2rem;
	& p {
		width: 100%;
		text-align: left;
		color: var(--color-text-complement);
	}
`;
export const ContainerButton = styled(ContainerFlexCenter)`
	margin: 3.2rem 0;
	justify-self: end;
	& a {
		width: 25rem;
		height: 8.4rem;
		border-radius: 0.8rem;
		font: 700 1.6rem Archivo;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: var(--color-box-base);
		transition: background-color 0.2s;
		&:first-of-type {
			margin-right: 1.6rem;
			background: var(--color-primary-lighter);
			&:hover {
				background: var(--color-primary-light);
			}
		}
		&:last-of-type {
			background: var(--color-secundary);
			&:hover {
				background: var(--color-secundary-dark);
			}
		}
		@media (min-width: 1100px) {
			font-size: 2.4rem;
		}
	}
	@media (min-width: 1100px) {
		grid-area: buttons;
		justify-content: flex-start;
	}
`;
export const ButtonIcon = styled.img`
	width: 4rem;
	@media (min-width: 1100px) {
		margin-right: 2.4rem;
	}
`;
export const TotalConnections = styled(SpanTextFooter)`
	@media (min-width: 1100px) {
		grid-area: total;
		justify-self: end;
		align-self:end;
	}
`;
export const ContainerLogo = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 3.2rem;
	& h2 {
		font-weight: 500;
		font-size: 2.4rem;
		line-height: 4.6rem;
		margin-top: 0.8rem;
	}
	& img {
		height: 10rem;
	}
	@media (min-width: 1100px) {
		grid-area: logo;
		align-self: center;
		margin: 0;
		& h2 {
			margin-left: 10rem;
			text-align: initial;
			font-size: 3rem;
		}
	}
`;
export const HeroImage = styled.img`
    width:100%;
	@media (min-width:1100px){
        grid-area: hero;
        justify-self: end;
	}
`;