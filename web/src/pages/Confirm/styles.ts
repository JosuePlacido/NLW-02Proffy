import styled from 'styled-components';
import { Check } from "@styled-icons/fa-solid/Check";

export const IconCheck = styled(Check)`
	color:var(--color-secundary);
	border-color:var(--color-secundary);
	border:solid 5px;
	border-radius:20px;
	padding:20px;
	margin:3.5rem 0;
`;
export const BackgroundBanner = styled.img`
	position:absolute;
	width:900px;
	height:450px;
	align-self: center;
	justify-self: center;
	z-index:0;
`;
export const Container = styled.main`
	width:100vw;
	height:100vh;
	display:flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position:relative;
	overflow:hidden;
	background-color:var(--color-primary);
	& h1{
		color:var(--color-title-in-primary);
		font-size:5rem;
		text-align:center;
	}
	& a{
		margin-top:8.6rem;
		z-index: 1;
	}
	& p{
		color:var(--color-text-in-primary);
		max-width:50rem;
		text-align:center;
	}
`;
