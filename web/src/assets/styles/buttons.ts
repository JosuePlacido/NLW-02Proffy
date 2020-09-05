import styled from 'styled-components';

export const Default = styled.button`
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font:  700 1.6 Archivo;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
`;
export const LinkDefault = styled.a`
    border-radius: 0.8rem;
    font: 700 2.0rem Archivo;
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.2s;
`;
export const LinkSecondary = styled(LinkDefault)`
	height: 5.6rem;
	padding:0 4rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    &:hover {
		background: var(--color-secundary-dark);
	}
`;
export const Logout = styled(Default)`
	height: 4rem;
	padding: 0.8rem;
    color:var(--color-text-in-primary);
    background-color: var(--color-primary-dark);
    &:hover {
        background: var(--color-primary-darker);
        color: var(--color-button-text);
    }
`;
 export const BackButton = styled.header`
	position:absolute;
	justify-content:flex-start;
	top:0;
	margin-top:2.3rem;
`;
