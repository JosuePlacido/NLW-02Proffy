import styled from 'styled-components';

export const DisplayUser = styled.span`
	padding: 3.2rem 2rem;
	display: flex;
	align-items: center;
	& img {
		width: 8rem;
		height: 8rem;
		border-radius: 50%;
	}
	& div {
		margin-left: 2.4rem;
		& strong {
			font: 700 2.4rem Archivo;
			display: block;
			color: var(--color-text-title);
		}
		& span {
			font-size: 1.6rem;
			display: block;
			margin-top: 0.4rem;
		}
	}
	@media (min-width: 700px) {
		padding: 3.2rem;
	}
`;
export const DescriptionIcon = styled.p`
	max-width:100% !important;
	display:flex;
	align-items:center;
	justify-content:flex-end;
	font-weight:300;
	& img{
		margin-right:2.4rem;
	}
	& small {
		font-size:13px;
		line-height:20px;
	}
`
