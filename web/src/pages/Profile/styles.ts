import styled from 'styled-components';
import { ContainerDefault } from "../../assets/styles/styles";

export const Container = styled(ContainerDefault)`
	width: 100%;
	@media (min-width: 700px) {
		max-width:100vw;
	} ;
`;
export const ProfileBackground = styled.img`
	width: 100%;
	position: absolute;
	top: 1rem;
`;
export const Avatar = styled.img`
	border-radius:50%;
	width:100px;
	height:100px;
	align-self: center;
`;
export const DisplayProfile = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	width: 100%;
	flex-direction: column;
	text-align: center;
	color: var(--color-text-in-primary);
	& h1 {
		font-size: 150%;
		text-align: center;
		color: var(--color-title-in-primary);
	}
`;
export const Main = styled.main`
	background-color: var(--color-box-base);
	width: 100%;
	max-width: 74rem;
	border-radius: 0.8rem;
	margin: -3.2rem auto 3.2rem;
	padding-top: 6.4rem;
	overflow: hidden;
	@media (min-width: 700px) {
		& .schedule-item {
			display: grid;
			grid-template-columns: 2fr 1fr 1fr;
			grid-column-gap: 1.6rem;
		}
		& .schedule-item .input-block {
			margin-top: 0 !important;
		}
	} ;
`;
export const Fieldset = styled.fieldset`
	border: 0;
	padding: 0 0.4rem;
	& + fieldset {
		margin-top: 6.4rem;
	}
	& .select-block + .input-block, .input-block + .textarea-block {
		margin-top: 2.4rem;
	}
	@media (min-width: 700px) {
		padding: 0 6.4rem;
		& span {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 1.6rem
		}
	};
`;
export const FieldsetAula = styled(Fieldset)`
	@media (min-width: 700px) {
		& span {
			display: grid;
			grid-template-columns: 2fr 1fr;
			grid-gap: 1.6rem;
		}
	} ;
`;
export const Footer = styled.footer`
	padding: 4rem 2.4rem;
	background: var(--color-box-footer);
	border-top: 1px solid var(--color-line-in-white);
	margin-top: 6.4rem;
	& p {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.4rem;
		line-height: 2.4rem;
		color: var(--color-text-complement);
	}
	& p span b {
		color: var(--color-primary);
	}
	& p img {
		margin-right: 2rem;
	}
	@media (min-width: 700px) {
		padding: 4rem 6.4rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		& button {
			width: 20rem;
			margin-top: 0;
		}
	}
`;
export const ScheduleItem = styled.div`
	border-bottom: 1px solid var(--color-line-in-white);
	margin-top: 2.4rem;
	& span {
		display: flex;
		justify-content: center;
		align-content: center;
	}
	&:first-of-type {
		margin-top: 0;
	}
	@media (min-width: 700px) {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		grid-column-gap: 1.6rem;
		& span {
			grid-column-start: 1;
			grid-column-end: 4;
		}
	}
`;
export const ButtonRemoveScheduleItem = styled.button`
	padding: 0 3rem;
	background: var(--color-button-text);
	border: 0;
	color: #ff0000;
	font: 700 1.6rem Archivo;
	cursor: pointer;
	margin: 1.4rem;
	margin-bottom: -1rem;
	transition: color 0.2s;
	&:hover {
		color: #cc0000;
	}
`;
