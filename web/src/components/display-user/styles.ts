import styled from 'styled-components';

export const Span = styled.a`
    font-size: 1.4rem;
    display:flex;
    align-items: center;
    justify-content: center;
	background:none;
	cursor:pointer;
	text-decoration:none;
	color:var(--text-in-primary);
	border-radius:5px;
	padding:0 2.3rem;
	transition: all 0.2s;
	&:hover{
		background-color:var(--color-primary-dark);
	}
`;

export const Img = styled.img`
	border-radius:50%;
	width:40px;
	height:40px;
	margin:5px;
`;